import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLoginUrl, getMe, logout as apiLogout } from '../api/client';
import type { User } from '../types';

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Synchronously extract token from OAuth redirect fragment before getMe() fires.
    // NOTE: this must use window.location.hash directly, not a React Router hook.
    // Ordering guarantee holds because AuthProvider wraps Router in App.tsx.
    const hash = window.location.hash;
    if (hash.startsWith('#token=')) {
      localStorage.setItem('session_token', hash.slice('#token='.length));
      sessionStorage.removeItem('demo_notice_seen');
      history.replaceState(null, '', window.location.pathname);
    }
    getMe()
      .then((res) => {
        if (res.data.authenticated) {
          setUser(res.data);
        } else {
          localStorage.removeItem('session_token');
          setUser(null);
        }
      })
      .catch(() => {
        localStorage.removeItem('session_token');
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  async function login() {
    const res = await getLoginUrl();
    window.location.href = res.data.auth_url;
  }

  async function logout() {
    localStorage.removeItem('session_token');
    await apiLogout().catch(() => {});
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}

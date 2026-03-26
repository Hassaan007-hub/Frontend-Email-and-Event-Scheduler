import { useAuth } from '../context/AuthContext';

export default function SignInButton() {
  const { login, loading } = useAuth();

  return (
    <button
      onClick={login}
      disabled={loading}
      className="glass glass-hover gradient-border flex w-full items-center justify-center gap-3 rounded-xl py-3 text-sm font-medium text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-900/20 disabled:opacity-50 disabled:hover:translate-y-0"
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
          Signing in…
        </>
      ) : (
        <>
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
            <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
            <path fill="#FBBC05" d="M11.68 28.18A14.88 14.88 0 0 1 11 24c0-1.45.25-2.86.68-4.18v-5.7H4.34A23.93 23.93 0 0 0 0 24c0 3.86.92 7.51 2.56 10.73l7.12-5.55z" />
            <path fill="#EA4335" d="M24 9.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 3.99 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.34 5.7C13.42 13.62 18.27 9.75 24 9.75z" />
          </svg>
          Continue with Google
        </>
      )}
    </button>
  );
}

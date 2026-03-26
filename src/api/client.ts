import axios from 'axios';
import type { User } from '../types';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string,
  headers: {
    'X-API-Key': import.meta.env.VITE_API_SECRET_KEY as string,
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('session_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getMe = () => api.get<User>('/auth/me');
export const getLoginUrl = () => api.get<{ auth_url: string }>('/auth/login');
export const logout = () => api.post('/auth/logout');
export const sendChatMessage = (message: string) =>
  api.post<{ reply: string }>('/agent/chat', { message });

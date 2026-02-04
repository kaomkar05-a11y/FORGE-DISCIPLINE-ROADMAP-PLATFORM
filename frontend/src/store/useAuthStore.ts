import { create } from 'zustand';

interface AuthState {
  token: string | null;
  displayName: string | null;
  setAuth: (token: string, displayName: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('forge_token'),
  displayName: null,
  setAuth: (token, displayName) => {
    localStorage.setItem('forge_token', token);
    set({ token, displayName });
  },
  clearAuth: () => {
    localStorage.removeItem('forge_token');
    set({ token: null, displayName: null });
  }
}));

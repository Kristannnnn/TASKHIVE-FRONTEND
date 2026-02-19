import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  _id: string;
  username: string;
  email: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  expiresIn: number | null;
  expiresAt: number | null;
  login: (token: string, user: User, expiresIn: number) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      expiresIn: null,
      expiresAt: null,

      login: (token, user, expiresIn) => {
        const expiresAt = Date.now() + expiresIn * 1000;
        set({
          token,
          user,
          expiresIn,
          expiresAt,
        });

        const timeout = expiresAt - Date.now();

        if (timeout > 0) {
          setTimeout(() => {
            get().logout();
          }, timeout);
        }
      },

      logout: () =>
        set({
          token: null,
          user: null,
          expiresAt: null,
          expiresIn: null,
        }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),

      onRehydrateStorage: () => (state) => {
        if (!state) return;

        if (state.expiresAt && Date.now() > state.expiresAt) {
          state.logout();
        } else if (state.expiresAt) {
          const timeout = state.expiresAt - Date.now();

          setTimeout(() => {
            useAuthStore.getState().logout();
          }, timeout);
        }
      },
    },
  ),
);

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getCurrentUser, hasPermission } from "@/services/auth-service";
import {
  login as loginApi,
  logout as logoutApi,
} from "@/services/api/auth-api";
import type { User, UserRole, UserScope } from "@/types/user-type";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: (navigate: (path: string) => void) => void;
  checkAuth: () => void;
  hasPermission: (params: {
    roles?: UserRole[];
    scopes?: UserScope[];
  }) => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: getCurrentUser(),
      isAuthenticated: !!getCurrentUser(),
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await loginApi(email, password);
          if (response.success) {
            const user = getCurrentUser();
            set({ user, isAuthenticated: true, isLoading: false });
            return { success: true };
          } else {
            set({
              isLoading: false,
              error: response.message || "Login failed",
              isAuthenticated: false,
            });
            return {
              success: false,
              message: response.message || "Login failed",
            };
          }
        } catch (error) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : "An unexpected error occurred";
          set({
            isLoading: false,
            error: errorMessage,
            isAuthenticated: false,
          });
          return { success: false, message: errorMessage };
        }
      },

      logout: (navigate) => {
        logoutApi(navigate);
        set({ user: null, isAuthenticated: false });
      },

      checkAuth: () => {
        const user = getCurrentUser();
        set({ user, isAuthenticated: !!user });
      },

      hasPermission: ({ roles, scopes }) => {
        return hasPermission({ roles, scopes });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

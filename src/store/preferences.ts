import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface PreferencesState {
  theme: "light" | "dark" | "system";
  fontSize: number;
  language: string;

  // Actions
  setTheme: (theme: "light" | "dark" | "system") => void;
  setFontSize: (size: number) => void;
  setLanguage: (language: string) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      theme: "system",
      fontSize: 16,
      language: "en",

      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "preferences-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

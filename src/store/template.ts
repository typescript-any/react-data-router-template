import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Template for creating a new store
 *
 * Follow these steps to create a new store:
 * 1. Duplicate this file
 * 2. Rename it to match your store's purpose (e.g., cart.ts)
 * 3. Define your state interface and implement the store
 * 4. Export the store from index.ts
 */

// Replace "Template" with your store name (e.g., Cart, Products, etc.)
// Define your item type
interface TemplateItem {
  id: string;
  name: string;
  // Add other properties as needed
}

interface TemplateState {
  // Define your state properties here
  items: TemplateItem[];
  isLoading: boolean;
  error: string | null;

  // Define your actions here
  addItem: (item: TemplateItem) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
}

// Using localStorage persistence (optional - remove persist wrapper if not needed)
export const useTemplateStore = create<TemplateState>()(
  persist(
    (set) => ({
      // Initial state
      items: [],
      isLoading: false,
      error: null,

      // Actions
      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      clearItems: () => set({ items: [] }),
    }),
    {
      name: "template-storage", // Change this to match your store
      storage: createJSONStorage(() => localStorage),
    }
  )
);

/**
 * Without persistence, the store would look like this:
 *
 * export const useTemplateStore = create<TemplateState>()((set) => ({
 *   // Initial state
 *   items: [],
 *   isLoading: false,
 *   error: null,
 *
 *   // Actions
 *   addItem: (item) => set((state) => ({ items: [...state.items, item] })),
 *   removeItem: (id) => set((state) => ({ items: state.items.filter(item => item.id !== id) })),
 *   clearItems: () => set({ items: [] }),
 * }));
 */

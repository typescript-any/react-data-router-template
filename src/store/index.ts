/**
 * Central export file for all stores
 *
 * This pattern allows you to:
 * 1. Keep your store logic separated in different files
 * 2. Have a single import point for all stores
 * 3. Easily add new stores as your application grows
 *
 * Import stores from this file using:
 * import { useAuthStore, usePreferencesStore } from '@/store/store';
 */

// Re-export all stores
export { useAuthStore } from "./auth";
export { usePreferencesStore } from "./preferences";
// Add new store exports here as needed

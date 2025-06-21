# Store Structure

This directory contains all the Zustand stores for the application.

## Directory Structure

```
store/
├── auth.ts           # Authentication store
├── preferences.ts    # User preferences store
├── template.ts       # Template for creating new stores
└── index.ts          # Main export file for all stores
```

## Usage

### Importing Stores

```tsx
// Import stores from the central store.ts file
import { useAuthStore, usePreferencesStore } from "@/store/store";

function MyComponent() {
  // Use the stores in your component
  const user = useAuthStore((state) => state.user);
  const theme = usePreferencesStore((state) => state.theme);

  // ...
}
```

### Creating a New Store

1. Duplicate the `template.ts` file
2. Rename it to match your store's purpose (e.g., `cart.ts`)
3. Define your state interface and implement the store
4. Export the store from `store.ts`

## Best Practices

1. Each store should handle a specific domain of your application
2. Keep stores small and focused
3. Use TypeScript interfaces to define the shape of your state
4. Consider whether persistence is needed for each store
5. Use selectors when accessing store state in components

## Example Selector Pattern

```tsx
// Define selectors outside components for better performance
const selectUser = (state: AuthState) => state.user;
const selectIsAuthenticated = (state: AuthState) => state.isAuthenticated;

function ProfileComponent() {
  // Use selectors to subscribe to only the parts of state you need
  const user = useAuthStore(selectUser);
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  // ...
}
```

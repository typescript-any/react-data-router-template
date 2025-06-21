import { lazy, Suspense } from "react";
import type { ComponentType, ReactNode } from "react";
import { PageLoading } from "@/components/loading";

// Type for the import function
type ImportFunction = () => Promise<{ default: ComponentType<unknown> }>;

// Options for the lazy wrapper
interface LazyOptions {
  fallback?: ReactNode;
  displayName?: string;
}

/**
 * Higher-order function that wraps React.lazy with configurable fallback
 * and automatic component naming
 *
 * @param importFn - The dynamic import function
 * @param options - Configuration options for fallback and naming
 * @returns A React component wrapped with Suspense and lazy loading
 */
export function createLazyComponent(
  importFn: ImportFunction,
  options: LazyOptions = {}
): ComponentType<unknown> {
  const { fallback, displayName } = options;

  // Create the lazy component
  const LazyComponent = lazy(importFn);

  // Create the wrapper component with Suspense
  const WrappedComponent: ComponentType<unknown> = (props: unknown) => {
    const defaultFallback = <PageLoading text="Loading page..." />;

    return (
      <Suspense fallback={fallback || defaultFallback}>
        <LazyComponent {...(props as Record<string, unknown>)} />
      </Suspense>
    );
  };

  // Set display name for better debugging
  if (displayName) {
    WrappedComponent.displayName = `Lazy(${displayName})`;
  } else {
    // Try to extract component name from import path
    const importStr = importFn.toString();
    const pathMatch = importStr.match(/import\(["'](.+)["']\)/);
    if (pathMatch) {
      const path = pathMatch[1];
      const componentName =
        path.split("/").pop()?.replace(/['"]/g, "") || "Component";
      WrappedComponent.displayName = `Lazy(${componentName})`;
    } else {
      WrappedComponent.displayName = "LazyComponent";
    }
  }

  return WrappedComponent;
}

/**
 * Convenience wrapper around createLazyComponent that always provides
 * a PageLoading fallback component, unless another fallback is explicitly
 * provided.
 *
 * @param importFn - The dynamic import function
 * @param options - Configuration options for fallback and naming
 * @returns A React component wrapped with Suspense and lazy loading
 */
export function withLazyLoading(
  importFn: ImportFunction,
  options: LazyOptions = {}
): ComponentType<unknown> {
  return createLazyComponent(importFn, {
    fallback: options.fallback || <PageLoading />,
  });
}

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="w-10 h-10 rounded-full bg-muted/50 border-border hover:bg-muted/70 theme-transition"
      >
        <div className="h-4 w-4 bg-muted-foreground rounded-full animate-pulse"></div>
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-muted/50 border-border hover:bg-muted/70 theme-transition group"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <div className="text-warning group-hover:animate-spin transition-transform text-lg">
          ☀️
        </div>
      ) : (
        <div className="text-primary group-hover:animate-bounce transition-transform text-lg">
          🌙
        </div>
      )}
    </Button>
  );
};

export default ThemeToggle;

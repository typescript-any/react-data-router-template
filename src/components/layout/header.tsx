import { Link, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks";
import ThemeToggle from "../theme-toggle";

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="bg-gradient-to-r from-background via-card to-background border-b border-border backdrop-blur-lg relative theme-transition">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="text-2xl group-hover:animate-spin transition-transform">
                ⚛️
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                React RBAC
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-4 py-2 rounded-lg text-sm font-medium theme-transition backdrop-blur-sm"
            >
              Home
            </Link>
            <Link
              to="/theme-demo"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-4 py-2 rounded-lg text-sm font-medium theme-transition backdrop-blur-sm"
            >
              Theme Demo
            </Link>
            <Link
              to="/create-post"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-4 py-2 rounded-lg text-sm font-medium theme-transition backdrop-blur-sm"
            >
              Create Post
            </Link>
            <Link
              to="/admin"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-4 py-2 rounded-lg text-sm font-medium theme-transition backdrop-blur-sm"
            >
              Admin
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/typescript-any/react-data-router-template"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg theme-transition backdrop-blur-sm"
              title="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-transform hover:scale-110"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <ThemeToggle />
            {isAuthenticated ? (
              <>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-success/20 to-success/30 rounded-full border border-success/30">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-success-foreground font-medium">
                    {user?.name}
                  </span>
                </div>
                <Button
                  variant="outline"
                  onClick={() => logout(navigate)}
                  className="bg-gradient-to-r from-destructive/20 to-destructive/30 border-destructive/30 text-destructive hover:bg-destructive/40 hover:text-destructive-foreground theme-transition"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium theme-transition shadow-lg hover:shadow-primary/25"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

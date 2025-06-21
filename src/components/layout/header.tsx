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

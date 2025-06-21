import MetaData from "@/components/meta-data";
import { useAuth } from "@/hooks";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <>
      <MetaData />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background dark:from-background dark:via-card dark:to-background relative overflow-hidden theme-transition">
        {/* Animated background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 dark:bg-accent/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-48 h-48 bg-info/20 dark:bg-info/30 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-success/20 dark:bg-success/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "6s" }}
          ></div>
        </div>

        {/* Floating grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, oklch(var(--foreground) / 0.15) 2px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Welcome Badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg border border-border rounded-full text-sm font-medium mb-12 shadow-2xl theme-transition">
              <div className="relative">
                <div className="w-3 h-3 bg-success rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
              <span className="text-foreground/90">
                Hey {user?.name}, welcome to your template! 🎯
              </span>
            </div>

            {/* Main Title with enhanced animation */}
            <div className="mb-12">
              <div className="text-9xl mb-8 animate-bounce">⚛️</div>
              <div className="space-y-4">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-border mb-4">
                  <span className="text-primary font-medium text-lg">
                    React Starter Template
                  </span>
                </div>
                <h1 className="text-7xl font-black bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-6 tracking-tight">
                  RBAC Template
                </h1>
                <h2 className="text-3xl font-bold text-primary mb-8 tracking-wide">
                  Ready to Build Something Amazing?
                </h2>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
              🚀 This is your{" "}
              <span className="text-foreground font-semibold">
                production-ready starter template
              </span>{" "}
              with role-based authentication, modern React patterns, and
              everything you need to ship fast.
              <span className="text-primary font-medium">
                {" "}
                Start building your next big project right now!
              </span>
            </p>

            {/* Enhanced Features Showcase */}
            <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl border border-border rounded-3xl p-10 max-w-6xl mx-auto shadow-2xl theme-transition">
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="text-3xl">🎯</div>
                <h3 className="text-3xl font-bold text-foreground">
                  Template Features
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    🔐
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">
                    RBAC System
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Complete role-based access control implementation
                  </p>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-4 group-hover:animate-spin">
                    ⚡
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">
                    Vite Build
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Lightning fast development with HMR
                  </p>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-4 group-hover:animate-pulse">
                    🎯
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">
                    TypeScript
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Full type safety and IntelliSense
                  </p>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    🚀
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">
                    Production Ready
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Deploy anywhere, enterprise-grade
                  </p>
                </div>
              </div>

              {/* Tech Stack with enhanced styling */}
              <div className="border-t border-border pt-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="text-xl">⚡</div>
                  <p className="text-foreground font-semibold uppercase tracking-wider">
                    Powered by Modern Stack
                  </p>
                  <div className="text-xl">⚡</div>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary/30 to-primary/40 text-primary-foreground rounded-full text-sm font-bold border border-primary/50 hover:scale-105 transition-transform cursor-default">
                    React 19
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-info/30 to-info/40 text-info-foreground rounded-full text-sm font-bold border border-info/50 hover:scale-105 transition-transform cursor-default">
                    TypeScript
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-accent/30 to-accent/40 text-accent-foreground rounded-full text-sm font-bold border border-accent/50 hover:scale-105 transition-transform cursor-default">
                    Vite 6
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-success/30 to-success/40 text-success-foreground rounded-full text-sm font-bold border border-success/50 hover:scale-105 transition-transform cursor-default">
                    Tailwind 4
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-warning/30 to-warning/40 text-warning-foreground rounded-full text-sm font-bold border border-warning/50 hover:scale-105 transition-transform cursor-default">
                    TanStack Query
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-chart-1/30 to-chart-1/40 text-primary-foreground rounded-full text-sm font-bold border border-chart-1/50 hover:scale-105 transition-transform cursor-default">
                    React Hook Form
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-chart-2/30 to-chart-2/40 text-primary-foreground rounded-full text-sm font-bold border border-chart-2/50 hover:scale-105 transition-transform cursor-default">
                    Zod
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-chart-3/30 to-chart-3/40 text-primary-foreground rounded-full text-sm font-bold border border-chart-3/50 hover:scale-105 transition-transform cursor-default">
                    Zustand
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-chart-4/30 to-chart-4/40 text-primary-foreground rounded-full text-sm font-bold border border-chart-4/50 hover:scale-105 transition-transform cursor-default">
                    Shadcn/ui
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

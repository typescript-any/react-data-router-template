import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 theme-transition">
      {/* Left side - Branding */}
      <div className="bg-gradient-to-br from-background via-card to-background dark:from-background dark:via-muted dark:to-card flex items-center justify-center p-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-info rounded-full blur-2xl"></div>
        </div>

        <div className="text-center text-foreground relative z-10 max-w-lg">
          <div className="mb-12">
            {/* Logo section */}
            <div className="mb-8 relative">
              <div className="text-7xl mb-6 animate-pulse">⚛️</div>
              <div className="space-y-2">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  React RBAC
                </h1>
                <h2 className="text-2xl font-semibold text-primary tracking-wide">
                  TypeScript Template
                </h2>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scalable boilerplate with Role-Based Access Control for modern web
              applications
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="group p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:bg-card/70 theme-transition">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                🔐
              </div>
              <span className="text-sm font-medium text-foreground">
                RBAC + Auth
              </span>
            </div>
            <div className="group p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:bg-card/70 theme-transition">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <span className="text-sm font-medium text-foreground">
                Vite + HMR
              </span>
            </div>
            <div className="group p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:bg-card/70 theme-transition">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <span className="text-sm font-medium text-foreground">
                Type Safety
              </span>
            </div>
            <div className="group p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:bg-card/70 theme-transition">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <span className="text-sm font-medium text-foreground">
                Production Ready
              </span>
            </div>
          </div>

          {/* Tech stack */}
          <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
              Built with Modern Stack
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <span className="px-2 py-1 bg-primary/20 text-primary-foreground rounded-md border border-primary/30 text-center">
                React 19
              </span>
              <span className="px-2 py-1 bg-info/20 text-info-foreground rounded-md border border-info/30 text-center">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-md border border-accent/30 text-center">
                Vite 6
              </span>
              <span className="px-2 py-1 bg-success/20 text-success-foreground rounded-md border border-success/30 text-center">
                Tailwind 4
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-1 text-xs">
              <span className="px-2 py-1 bg-chart-1/20 text-primary-foreground rounded-md border border-chart-1/30">
                TanStack Query
              </span>
              <span className="px-2 py-1 bg-warning/20 text-warning-foreground rounded-md border border-warning/30">
                React Hook Form
              </span>
              <span className="px-2 py-1 bg-chart-2/20 text-primary-foreground rounded-md border border-chart-2/30">
                Zod
              </span>
              <span className="px-2 py-1 bg-chart-3/20 text-primary-foreground rounded-md border border-chart-3/30">
                Zustand
              </span>
              <span className="px-2 py-1 bg-chart-4/20 text-primary-foreground rounded-md border border-chart-4/30">
                Shadcn/ui
              </span>
              <span className="px-2 py-1 bg-chart-5/20 text-primary-foreground rounded-md border border-chart-5/30">
                Lucide Icons
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

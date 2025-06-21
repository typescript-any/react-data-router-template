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
              <div className="text-9xl mb-8">⚛️</div>
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

            {/* Getting Started Section */}
            <div className="max-w-7xl mx-auto mb-20">
              <div className="bg-gradient-to-br from-card/70 to-card/50 backdrop-blur-xl border border-border rounded-3xl p-12 shadow-2xl theme-transition">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-border mb-8 shadow-lg">
                    <div className="text-3xl animate-pulse">🚀</div>
                    <h3 className="text-3xl font-bold text-foreground">
                      Getting Started Guide
                    </h3>
                  </div>
                  <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    Transform this template into your next production-ready
                    application.
                    <span className="text-primary font-semibold">
                      {" "}
                      Follow our comprehensive guide{" "}
                    </span>
                    to customize, configure, and deploy your project in minutes!
                  </p>
                </div>

                {/* Prerequisites Section */}
                <div className="bg-gradient-to-r from-info/10 to-primary/10 rounded-2xl p-6 border border-info/20 mb-12 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">📋</div>
                    <h4 className="text-xl font-bold text-foreground">
                      Prerequisites
                    </h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-background/50 rounded-lg p-3 text-center">
                      <div className="font-semibold text-foreground">
                        📦 Node.js
                      </div>
                      <div className="text-sm text-muted-foreground">
                        v18.0.0 or higher
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 text-center">
                      <div className="font-semibold text-foreground">
                        🐙 Git
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Latest version
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 text-center">
                      <div className="font-semibold text-foreground">
                        💻 Code Editor
                      </div>
                      <div className="text-sm text-muted-foreground">
                        VS Code recommended
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step-by-step Guide */}
                <div className="grid lg:grid-cols-2 gap-10 text-left">
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="flex items-start gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                          1
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="text-xl font-bold text-foreground">
                              Clone & Setup
                            </h4>
                            <div className="px-3 py-1 bg-success/20 text-success rounded-full text-xs font-medium">
                              5 minutes
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            Get the template from GitHub and install all
                            dependencies. Choose your preferred package manager.
                          </p>
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium text-foreground">
                                Terminal Commands:
                              </span>
                              <button className="text-xs px-2 py-1 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors">
                                Copy All
                              </button>
                            </div>
                            <div className="space-y-2 text-sm font-mono text-foreground">
                              <div className="flex items-start gap-2">
                                <span className="text-success">$</span>
                                <span className="break-all">
                                  git clone
                                  https://github.com/typescript-any/react-data-router-template.git
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-success">$</span>
                                <span>cd react-data-router-template</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-success">$</span>
                                <span>npm install</span>
                                <span className="text-muted-foreground text-xs">
                                  or yarn install
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-success">$</span>
                                <span>npm run dev</span>
                                <span className="text-muted-foreground text-xs">
                                  Start development server
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                      <div className="flex items-start gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent to-success rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                          2
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="text-xl font-bold text-foreground">
                              Project Configuration
                            </h4>
                            <div className="px-3 py-1 bg-warning/20 text-warning rounded-full text-xs font-medium">
                              10 minutes
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            Customize the template with your project details and
                            branding.
                          </p>
                          <div className="space-y-3">
                            <div className="bg-background/50 rounded-lg p-4 border border-border">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="font-medium text-foreground">
                                  package.json
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Update name, description, version, and author
                              </p>
                            </div>
                            <div className="bg-background/50 rounded-lg p-4 border border-border">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="font-medium text-foreground">
                                  src/lib/config/app-config.ts
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Configure app title, description, and metadata
                              </p>
                            </div>
                            <div className="bg-background/50 rounded-lg p-4 border border-border">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-success rounded-full"></div>
                                <span className="font-medium text-foreground">
                                  public/
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Replace favicon and add your brand assets
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                      <div className="flex items-start gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-success to-info rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                          3
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="text-xl font-bold text-foreground">
                              Authentication Setup
                            </h4>
                            <div className="px-3 py-1 bg-info/20 text-info rounded-full text-xs font-medium">
                              15 minutes
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            Configure authentication and role-based access
                            control for your app.
                          </p>
                          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/20">
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                Update auth service in{" "}
                                <code className="text-primary">
                                  src/services/auth-service.ts
                                </code>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                Modify user types in{" "}
                                <code className="text-primary">
                                  src/types/user-type.ts
                                </code>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                Configure role guards in{" "}
                                <code className="text-primary">
                                  src/lib/utils/with-guards.tsx
                                </code>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                Integrate with your backend API endpoints
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Step 4 */}
                    <div className="relative">
                      <div className="flex items-start gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-info to-warning rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                          4
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="text-xl font-bold text-foreground">
                              Build Features
                            </h4>
                            <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                              Ongoing
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            Start building your application features using the
                            provided structure.
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-background/50 rounded-lg p-3 border border-border text-center">
                              <div className="text-lg mb-1">📄</div>
                              <div className="font-medium text-foreground text-sm">
                                Pages
                              </div>
                              <div className="text-xs text-muted-foreground">
                                src/pages/
                              </div>
                            </div>
                            <div className="bg-background/50 rounded-lg p-3 border border-border text-center">
                              <div className="text-lg mb-1">🧩</div>
                              <div className="font-medium text-foreground text-sm">
                                Components
                              </div>
                              <div className="text-xs text-muted-foreground">
                                src/components/
                              </div>
                            </div>
                            <div className="bg-background/50 rounded-lg p-3 border border-border text-center">
                              <div className="text-lg mb-1">🔌</div>
                              <div className="font-medium text-foreground text-sm">
                                Services
                              </div>
                              <div className="text-xs text-muted-foreground">
                                src/services/
                              </div>
                            </div>
                            <div className="bg-background/50 rounded-lg p-3 border border-border text-center">
                              <div className="text-lg mb-1">📦</div>
                              <div className="font-medium text-foreground text-sm">
                                State
                              </div>
                              <div className="text-xs text-muted-foreground">
                                src/store/
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative">
                      <div className="flex items-start gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-warning to-destructive rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg">
                          5
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="text-xl font-bold text-foreground">
                              Deploy & Launch
                            </h4>
                            <div className="px-3 py-1 bg-destructive/20 text-destructive rounded-full text-xs font-medium">
                              30 minutes
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            Build your app and deploy it to your preferred
                            hosting platform.
                          </p>
                          <div className="bg-muted/50 rounded-xl p-4 border border-border mb-4">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium text-foreground">
                                Build Commands:
                              </span>
                            </div>
                            <div className="space-y-2 text-sm font-mono text-foreground">
                              <div className="flex items-center gap-2">
                                <span className="text-success">$</span>
                                <span>npm run build</span>
                                <span className="text-muted-foreground text-xs">
                                  Production build
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-success">$</span>
                                <span>npm run preview</span>
                                <span className="text-muted-foreground text-xs">
                                  Test production build
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                              <span className="text-muted-foreground">
                                Deploy to Vercel, Netlify, or AWS
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                              <span className="text-muted-foreground">
                                Configure environment variables
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                              <span className="text-muted-foreground">
                                Set up CI/CD pipeline with GitHub Actions
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Pro Tips */}
                    <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-success/10 rounded-xl p-6 border border-primary/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl animate-bounce">💡</div>
                        <h5 className="text-lg font-bold text-foreground">
                          Pro Tips & Best Practices
                        </h5>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="font-medium text-foreground text-sm">
                              Theme Customization
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Use theme toggle to test both modes and customize
                              in tailwind.config.js
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="font-medium text-foreground text-sm">
                              Component Library
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Explore shadcn/ui components in src/components/ui/
                              for consistent design
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="font-medium text-foreground text-sm">
                              RBAC Testing
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Test different user roles by checking protected
                              routes and admin features
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-info rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <div className="font-medium text-foreground text-sm">
                              Performance
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Use lazy loading for routes and optimize bundle
                              size with Vite
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Quick Links & Resources
                    </h4>
                    <p className="text-muted-foreground">
                      Everything you need to get the most out of this template
                    </p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4 text-left">
                    <a
                      href="https://vitejs.dev/guide/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border hover:bg-background/70 transition-colors group"
                    >
                      <div className="text-xl group-hover:scale-110 transition-transform">
                        ⚡
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          Vite Docs
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Build tool guide
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://reactrouter.com/en/main"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border hover:bg-background/70 transition-colors group"
                    >
                      <div className="text-xl group-hover:scale-110 transition-transform">
                        🛣️
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          React Router
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Routing solution
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://ui.shadcn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border hover:bg-background/70 transition-colors group"
                    >
                      <div className="text-xl group-hover:scale-110 transition-transform">
                        🎨
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          shadcn/ui
                        </div>
                        <div className="text-xs text-muted-foreground">
                          UI components
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://zustand-demo.pmnd.rs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border hover:bg-background/70 transition-colors group"
                    >
                      <div className="text-xl group-hover:scale-110 transition-transform">
                        🐻
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          Zustand
                        </div>
                        <div className="text-xs text-muted-foreground">
                          State management
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <a
                    href="https://github.com/typescript-any/react-data-router-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-xl font-semibold transition-all shadow-lg hover:shadow-primary/25 hover:scale-105"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                  <button
                    onClick={() => window.open("/create-post", "_self")}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-card to-card/80 hover:from-card/90 hover:to-card/70 text-foreground border border-border rounded-xl font-semibold transition-all hover:scale-105"
                  >
                    <div className="text-lg">🚀</div>
                    Try Demo Features
                  </button>
                </div>
              </div>
            </div>

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-background via-card to-background border-t border-border relative theme-transition">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl animate-pulse">⚛️</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                React RBAC Template
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A production-ready React starter template with role-based
              authentication, modern development tools, and everything you need
              to build scalable applications.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-xs font-medium border border-primary/30">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium border border-accent/30">
                Vite
              </span>
              <span className="px-3 py-1 bg-info/20 text-info-foreground rounded-full text-xs font-medium border border-info/30">
                Tailwind
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">🔗</span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-muted-foreground hover:text-primary text-sm theme-transition flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/create-post"
                  className="text-muted-foreground hover:text-primary text-sm theme-transition flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Create Post
                </a>
              </li>
              <li>
                <a
                  href="/admin"
                  className="text-muted-foreground hover:text-primary text-sm theme-transition flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Admin
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-accent">📚</span>
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent text-sm theme-transition flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent text-sm theme-transition flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent text-sm theme-transition flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Contributing Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-muted-foreground text-sm flex items-center gap-2">
              <span className="text-destructive">♥</span>
              Made with love using modern React stack
            </p>
            <p className="text-center text-muted-foreground text-sm">
              © {currentYear} React RBAC Template. Open source starter kit.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

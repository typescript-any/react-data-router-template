import { Button } from "@/components/ui/button";

const ThemeDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background p-8 theme-transition">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            Theme System Demo
          </h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive theme system with light/dark mode support
          </p>
        </div>

        {/* Color Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primary Colors */}
          <div className="bg-card border border-border rounded-lg p-6 theme-transition">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Primary Colors
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded border border-border"></div>
                <span className="text-sm text-muted-foreground">Primary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary rounded border border-border"></div>
                <span className="text-sm text-muted-foreground">Secondary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded border border-border"></div>
                <span className="text-sm text-muted-foreground">Accent</span>
              </div>
            </div>
          </div>

          {/* Status Colors */}
          <div className="bg-card border border-border rounded-lg p-6 theme-transition">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Status Colors
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success rounded border border-border"></div>
                <span className="text-sm text-muted-foreground">Success</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-warning rounded border border-border"></div>
                <span className="text-sm text-muted-foreground">Warning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-destructive rounded border border-border"></div>
                <span className="text-sm text-muted-foreground">
                  Destructive
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-info rounded border border-border"></div>
                <span className="text-sm text-muted-foreground">Info</span>
              </div>
            </div>
          </div>

          {/* UI Colors */}
          <div className="bg-card border border-border rounded-lg p-6 theme-transition">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              UI Colors
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-background rounded border border-border"></div>
                <span className="text-sm text-muted-foreground">
                  Background
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-card rounded border border-border"></div>
                <span className="text-sm text-muted-foreground">Card</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted rounded border border-border"></div>
                <span className="text-sm text-muted-foreground">Muted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Button Variants */}
        <div className="bg-card border border-border rounded-lg p-6 theme-transition">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Button Variants
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        {/* Gradient Examples */}
        <div className="bg-card border border-border rounded-lg p-6 theme-transition">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Gradient Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-24 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-medium">
                Primary Gradient
              </span>
            </div>
            <div className="h-24 gradient-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-medium">
                Secondary Gradient
              </span>
            </div>
            <div className="h-24 bg-gradient-to-r from-background to-card rounded-lg flex items-center justify-center border border-border">
              <span className="text-foreground font-medium">
                Background Gradient
              </span>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="bg-card border border-border rounded-lg p-6 theme-transition">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Typography
          </h3>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Heading 1</h1>
            <h2 className="text-3xl font-semibold text-foreground">
              Heading 2
            </h2>
            <h3 className="text-2xl font-medium text-foreground">Heading 3</h3>
            <p className="text-foreground">
              This is regular body text with{" "}
              <span className="text-primary font-medium">
                primary colored text
              </span>{" "}
              and <span className="text-muted-foreground">muted text</span>.
            </p>
            <p className="text-sm text-muted-foreground">
              Small muted text for captions and descriptions.
            </p>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="bg-card border border-border rounded-lg p-6 theme-transition">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Interactive Elements
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg hover:bg-muted/70 theme-transition cursor-pointer">
              <p className="text-foreground">
                Hover over this card to see the transition effect
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30">
                Primary Badge
              </span>
              <span className="px-3 py-1 bg-success/20 text-success-foreground rounded-full text-sm border border-success/30">
                Success Badge
              </span>
              <span className="px-3 py-1 bg-warning/20 text-warning-foreground rounded-full text-sm border border-warning/30">
                Warning Badge
              </span>
              <span className="px-3 py-1 bg-info/20 text-info-foreground rounded-full text-sm border border-info/30">
                Info Badge
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDemo;

import MetaData from "@/components/meta-data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function AdminPage() {
  return (
    <>
      <MetaData />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  ← Back
                </Button>
              </Link>
              <div className="h-6 w-px bg-border"></div>
              <h1 className="text-3xl font-bold text-primary">
                Admin Dashboard
              </h1>
            </div>
            <p className="text-muted-foreground">
              Manage your application settings and user roles from this
              dashboard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import MetaData from "@/components/meta-data";

export default function CreatePostPage() {
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
                Create New Post ✍️
              </h1>
            </div>
            <p className="text-muted-foreground">
              Share your thoughts and ideas with the world. Create engaging
              content that resonates with your audience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

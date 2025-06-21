import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router";
import { ROUTE_CONSTANTS } from "@/lib/constants";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/hooks";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginForm() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginSchema) => {
    setError(null);
    try {
      const result = await login(values.email, values.password);
      if (result.success) {
        toast.success("Login successful");
        navigate(ROUTE_CONSTANTS.HOME);
      } else {
        setError(result.message || "Invalid credentials");
        toast.error(result.message || "Login failed");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Login failed";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  // Helper function to autofill and submit
  const loginAs = (email: string, password: string) => {
    form.setValue("email", email);
    form.setValue("password", password);
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary/20 theme-transition"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="h-12 bg-muted/50 border-border focus:border-primary focus:ring-primary/20 theme-transition"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          {error && (
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="text-destructive text-sm font-medium flex items-center gap-2">
                <span className="text-destructive">⚠️</span>
                {error}
              </p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl theme-transition"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"></div>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>

          {/* Demo login buttons */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <div className="flex-1 border-t border-border"></div>
              <span>Quick Demo Login</span>
              <div className="flex-1 border-t border-border"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => loginAs("user@gmail.com", "password")}
                disabled={isLoading}
                className="h-11 bg-gradient-to-r from-success/10 to-success/20 border-success/30 text-success hover:bg-success/30 theme-transition"
              >
                <span className="mr-2">👤</span>
                Demo User
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => loginAs("admin@gmail.com", "password")}
                disabled={isLoading}
                className="h-11 bg-gradient-to-r from-warning/10 to-warning/20 border-warning/30 text-warning-foreground hover:bg-warning/30 theme-transition"
              >
                <span className="mr-2">👑</span>
                Demo Admin
              </Button>
            </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-muted-foreground text-sm">
              This is a demo template. Use the buttons above for quick access.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}

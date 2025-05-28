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
import { login } from "@/services/api/auth-api";
import { useNavigate } from "react-router";
import { ROUTE_CONSTANTS } from "@/lib/constants";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginForm() {
  const navigate = useNavigate();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginSchema) => {
    console.log("Login values:", values);
    login(values.email, values.password)
      .then(() => {
        navigate(ROUTE_CONSTANTS.HOME);
      })
      .catch(() => {});
  };

  // Helper function to autofill and submit
  const loginAs = (email: string, password: string) => {
    form.setValue("email", email);
    form.setValue("password", password);
    form.handleSubmit(onSubmit)();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-sm mx-auto mt-10"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Login
        </Button>

        <div className="flex justify-between mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => loginAs("user@gmail.com", "password")}
          >
            Login as User
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => loginAs("admin@gmail.com", "password")}
          >
            Login as Admin
          </Button>
        </div>
      </form>
    </Form>
  );
}

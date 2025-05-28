// pages/CreatePostPage.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router";
import MetaData from "@/components/meta-data";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

type PostFormValues = z.infer<typeof postSchema>;

export default function CreatePostPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = (data: PostFormValues) => {
    console.log("Post submitted:", data);
    toast.success("Post created successfully!");
    reset();
  };

  return (
    <>
      <MetaData />
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Create New Post
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Input placeholder="Title" {...register("title")} />
            {errors.title && (
              <p className="text-sm text-red-600 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <Textarea placeholder="Content" rows={6} {...register("content")} />
            {errors.content && (
              <p className="text-sm text-red-600 mt-1">
                {errors.content.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Publish Post
          </Button>
          <Link to="/">
            <Button variant="link">Return to Home</Button>
          </Link>
        </form>
      </div>
    </>
  );
}

import MetaData from "@/components/meta-data";
import { Button } from "@/components/ui/button";
import { logout } from "@/services/api/auth-api";
import { getCurrentUser } from "@/services/auth-service";
import { Link, useNavigate } from "react-router";

const HomePage = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();
  // console.log(user);
  return (
    <>
      <MetaData />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-6">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center space-y-6">
          <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
          <p className="text-gray-600">
            Name: <span className="font-semibold">{user?.name}</span>
          </p>

          <div className="space-y-2">
            <Link to="/create-post">
              <span className="text-blue-600 hover:underline block">
                ✍️ Create Post
              </span>
            </Link>

            <Link to="/admin">
              <span className="text-red-600 hover:underline block">
                🛠️ Go to Admin Panel
              </span>
            </Link>

            <Button
              onClick={() => logout(navigate)}
              variant="destructive"
              className="mt-4"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

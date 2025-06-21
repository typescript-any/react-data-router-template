import { useAuthStore } from "@/store";

const useAuth = () => {
  const authState = useAuthStore();
  // We can add any additional logic here if needed
  return { ...authState };
};

export default useAuth;

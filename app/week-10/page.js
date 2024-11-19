"use client";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Login Page
export default function Page() {

  // User Auth and Router
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();

  // Use Effect
  useEffect(() => {
    // Redirect if the user is already logged in
    if (user) {
      router.push("./week-10/shopping-list");
    }
  }, [user, router]);

  // Function to handle login
  const handleGitHubLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-12" >
      <p className="pb-3" >Please log in:</p>
      <button className="bg-sky-500 rounded text-white w-52 h-9" onClick={handleGitHubLogin}>Login with github</button>
    </div>
  );
}

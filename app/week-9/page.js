"use client";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Login Page
export default function Page() {

  // User Auth and Router
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();

  // use state to allow login prompt once
  const [loginAttempted, setLoginAttempted] = useState(false);

  // Use Effect
  useEffect(() => {

    // Check if user logged in then redirect
    if (user) {
      router.push("./week-9/shopping-list");
    } else if (!loginAttempted) {

      // Login attempt function, do it 1x only
      const signInWithGitHub = async () => {
        try {
          await gitHubSignIn();
          setLoginAttempted(true);
        } catch (error) {
          console.error(error);
        }

      };

      // prompt login
      signInWithGitHub();
    }

  }, [user, gitHubSignIn, router, loginAttempted]);

  return (
    <div>
      <p> login </p>
    </div>
  );
}

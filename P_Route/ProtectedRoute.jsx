import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const router = useRouter();

  // Check if user is authenticated
  let isAuthenticated = false;
  /* Your authentication logic here */

  useEffect(() => {
    if (token !== null) {
      isAuthenticated = true;
    }
    // Redirect to login page if user is not authenticated
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, token, router]);

  return children;
};

export default ProtectedRoute;

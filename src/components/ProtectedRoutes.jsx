import { SignedIn, useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();

  if (isLoaded && !SignedIn && isSignedIn != undefined) {
    return <Navigate to="/?sign-in=true" />;
  }

  return children;
};

export default ProtectedRoutes;

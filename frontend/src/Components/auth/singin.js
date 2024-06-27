import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const Singin = () => {
  return (
    <div className="sign-in-container">
      <SignedOut>  {/* Opening tag for SignedOut */}
        <h1> Welcome to Your Own Personal Finance Tracker!</h1>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
      </SignedOut> {/* Add the closing tag for SignedOut */}
      <SignedIn>
        <Navigate to="/" /> {/* Redirect to dashboard on sign-in */}
      </SignedIn>
    </div>
  );
}
export default Singin;
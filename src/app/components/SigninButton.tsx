"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SigninButton = () => {
  const { data: session } = useSession();
  
  if (session && session.user) {
    return (
      <div className="ml-auto flex items-center justify-center ">
        {/* <p className="text-sky-600">{session.user.name}</p> */}
        <button onClick={() => signOut()} className="text-red-400 h-full w-full hover:bg-purple-100 mr-6 border rounded  py-1 px-4">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="text-purple-500  hover:bg-purple-100 ml-auto mr-6 border rounded  py-1 px-4">
      Sign In
    </button>
  );
};

export default SigninButton;
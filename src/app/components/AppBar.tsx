import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-blue-950  shadow">
      <Link className="transition-colors hover:text-blue-500" href={"/"}>
        Home
      </Link>
      <Link className="transition-colors hover:text-blue-500" href={"/Movies"}>
        Movies
      </Link> 
      <SigninButton />
    </header>
  );
};

export default AppBar;
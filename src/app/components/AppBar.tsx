import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";
import Image from 'next/image'

const AppBar = () => {
  
  return (
    <header className="flex gap-4 p-2 bg-gray-800">
      <Link className=" transition-colors hover:text-purple-800 align-center" href={"/"}>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </Link>
      <Link className="flex items-center ml-6 transition-colors hover:text-purple-800" href={"/Movies"}>
        Movies
      </Link> 
      <SigninButton />
    </header>
  );
};

export default AppBar;
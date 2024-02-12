"use client";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import Image from "next/image";

const Login = () => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/Movies",
    });
  };
  return (
    <div
      className={
        "conteiner p-20 bg-black flex flex-col items-center justify-evenly lg:flex-row "
      }
    >
      <div>
        <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
      </div>
      <div className=" flex flex-col p-4 gap-4 w-96 h-full border rounded">
        <input
          placeholder="Email"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <input
          placeholder="Password"
          type={"password"}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => (pass.current = e.target.value)}
        />
        <button className="bg-purple-900 rounded-md text-black hover:bg-purple-300 appearance-none block py-3 px-4 w-full" onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
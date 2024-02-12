"use client";
import { signIn } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import toast, {Toaster} from "react-hot-toast";
import { useRouter } from "next/navigation"; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async () => {

    const result = await signIn("credentials", {
      username: email,
      password: password,
      redirect: true,
      callbackUrl: "/Movies",
    });

    if (result?.ok == false){
      toast.error('User not Found.', {
        style: {
          border: '1px solid white',
          backgroundColor: 'red',
          padding: '8px',
          color: 'white',
        },
      } )
    } else {
      toast.success('Successfully Login!')
      router.push('/Movies');
    }
  };

  const handleLogin = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid Email');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    onSubmit()
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
        <Toaster/>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          placeholder="Email"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type={"password"}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-purple-900 rounded-md text-black hover:bg-purple-300 appearance-none block py-3 px-4 w-full" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
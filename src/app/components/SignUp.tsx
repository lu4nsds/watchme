// pages/signup.tsx
"use client"
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import LinkQuestion from './LinkQuestion';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newErrors: Errors = {};
    if (!formData.name) {
      newErrors.name = 'Required field';
    }
    if (!formData.email) {
      newErrors.email = 'Required field';
    }
    if (!formData.password) {
      newErrors.password = 'Required field';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must be equal';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const response = await fetch('api/user', {
      method: 'POST',
      body: JSON.stringify(formData)
    })

    signIn()    
  };

  const { data: session } = useSession();

  if (session && session.user){
      return (
        <>
        <div className="bg-gradient-to-r from-purple-500  to-black p-8 text-white text-center">
          <p className="text-2xl font-bold">Enjoying our movies?</p>
        </div>

        <div className="bg-white p-8 text-center">
          <p className="text-2xl font-bold text-gray-800">RECOMMEND TO A FRIEND!</p>
        </div>

        </>

      )
  }

  return (
    <div className="flex items-center justify-center">
      <form className="bg-white shadow-md rounded p-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? 'border-red-500' : ''
            }`}
            id="name"
            type="text"
            placeholder="Digite seu nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? 'border-red-500' : ''
            }`}
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? 'border-red-500' : ''
            }`}
            id="password"
            type="password"
            placeholder="Digite sua senha"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.confirmPassword ? 'border-red-500' : ''
            }`}
            id="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-800 w-full hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
        <div className='p-4'>
        <LinkQuestion/>
        </div>
      </form>
    </div>
  );
};

export default Signup;

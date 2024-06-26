import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useUserLogin } from '../api/loginapi';

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const schema = z.object({
    email: z.string().email().min(8).max(24),
    password: z.string().min(5).max(10),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const { mutate: login, isLoading, isError, error, isSuccess } = useUserLogin();

  useEffect(() => {
    setErrorMessage(error?.message || '');
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      const userRole = localStorage.getItem("role");
      if (userRole === "isAdmin") {
        navigate("/AdminDashboard");
      } else {
        setErrorMessage('Unauthorized user');
      }
    } else if (isError) {
      setErrorMessage('Failed to log in. Please check your credentials.');
    }
  }, [isSuccess, isError, navigate]);

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" type="email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" {...register("email")} />
              {errors.email && <p className='mt-1 text-red-500 text-sm'>{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" type="password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" {...register("password")} />
              {errors.password && <p className='mt-1 text-red-500 text-sm'>{errors.password.message}</p>}
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
            {errorMessage && <div className="text-red-500 text-center mt-2">{errorMessage}</div>}
          </div>

       
        </form>
      </div>
    </div>
  );
}

export default Login;

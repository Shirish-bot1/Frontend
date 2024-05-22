import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useUserLogin } from '../api/loginapi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const router = useNavigate();

  const schema = z.object({
    username: z.string().min(2).max(30),
    email: z.string().email().min(8).max(24),
    password: z.string().min(5).max(10),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const { mutate: logindata, isLoading, isError, error, isSuccess } = useUserLogin();

  useEffect(() => {
    if (isSuccess) {
      router("/AdminDashboard");
    }
  }, [isSuccess, router]);

  const onSubmit = (data) => {
    logindata(data);
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
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" {...register("username")} />
              {errors.username && <p className='mt-1 text-red-500 text-sm'>{errors.username.message}</p>}
            </div>
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
          </div>

          <div className="text-center mt-2">
            <p className="text-sm text-gray-600">Dont have an account? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Register</Link></p>
          </div>
        </form>
        {isError && <p className='text-red-600 text-center mt-2'>{error?.response?.data?.message || 'Login failed'}</p>}
      </div>
    </div>
  );
}

export default Login;

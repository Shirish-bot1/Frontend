import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useComregapi } from '../api/complainApi/useComregapi';
import { useNavigate } from 'react-router-dom';



function ComplaintForm() {
  const router = useNavigate();
  
  const schema = z.object({
    name: z.string().min(3).max(50).nonempty(),
    phone: z.string().min(10).max(15).nonempty(),
    address: z.string().min(5).max(100).nonempty(),
    age: z.string().min(2).max(120),
    sex: z.enum(['male', 'female']),
    details: z.string().min(10).max(500),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const{mutate:Registercom,isLoading,isError,error,isSuccess} = useComregapi();

  useEffect(()=>{
    if(isSuccess){
      console.log("Complain resgitered successfully")
      router("/Response");
     
    }

  },[isSuccess,router]);
  const onSubmit=(data)=>{
    Registercom(data);
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Online Complaint Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="mb-4">
          <label className="block text-sm font-semibold">Name:</label>
          <input type="text" {...register('name')} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Phone:</label>
          <input type="text" {...register('phone')} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Address:</label>
          <input type="text" {...register('address')} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
          {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Age:</label>
          <input type="text" {...register('age')} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
          {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Sex:</label>
          <select {...register('sex')} className="border border-gray-300 px-4 py-2 rounded-md w-full">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex && <span className="text-red-500 text-sm">{errors.sex.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Details:</label>
          <textarea {...register('details')} className="border border-gray-300 px-4 py-2 rounded-md w-full"></textarea>
          {errors.details && <span className="text-red-500 text-sm">{errors.details.message}</span>}
        </div>
        
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">{isLoading?"Registering":"Registered"}</button>
      </form>
      {isError && <p className='text-red-600 text-center mt-2'>{error?.response?.data?.message || 'Login failed'}</p>}
    </div>
  );
}

export default ComplaintForm;

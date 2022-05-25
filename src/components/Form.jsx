import React from 'react';
import { useForm } from 'react-hook-form';
import defaultImg from '../img/default.png'

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const inputStyle = "border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
  
  return (
    <div className='my-20 mx-4 flex items-center justify-center'>
      <div className='flex items-center justify-center gap-28 bg-white p-12 rounded-xl text'>
        <div className='w-1/2'>
          <p className='flex justify-center text-4xl mb-6 text-center gap-3 text font-bold'><span className='text-amber-500'>Your project.</span> Our passion.</p>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-4'>
              <input className={inputStyle} type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
              <input className={inputStyle} type="text" placeholder="Your business" {...register("Your business", {required: true, maxLength: 100})} />
            </div>
            <div className='flex gap-4'>
              <input className={inputStyle} type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
              <input className={inputStyle} type="tel" placeholder="Phone" {...register("Phone", {required: true, maxLength: 12})} />
            </div>
            <select className={inputStyle} {...register("Service", { required: true })}>
              <option value="Nothing Fancy Websites">Nothing Fancy Websites</option>
              <option value="Social Media Coaching">Social Media Coaching</option>
              <option value="Pretty Cool Ads">Pretty Cool Ads</option>
              <option value="Conversational Content">Conversational Content</option>
            </select>
            <textarea rows='5' className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" placeholder='Message' {...register("Message", {required: true})} />
            

            <input className='cursor-pointer mt-4 w-full bg-amber-400 hover:bg-amber-500 text-green-900 border shadow py-3 px-6 font-semibold text-md rounded' type="submit" />
        </form>
        </div>
        <div>
          <img src={defaultImg} alt="" className='max-w-md'></img>
        </div>
      </div>
    </div>
  );
}
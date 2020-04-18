import React from "react";
import Link from "next/link";
export default function Index() {
  return (
    <div className=' p-4 min-h-screen rounded-lg flex flex-col bg-gray-100 jusfity-center items-center py-8'>
      <h1 className='my-6 text-primary leading-normal uppercase text-2xl font-black tracking-wide'>
        Create an account to get started
      </h1>
      <h2 className='text-secondary text-xl -mt-4 uppercase tracking-wider pb-4'>
        And receive a bonus
      </h2>
      <div className='py-6 w-1/3 '>
        <form className='flex flex-col  items-center justify-center'>
          <input
            className=' w-full  shadow-sm  rounded-lg  bg-white p-3 uppercase tracking-wider text-sm'
            type='name'
            placeholder='name'
          ></input>
          <input
            className='w-full shadow-sm rounded-lg my-4  bg-white p-3 uppercase tracking-wider text-sm'
            type='email'
            placeholder='e-mail'
          ></input>
          <input
            className=' w-full shadow-sm  rounded-lg  bg-white p-3 uppercase tracking-wider text-sm'
            type='password'
            placeholder='password'
          ></input>
          <button className='bg-primary w-full mt-4 p-3 rounded-lg text-white tracking-wider'>
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

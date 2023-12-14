'use client'
import { useState, useRef } from "react";

export default function RegistrationForm({ styles }){
  const [errObj, setErrObj] = useState();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    validate(formData);
    if (Object.keys(errObj).length === 0){
      console.log('Valid')
    }
  }

  const validate = (formData) => {
    error={}
    if (formData.get('password') !== formData.get('confirm_password')){
      error.matchingPasswords = 'The two passwords provided do not match.'
    }

    setErrObj(prev=>({...error}));
  }

  return (
    <>
    <h1 className="relative text-6xl my-8 text-secondary-action font-cursive">Register Today</h1>
    <article className="relative w-5/6 max-xs:w-11/12 sm:w-[500px] text-xl p-4 bg-primary-dark text-white rounded-xl overflow-hidden">
      <form ref={ formRef } onSubmit={ handleSubmit } method='POST' className="w-full flex flex-col">
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full flex flex-col sm:pe-1 my-2">
            <label className='mb-1' htmlFor="first_name">First Name:</label>
            <input className="rounded-md" type='text' name='first_name' required/>
          </div>
          <div className="w-full flex flex-col sm:ps-1 my-2">
            <label className='mb-1' htmlFor="Last_name">Last Name:</label>
            <input className="rounded-md" type='text' name='Last_name' required/>
          </div>
        </div>

        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor="email">Email:</label>
          <input className="rounded-md" type='email' name='email' value='bodner80@gmail.com' required/>
        </div>
        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor='password'>Password:</label>
          <input className="rounded-md" type='password' name='password' required/> 
        </div>
        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor='confirm-password'>Confirm Password:</label>
          <input className="rounded-md" type='password' name='confirm_password' required/> 
        </div>
        <div className="w-full my-2">
          <input className="me-2 h-4 w-4" type='checkbox' name='notifications'/>
          <label className='text-base' htmlFor='notifications'>I would like to recieve updates and notifications from Regeneration Room</label>
        </div>
        <div>
          <input className='border-2 border-secondary-action text-white rounded-lg px-4 py-1' type='submit' value='Register'/>
        </div>
      </form>
    </article>
    </>
  );
}
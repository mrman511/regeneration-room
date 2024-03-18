'use client'
import React from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const RegistrationForm = React.forwardRef(({ styles, handleSubmit, errObj, transition, confirmationObj }, ref) =>{
  const [notifications, setNotifications] = useState(true);
  const searchParams = useSearchParams();

  const email = searchParams.get('email') ? searchParams.get('email'): '';
  
  const validate = (formData, setErrObj) => {
    const error={}
    if (formData.get('password') !== formData.get('confirm_password')){
      error.matchingPasswords = 'The two passwords provided do not match.'
    }
    setErrObj(prev=>({...error}));
  };

  function responseFunction(res){
    const confirmation = { link: { path: '/login', text: 'Login'  }, message: res.data.detail, error: false, title: 'Success!' };
    confirmationObj.current=confirmation;
    transition('CONFIRM')
  };
  function catchFunction(res){
    const error = { link: { path: '/login', text: 'Login'  }, message: res.response.data.detail,  error: true, title: 'An Error Occured.' }
    confirmationObj.current=error;
    transition('CONFIRM')
  };
  const submissionObj = {
    validate: validate,
    responseFunction: responseFunction,
    catchFunction: catchFunction
  };
  const changeBoolValue = () => {
    setNotifications(!notifications);
  };

  return (
    <form 
      method='POST' 
      ref={ ref } 
      onSubmit={ (e) => { handleSubmit(e, '/users/', submissionObj) } } 
      className="w-full flex flex-col"
    >
      <div className="w-full flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col sm:pe-1 my-2">
          <label className='mb-1' htmlFor="first_name">First Name:</label>
          <input className="rounded-md p-0.5" type='text' name='first_name' required/>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col sm:ps-1 my-2">
          <label className='mb-1' htmlFor="Last_name">Last Name:</label>
          <input className="rounded-md p-0.5" type='text' name='last_name'required/>
        </div>
      </div>

      <div className="w-full flex flex-col my-2">
        <label className='mb-1' htmlFor="email">Email:</label>
        <input className="rounded-md p-0.5" type='email' name='email' defaultValue={ email } required/>
      </div>

      <div className="relative w-full flex flex-col my-2 mt-4">
        { errObj.matchingPasswords && <p className="absolute -translate-y-3/4 top-0 text-sm text-red-500">*{ errObj.matchingPasswords }</p> }
        <label className='mb-1' htmlFor='password'>Password:</label>
        <input 
          className={["rounded-md p-0.5", (errObj.matchingPasswords ? 'border-4 border-red-500' : '')].join(' ')} 
          type='password' 
          name='password'
          required
        /> 
      </div>

      <div className="w-full flex flex-col my-2">
        <label className='mb-1' htmlFor='confirm-password'>Confirm Password:</label>
        <input 
          className={["rounded-md p-0.5", (errObj.matchingPasswords ? 'border-4 border-red-500' : '')].join(' ')} 
          type='password' 
          name='confirm_password'
          required
        /> 
      </div>

      <div className="w-full my-2">
        <input onClick={ changeBoolValue } onChange={()=>{}} className="me-2 h-4 w-4" type='checkbox' name='notifications' checked={ notifications } value={ notifications }/>
        <label className='text-base' htmlFor='notifications' >I would like to recieve updates and notifications from Regeneration Room</label>
      </div>

      <div>
        <input className='border-2 border-secondary-action text-white rounded-lg px-4 py-1 hover:cursor-pointer hover:text-secondary-action' type='submit' value='Register'/>
      </div>
    </form>
  );
});

export default RegistrationForm;
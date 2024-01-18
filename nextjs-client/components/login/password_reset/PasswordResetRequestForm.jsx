import React from "react";

const PasswordResetRequestForm = React.forwardRef(( {handleSubmit, transition, confirmationObj}, ref )=>{

  function responseFunction(){
    const confirmation = { link: { path: '/login', text: 'Login'  } , message: 'Check your email for a link to reset your password.', error: false, title: 'Success!' };
    confirmationObj.current=confirmation;
    transition('CONFIRM')
  };
  
  const submissionObj = {
    responseFunction: responseFunction,
    catchFunction: responseFunction
  };

  return(
    <>
      <form 
        method='POST' 
        ref={ ref } 
        onSubmit={ (e) => { handleSubmit(e, '/users/reset_password/', submissionObj) } } 
        className="w-full flex flex-col"
      >
        <p className="text-center text-sm mb-4">Provide your email below. If an account with the provided email exists, an email with a link to change your password will be sent to that email.</p>
        <div className="w-full flex flex-col mb-4">
          <label className='mb-1' htmlFor="Email">Email:</label>
          <input className="p-1 rounded-md" type='text' name='email' required/>
        </div>
        <div>
          <input className='border-2 border-secondary-action rounded-lg px-4 py-1 text-white hover:cursor-pointer hover:text-secondary-action' type='submit' value='Request Password Reset'/>
        </div>
      </form>
    </>
  );
})

export default PasswordResetRequestForm
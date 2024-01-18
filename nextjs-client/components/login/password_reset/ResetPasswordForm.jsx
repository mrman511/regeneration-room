import React from "react";
import { useCookies } from "react-cookie";

const ResetPasswordForm = React.forwardRef(({ handleSubmit, errObj, transition, confirmationObj }, ref) => {
  const [cookies, setCookie, removeCookie] = useCookies(['refresh_token']);

  const validate = (formData, setErrObj) => {
    const error={}
    if (formData.get('password') !== formData.get('confirm_password')){
      error.matchingPasswords = 'The two passwords provided do not match.'
    }
    setErrObj(prev=>({...error}));
  };

  function responseFunction(res){
    const confirmation = { link: { path: '/login', text: 'Login'  }, message: res.data.detail, error: false, title: 'Sucess!' };
    confirmationObj.current=confirmation;
    transition('CONFIRM')
  };
  function catchFunction(res){
    const error = { link: { path: '/login/password_reset', text: 'Try Again'  }, message: res.response.data.detail,  error: true, title: 'An Error Occured' }
    confirmationObj.current=error;
    transition('CONFIRM')
  };
  const submissionObj = {
    validate: validate,
    responseFunction: responseFunction,
    catchFunction: catchFunction
  };

  return (
    <form 
      method='POST' 
      ref={ ref } 
      onSubmit={ (e) => { handleSubmit(e, '/users/reset_password/', submissionObj) } } 
      className="w-full flex flex-col"
    >
      <div className="relative w-full flex flex-col my-2 mt-4">
        { errObj.matchingPasswords && <p className="absolute -translate-y-3/4 top-0 text-sm text-red-500">*{ errObj.matchingPasswords }</p> }
        <label className='mb-1' htmlFor='password'>New Password:</label>
        <input 
          className={["rounded-md p-0.5", (errObj.matchingPasswords ? 'border-4 border-red-500' : '')].join(' ')} 
          type='password' 
          name='password'
          required
        /> 
      </div>

      <div className="w-full flex flex-col mt-2 mb-4">
        <label className='mb-1' htmlFor='confirm-password'>Confirm New Password:</label>
        <input 
          className={["rounded-md p-0.5", (errObj.matchingPasswords ? 'border-4 border-red-500' : '')].join(' ')} 
          type='password' 
          name='confirm_password'
          required
        /> 
      </div>

      <div>
        <input className='border-2 border-secondary-action text-white rounded-lg px-4 py-1 hover:cursor-pointer hover:text-secondary-action' type='submit' value='Register'/>
      </div>
    </form>
  );
});

export default ResetPasswordForm;
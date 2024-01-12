import React from "react";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const LoginForm = React.forwardRef(({ handleSubmit, confirmationObj, transition }, ref)=>{
  const [cookie, setCookie, removeCookie] = useCookies(['user']);
  const router = useRouter();

  const setUser = (res) =>{
    setCookie('user', res.data.access, {
      path: '/',
      maxAge: 24 * 3600,
    });
    router.push('/');
  };

  //set actions and links for confirmation objects on event of login error
  const loginError = (err) => {
    // action for link, transition back to form on link click
    function transitionToForm(e){
      e.preventDefault();
      transition('FORM');
    };
    // action link for alt link, transition login page to password reset form

    if (err.response.status === 401){
      const link = { path: '/login', text: 'Try Again', action: transitionToForm };
      const altLink = { path: '/login/password_reset', text: 'Forgot Password?',  };
      const error = { link: link, altLink: altLink, message: err.response.data.detail,  error: true, title: 'An Error Occured' };
      confirmationObj.current=error;
      transition('CONFIRM');
    }
  }

  const submissionObj = {
    responseFunction: setUser,
    catchFunction: loginError,
  };

  return (
    <>
      <form 
        method='POST' 
        ref={ ref } 
        onSubmit={ (e)=>{handleSubmit(e, '/users/token/', submissionObj)} } 
        className="w-full flex flex-col"
      >
        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor="Email">Email:</label>
          <input className="p-1 rounded-md" type='text' name='email' required/>
        </div>
        <div className="w-full flex flex-col my-2 mb-4">
          <label className='mb-1' htmlFor='password'>Password:</label>
          <input className="p-1 rounded-md" type='password' name='password' required/> 
        </div>
        {/* <div className="w-full my-2">
          <input className="me-2 h-4 w-4" type='checkbox' name='remember'/>
          <label htmlFor='remember'>Remember Me</label>
        </div> */}
        <div>
          <input className='border-2 border-secondary-action rounded-lg px-4 py-1 text-white hover:cursor-pointer hover:text-secondary-action' type='submit' value='Login'/>
          <Link href='/login/password_reset' className="ms-4 hover:cursor-pointer hover:text-secondary-action">Forgot Password?</Link>
        </div>
      </form>

      <div className="w-full mt-4">
        <p className="mb-4 mt-2">Havn't registered yet?</p>
        <Link href='/register' className='border-2 border-secondary-action rounded-lg px-4 py-2 hover:text-secondary-action'>Register Now!</Link>
      </div>
    </>
  );
});

export default LoginForm
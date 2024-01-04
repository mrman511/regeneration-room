import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function LoginForm({ styles, handleSubmit, formRef, errObj }){
  const [cookie, setCookie, removeCookie] = useCookies(['user']);
  const router = useRouter()

  const setUser = (res) =>{
    setCookie('user', res.data.access, {
      path: '/',
      maxAge: 24 * 3600,
    })
    router.push('/')
  };

  const submissionObj = {
    responseFunc: setUser,
  }

  return (
    <>
      <form method='POST' ref={ formRef } onSubmit={ (e)=>{handleSubmit(e, '/users/token/', submissionObj)} } className="w-full flex flex-col">
        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor="Email">Email:</label>
          <input className="p-1 rounded-md" type='text' name='email' required/>
        </div>
        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor='password'>Password:</label>
          <input className="p-1 rounded-md" type='password' name='password' required/> 
        </div>
        <div className="w-full my-2">
          <input className="me-2 h-4 w-4" type='checkbox' name='remember'/>
          <label htmlFor='remember'>Remember Me</label>
        </div>
        <div>
          <input className='border-2 border-secondary-action rounded-lg px-4 py-1 text-white hover:cursor-pointer' type='submit' value='Login'/>
        </div>
      </form>

      <div className="w-full mt-4">
        <p className="mb-4 mt-2">Havn't registered yet?</p>
        <Link
          href='/register' 
          className='border-2 border-secondary-action rounded-lg px-4 py-2'
        >
          Register Now!
        </Link>
      </div>
    </>
  );
}
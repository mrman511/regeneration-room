import Link from "next/link";

export default function LoginForm({ styles }){

  return (
    <article className="relative top-[20vh] w-[400px] text-xl p-4 bg-primary-dark text-white rounded-xl overflow-hidden">
      <form method='POST' className="w-full flex flex-col">
        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor="email">Email:</label>
          <input className="rounded-md" type='email' name='email'/>
        </div>
        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor='password'>Password:</label>
          <input className="rounded-md" type='password' name='password'/> 
        </div>
        <div className="w-full my-2">
          <input className="me-2 h-4 w-4" type='checkbox' name='remember'/>
          <label htmlFor='remember'>Remember Me</label>
        </div>
        <div>
          <input className='border-2 border-secondary-action rounded-lg px-4 py-1' type='submit' value='Login'/>
        </div>
      </form>

      <div className="w-full mt-4">
        <p className="my-2">Not yet registered with us?</p>
        <Link
          href='/registration' 
          className='border-2 border-secondary-action rounded-lg px-4 py-1'
        >Register Now!</Link>
      </div>
    </article>
  );
}
export default function RegistrationForm({ styles }){

  return (
    <>
    <h1 className="relative top-[10vh] text-5xl font-cursive">Register Today</h1>
    <article className="relative top-[15vh] w-5/6 max-xs:w-11/12 sm:w-[500px] text-xl p-4 bg-primary-dark text-white rounded-xl overflow-hidden">
      <form method='POST' className="w-full flex flex-col">
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full flex flex-col sm:pe-1 my-2">
            <label className='mb-1' htmlFor="first_name">First Name:</label>
            <input className="rounded-md" type='text' name='first_name'/>
          </div>
          <div className="w-full flex flex-col sm:ps-1 my-2">
            <label className='mb-1' htmlFor="Last_name">Last Name:</label>
            <input className="rounded-md" type='text' name='Last_name'/>
          </div>
        </div>

        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor="email">Email:</label>
          <input className="rounded-md" type='email' name='email'/>
        </div>
        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor='password'>Password:</label>
          <input className="rounded-md" type='password' name='password'/> 
        </div>
        <div className="w-full flex flex-col my-2">
          <label className='mb-1' htmlFor='confirm-password'>Confirm Password:</label>
          <input className="rounded-md" type='password' name='confirm-password'/> 
        </div>
        <div className="w-full my-2">
          <input className="me-2 h-4 w-4" type='checkbox' name='notifications'/>
          <label className='text-base' htmlFor='notifications'>I would like to recieve updates and notifications from Regeneration Room</label>
        </div>
        <div>
          <input className='border-2 border-secondary-action rounded-lg px-4 py-1' type='submit' value='Register'/>
        </div>
      </form>
    </article>
    </>
  );
}
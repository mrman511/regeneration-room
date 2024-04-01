import React from "react";

const ContactForm = React.forwardRef((props, ref) =>{
  const test_email="bodner80@gmail.com";
  const test_email_message = "This is just a test email. Please Ignore";

  const {
    styles, 
    handleSubmit, 
    errObj, 
    transition, 
    confirmationObj, 
    rejectionError, 
    formData
  }=props;


  function responseFunction(res){
    const message = "Thank you for reaching out! You can expect to hear from us within 1 to 2 business days.";
    const confirmation = {
      link: { path: '/', text: 'Home' }, 
      message: message, 
      error: false, 
      title: 'Message Sent!',
    };
    confirmationObj.current = confirmation;
    transition('CONFIRM');
  };

  function catchFunction(err){
    const message = err.non_field_errors ? err.non_field_errors[0] : 'There has been an error! Please try again soon.'
    const error = {
      link: { path: '/contact', text: 'Home' }, 
      message: message, 
      error: true, 
      title: 'Message Sent!',
    }
    confirmationObj.current = error;
    transition("CONFIRM");
  }

  const submissionObject = {
    method: 'post',
    responseFunction: responseFunction,
    catchFunction: catchFunction,
  };

  return (
    <form
      method='POST'
      ref={ ref }
      onSubmit={ (e)=> {handleSubmit(e, '/contact/', submissionObject)} }
      className="w-full h-full flex flex-col justify-evenly sm:text-lg"
    >
      <div className="flex flex-col my-2">
        <label className="mb-0.5" htmlFor="name">Name: </label>
        <input className='w-full p-1 rounded-md text-black' type="text" name='name' />
      </div>
      <div className="flex flex-col my-2">
        <label className="mb-0.5" htmlFor="email">Email:</label>
        <input className='w-full p-1 rounded-md text-black' type="email" name='email' required/>
      </div>
      <div className="flex flex-col my-2">
        <label className="mb-0.5" htmlFor="subject">Subject:</label>
        <input className='w-full p-1 rounded-md text-black' type="text" name='subject'/>
      </div>
      <div className="flex flex-col my-2">
        <label className="mb-0.5" htmlFor="message">Message:</label>
        <textarea className='w-full h-36 p-1 rounded-md text-black' type="text" name='message' required/>
      </div>

      <div className='mt-4'>
          <input 
            className='border-2 border-secondary-action rounded-lg px-4 py-1 text-white hover:cursor-pointer hover:text-secondary-action' 
            type='submit' 
            value='Send'
          />
        </div>
    </form>
  );
});

export default ContactForm;
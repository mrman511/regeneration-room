import React from 'react';
import { useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import themeColours from '@/utils/tailwind/themeColours';
import { convert12To24HourFormat } from '@/utils/helpers/convertHourFormat';


const AppointmentForm = React.forwardRef((props, ref) =>{
  const {
    styles, 
    handleSubmit, 
    errObj, 
    transition, 
    confirmationObj, 
    rejectionError, 
    formData
  }=props;

  const {
    data,
    dateTime,
    setDateTime,
    hours,
    headers,
  }=formData;

  const durationArr = [30, 60]
  if (data && data.duration === 60){
    durationArr.reverse();
  };
  const [duration, toggleDuration] = useCycle(...durationArr);

  const lastAppointment = (hours.close.getTime() - 30 * 60000);
  const maxApptDuration = hours.close.getTime() - dateTime.getTime();

  function handleDuration(){
    if (maxApptDuration >= 60*60000){
      toggleDuration();
    };
  };

  function responseFunction(res){
    if (res.data === 201 || res.status === 200){
      const msg = 'Would you like to request another?';
      const confirmation = { 
        link: { path: '/appointments', text: 'New Appointment', action: ()=>{ transition('FORM') } }, 
        message: msg, 
        error: false, 
        title: 'Appointment Booked!' 
      };
      confirmationObj.current = confirmation
      transition('CONFIRM');
    };
  };

  function catchFunction(err){
    const error = { 
      link: { path: '/appointments', text: 'Try Another Time', action: ()=>{ transition('FORM') } }, 
      message: err.response.data.non_field_errors[0], 
      error: true, 
      title: 'An Error Occured.' 
    };
    confirmationObj.current = error;
    transition("CONFIRM")
  };

  const submissionObj = {
    method: 'patch',
    headers: headers,
    responseFunction: responseFunction,
    catchFunction: catchFunction,
    id: data ? data.id : null, 
  };

  function formatSubmission(e){
    const path = '/appointments/' + (data ? `${data.id}/` : '');
    e.preventDefault();
    ref.current.time.value = convert12To24HourFormat(ref.current.time.value);
    handleSubmit(e, path, submissionObj);
  };

  const css = `
    .react-datepicker__time-list-item--disabled{
      display: none !important;
    }
    .react-datepicker__input-container input{
      padding: .25rem !important;
    }
  `;

  useEffect(()=>{
    // change duration to 30 if duration is 60 and last appointment time is chosen
    if (duration === 60 && dateTime.getTime() === lastAppointment ){
      toggleDuration();
    }
  });

  
  return (
    <form
      method={ data ? 'PATCH' : 'POST' }
      ref={ ref }
      onSubmit={ (e)=>{formatSubmission(e)} }

     className='w-full h-full flex flex-col justify-evenly'
    >
      <style>{ css }</style>
      <div className='w-auto flex justify-between'>
        <div className='flex w-[47.5%] flex-col bg-transparent'>
          <label className='text-white mb-1' htmlFor="date">Date</label>
          <DatePicker
            name='date'
            wrapperClassName={"p-1 w-full rounded-md text-black overflow-hidden"}
            dateFormat="yyyy-MM-dd" 
            onChange={ (date)=>{ setDateTime(date) } }
            selected={ dateTime }
          />
        </div>
        <div className="flex w-[47.5%] flex-col bg-transparent">
          <label className='text-white mb-1' htmlFor="date">Time</label>
          <DatePicker
            name="time"
            wrapperClassName={"p-1 w-full rounded-md text-black overflow-hidden"}
            timeFormat='h:mm a'
            showTimeSelect
            showTimeSelectOnly
            onChange={ (date)=>{ setDateTime(date) } }
            selected={ dateTime }
            minTime={ hours.open.getTime() }
            maxTime={ lastAppointment }
            dateFormat='h:mm a'
          />
        </div>
      </div>
      <div className="flex flex-col bg-transparent mt-4">
        <label className="text-white">Duration</label>
        <input 
          className='hidden' 
          type="text" 
          name="duration"
          onChange={()=>{}}
          value={ duration }
        />

        <div className='relatve  w-56 my-2 flex justify-start items-end'>
          <motion.div
            onClick={ handleDuration }
            className='relative w-20 h-20 end-0 flex justify-center items-center tracking-tighter border-2 border-secondary-action rounded-xl overflow-hidden hover:cursor-pointer'
            animate={{ 
              scale: duration === 30 ? 1 : .65,
              top: duration === 30 ? 0 : '17.5%',
              color: duration === 30 ? themeColours['secondary-action'] : themeColours['secondary-trim'],
              borderColor: duration === 30 ? themeColours['secondary-action'] : themeColours['secondary-trim'],
            }}
          >
            <h3 className='text-2xl font-semibold'>30 <span className='text-lg'>min</span></h3>
          </motion.div>

          { (maxApptDuration >= 60*60000) && <motion.div
            onClick={ handleDuration }
            className='relative w-20 h-20 end-0 flex justify-center items-center tracking-tighter border-2 border-secondary-action rounded-xl hover:cursor-pointer '
            animate={{ 
              scale: duration === 60 ? 1 : .65, 
              top: duration === 60 ? 0 : '17.5%',
              color: duration === 60 ? themeColours['secondary-action'] : themeColours['secondary-trim'],
              borderColor: duration === 60 ? themeColours['secondary-action'] : themeColours['secondary-trim'], 
            }}
          >
            <h3 className='text-2xl font-semibold'>60 <span className='text-lg'>min</span></h3>
          </motion.div>}
        </div>

        <div className='mt-4'>
          <input 
            className='border-2 border-secondary-action rounded-lg px-4 py-1 text-white hover:cursor-pointer hover:text-secondary-action' 
            type='submit' 
            value='Request Appointment'
          />
        </div>
      </div>
    </form>
  )
});

export default AppointmentForm;
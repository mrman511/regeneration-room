import { useState, useEffect } from "react";
import RsuiteCalendar from "../calendar/RsuiteCalendar";
import FormContainer from "../FormContainer";
import AppointmentForm from "./appointmentform";
import HelixLoader from "../HelixLoader";
import useVisualMode from "@/utils/helpers/useVisualMode";

export default function BookAppointment({styles, hours, headers, appointmentData}){
  const [dateTime, setDateTime] = useState();
  const [dayHours, setDayHours] = useState(undefined)

  const {mode, transition}=useVisualMode('CALENDAR')

  const formData = {
    data: appointmentData,
    dateTime: dateTime,
    setDateTime: setDateTime,
    hours: dayHours,
    headers: headers,
  };

  function onDateSelect(date){
    setDateTime(date);
    formData.dateTime=dateTime;
    transition('FORM');
  }

  useEffect(()=>{
    // appointment data is appointment to be edited
    if (appointmentData){
      // create appointment datetime
      const appointmentDatetime = new Date(`${appointmentData.date}T${appointmentData.time}`);
      // if not date time or appointmentDate time is not equeal to dateTime
      if (!dateTime || (appointmentDatetime.toString() !== dateTime.toString())){
        // emulate loading for UI purposes
        transition('LOADER');
        // set date time to appointmentDateTime
        setDateTime(appointmentDatetime);
        // in .4s transition to form to be edited
        setTimeout(()=>{
          transition('FORM');
        }, 400);
      };
    };

    if (hours && dateTime){
      const i = dateTime.getDay();
      if (hours.weekdays_open[i]){
        const givenHours = {
          open: new Date(`${dateTime.toDateString()} ${hours.opening_hours[i]}`),
          close: new Date(`${dateTime.toDateString()} ${hours.closing_hours[i]}`),
          isOpen: true,
        };
        // for (let holiday of hours.holiday_hours){
        //   // set hours to holidayhours is selected date is in list of holidays
        //   // let holiDate = holiday.date.replace(/-/g, '\/');
        //   // holiDate = new Date(holiDate);
        //   // if (holiDate.toDateString() === dateTime.toDateString()){
        //   //   givenHours.open = new Date(`${holiDate.toDateString()} ${holiday.opening_hours}`);
        //   //   givenHours.close = new Date(`${holiDate.toDateString()} ${holiday.closing_hours}`);
        //   //   givenHours.isOpen = holiday.is_open;
        //   // };
        // };
        // if store hours are not set or open hours change after date change
        if (!dayHours || (givenHours.open.toTimeString() !== dayHours.open.toTimeString() || givenHours.close.toTimeString() !== dayHours.close.toTimeString())){
          if (!appointmentData){
            setDateTime(givenHours.open);
          };
          // set new days hours
          setDayHours(givenHours);
        };
      };
    };
  },[dateTime, dayHours, appointmentData]);

  return (
    <section 
      key={ appointmentData ? `edit-${appointmentData.id}`: 'appointmentBooking'} 
      className="relative h-full py-4 sm:px-4 flex flex-col items-center">
      <div>
        <h2 className="font-cursive text-5xl font-semibold">Book Now</h2>
      </div>
      <div className="relative w-[320px] sm:w-[340px] h-full mt-10 flex grow">
        { mode ==='CALENDAR' && <RsuiteCalendar select={ onDateSelect }/> }
        { mode === 'LOADER' && <div className="relative w-full mx-8 h-72 flex items-center"><HelixLoader /></div> }
        { (mode ==='FORM' && dayHours) && <FormContainer FormComponent={ AppointmentForm } formData={formData}/> }
      </div>
    </section>
  );
}
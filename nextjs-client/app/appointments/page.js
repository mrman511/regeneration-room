'use client'

import { useState, useEffect } from "react";

import Header from "@/components/Header";
import MyAppointments from "@/components/appointments/MyAppointments";
import BookAppointment from "@/components/appointments/BookAppointment";

import useVisualMode from "@/utils/helpers/useVisualMode";
import apiRequest from "@/utils/api-requests/apiRequests";
import handleUserCookies from "@/utils/helpers/handleUserCookies";

export default function Appointments(){
  const { mode, transition } = useVisualMode('UPCOMING');
  const { cookies, logout } = handleUserCookies();
  const [appointments, setAppointments] = useState();
  const [appointmentData, setAppointmentData] = useState(null);
  const [hours, setHours ] = useState();

  const headers = { Authorization: `Bearer ${cookies.user}` }
  const gridClasses = 'grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-4 grid-flow-row'
  const alignmentClasses = 'justify-items-center items-stretch'

  useEffect(()=>{
    if (!hours){
      const request = {
        path: '/operating_hours/',
        method: 'get',
        headers: {
          ...headers
        },
      }
      apiRequest(request, (res)=>{setHours(res.data ? res.data : [])}, console.log);
    }
  }, [appointments, appointmentData])

  return (
    <>
    <Header />
    <main className="w-full h-auto bg-white font-base" >
      <div className="w-full h-auto flex justify-center bg-background-light">
        <section className={ [gridClasses, alignmentClasses, "w-full max-w-[950px] h-auto p-2"].join(' ') }>
          { !appointmentData && <BookAppointment hours={ hours } headers={ headers } setAppointments={ setAppointments } />}
          { appointmentData && <BookAppointment hours={ hours } headers={ headers } appointmentData={ appointmentData } setAppointments={ setAppointments }/>}
          <MyAppointments user={ cookies.user } appointments={ appointments } setAppointments={ setAppointments } setAppointmentData={ setAppointmentData }/>
        </section>
      </div>
    </main>
    </>
  );
}
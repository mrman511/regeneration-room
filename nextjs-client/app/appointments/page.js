'use client'

import { useState, useEffect } from "react";

import Header from "@/components/Header";
import MyAppointments from "@/components/appointments/MyAppointments";
import BookAppointment from "@/components/appointments/BookAppointment";
import styles from '@/styles/Styles.module.scss'

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

  useEffect(()=>{
    if (!appointments && cookies.user){
      const request = {
        path: '/appointments/',
        method: 'get',
        headers: {
          Authorization: `Bearer ${cookies.user}`
        },
      }
      apiRequest(request, (res)=>{setAppointments(res.data ? res.data : [])}, console.log);
    }
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
    <Header styles/>
    <main className="w-full h-auto flex flex-wrap justify-evenly bg-white">
      { appointments && <MyAppointments appointments={ appointments } setAppointmentData={setAppointmentData}/>}
      { !appointmentData && <BookAppointment hours={ hours } headers={ headers }/>}
      { appointmentData && <BookAppointment hours={ hours } headers={ headers } appointmentData={ appointmentData }/>}
    </main>
    </>
  );
}
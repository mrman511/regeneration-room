'use client'

import { useState, useEffect } from "react";

import Link from "next/link"
import AppointmentList from "./AppointmentsList";
import HelixLoader from "../HelixLoader";

import useVisualMode from "@/utils/helpers/useVisualMode";
import apiRequest from "@/utils/api-requests/apiRequests";

export default function MyAppointments({styles, user, appointments, setAppointments, setAppointmentData}){
  // const { mode, transition } = useVisualMode(user ? 'LOADER' : 'NOUSER');
  const { mode, transition } = useVisualMode('LOADER');

  function getAppointments(res){
    if (!res.data || res.data.length === 0){
      transition('NONE');
    } else {
      setAppointments(res.data);
      transition('APPOINTMENTS');
    };
  }

  useEffect(()=>{
    if (!appointments){
      transition('LOADER');
    };
    if (!appointments && user){
      const request = {
        path: '/appointments/',
        method: 'get',
        headers: {
          Authorization: `Bearer ${user}`
        },
      };
      apiRequest(request, getAppointments, console.log);

    } else if (!user){
      transition('NOUSER');
    }
  },[appointments]);

  return (
    <section className="relative w-full max-w-96 mt-6 mb-4 px-1 py-4  flex flex-col items-center bg-white shadow-card">
      <div className="relative w-fullflex flex-col items-center text-lg">
        <h2 className="font-cursive text-5xl font-semibold">My Appointments</h2>
        {mode == 'APPOINTMENTS' && <div className="w-full mt-4  flex mt-2 justify-evenly">
          <Link href="">Upcoming</Link>
          <Link href="">Past</Link>
        </div>}
      </div>
      { mode === 'APPOINTMENTS' && 
        <div className="w-11/12 max-w-[350px] min-w-[300px] max-h-full border-2 border-grey-200 rounded-xl overflow-scroll p-2">
          { appointments && <AppointmentList appointments={ appointments } setAppointmentData={ setAppointmentData }/>}
        </div> 
      }
      { mode === 'LOADER' &&
        <article className="h-full flex items-center">
          <HelixLoader /> 
        </article>
      }
      { mode === 'NOUSER' && 
        <article className="w-full h-full py-4 px-2 flex flex-col items-center justify-evenly border-2 border-grey-200 mt-4 text-center rounded-xl">
          <div classname="w-full text-center">
            <p className="font-cursive text-4xl font-bold">Have An Account?</p>
            <p className="text-xl">If you would like to view your appointments please click to <Link className="text-primary-light" href="/login">Login</Link></p>
          </div>
          <p className="font-cursive text-4xl font-bold">OR</p>
          <p className="text-xl mb-4">If you would like to begin your wellness journey please click to <Link className="text-primary-light" href="/register">Register</Link></p>
        </article>
      }
      { mode === 'NONE' && 
        <article className="w-full h-full py-4 px-2 flex flex-col items-center justify-center border-2 border-grey-200 mt-4 text-center rounded-xl">
          <div className="w-full text center mb-8">
            <p className="font-cursive text-4xl font bold">No Appoinments</p>
          </div>
            <p className="text-xl">Schedule your first transformative experience with Regeneration Room or contact us today!</p>
        </article>
      }
    </section>
  )
}
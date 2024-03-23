'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

import FormContainer from "../FormContainer";
import ContactForm from "./ContactForm";

import apiRequest from "@/utils/api-requests/apiRequests";

export default function ContactInfo({}){
  const [ operationsInfo, setOperationsInfo ] = useState();
  const email = operationsInfo ? operationsInfo.contact_email : 'info@regenerationroom.ca';

  const gridContainerClass="grid grid-cols-1 grid-rows-1 auto-rows-min md:grid-cols-5 md:grid-rows-2 gap-4";
  const formGridClass="md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-2";
  const cardGridClass="" 

  useEffect(()=>{
    if (!operationsInfo){
      const request = {
        path: '/operations/',
        method: 'get',
      };
      apiRequest(request, (res)=>{ setOperationsInfo(res.data) }, console.log);      
    };
  }, [operationsInfo]);

  return (
    <section className={ [gridContainerClass, "w-5/6 max-sm:w-full my-4 sm:rounded-xl"].join(' ') }>
      <div className="w-full h-full p-4 self-center md:row-start-1 md:col-start-4 md:col-span-2 justify-self-center text-lg flex flex-col justify-center items-center text-center bg-secondary-action">
        <p>
          For general inquiries, please feel free to email us at <span>
          <Link className="text-primary-light" href={`mailto:${email}`} target="_blank">{ email }</Link>. 
          </span> We aim to respond to all emails within 24-48 hours during our regular business hours.
        </p>
      </div>
      <div className={[ formGridClass, "w-auto h-auto"].join(' ') }>
        <FormContainer FormComponent={ ContactForm }/>
      </div>
      <div className="w-full h-full md:row-start-2 md:col-start-4 md:col-span-2 justify-self-center self-center text-center bg-secondary-trim ">

      </div>
    </section>
  )
}
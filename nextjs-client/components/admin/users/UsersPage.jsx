"use client"

import { useState, useEffect } from "react";
import apiRequest from "@/utils/api-requests/apiRequests";
import HelixLoader from "@/components/HelixLoader";
import UserTable from "./UserTable";

export default function UsersPage({user}){
  const [users, setUsers] = useState(undefined);

  useEffect(()=>{
    if (!users){
      const request = {
        path: '/admin/users/',
        method: 'get',
        headers: {
          Authorization: `Bearer ${user}`
        },
      };
      apiRequest(request, (res)=>{ setUsers(res.data) }, console.log);
    }
  }, [users])

  return(
    <>
      { users ?
      <>
        {/* <article>
          
        </article> */}
        < UserTable users={ users }/>
      </>
      :
        <HelixLoader />
       }
    </>
  );
}
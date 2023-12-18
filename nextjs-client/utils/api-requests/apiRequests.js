import axios from "axios";

export default function apiRequest(reqObj, responsefunc, catchFunction){
  const { path, method, body } = reqObj
  const request = [process.env.NEXT_PUBLIC_API_BASE_ROUTE + path]
  if ( body ){
    request.push(body)
  }
  axios[method](...request).then((res)=>{
    responsefunc(res);
  }).catch((err)=>{
    console.log(err)
    if (catchFunction){
      catchFunction(err);
    }
  })
}
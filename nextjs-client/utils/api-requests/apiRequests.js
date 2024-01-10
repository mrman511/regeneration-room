import axios from "axios";

export default function apiRequest(requestObject, responseFunction, catchFunction){
  const { path, method, body } = requestObject
  const request = [process.env.NEXT_PUBLIC_API_BASE_ROUTE + path]
  if ( body ){
    request.push(body)
  }
  axios[method](...request).then((res)=>{
    responseFunction(res);
  }).catch((err)=>{
    if (catchFunction){
      catchFunction(err);
    }
  })
}
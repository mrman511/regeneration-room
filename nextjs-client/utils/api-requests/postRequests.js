import axios from "axios";

export default function apiRequest(reqObj, responsefunc, catchFunction){
  const { path, method, data } = reqObj
  const requestData = [process.env.NEXT_PUBLIC_API_BASE_ROUTE + path]
  if ( data ){
    requestData.push(data)
  }
  axios[method](...requestData).then((res)=>{
    responsefunc(res);
  }).catch((err)=>{
    if (catchFunction){
      catchFunction(err);
    }
  })
}
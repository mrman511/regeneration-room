import axios from "axios";

export default function apiRequest(requestObject, responseFunction, catchFunction){
  const { path, method, body, headers } = requestObject;
  const request = [process.env.NEXT_PUBLIC_API_BASE_ROUTE + path];
  if ( body ){
    request.push(body);
  };
  const options = {};
  if (headers){
    options.headers={...headers};
  };
  axios[method](...request, options).then((res)=>{
    if (responseFunction){
      responseFunction(res);
    } else {
      console.log('RESPONSE: ', res);
    };
  }).catch((err)=>{
    if (catchFunction){
      catchFunction(err);
    } else {
      console.log(err);
    };
  });
};
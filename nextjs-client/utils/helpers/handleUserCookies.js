import { useCookies } from "react-cookie";

export default function handleUserCookies(){
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  function login (cookie){
    setCookie('user', cookie, {
      path: '/',
      maxAge: 24 * 3600,
    })
  }

  function logout (){
    console.log('here');
    removeCookie('user')
  }

  return {cookies, login, logout }
}
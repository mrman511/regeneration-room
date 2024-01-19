'use client'
import { useCookies } from "react-cookie";
import FormContainer from "@/components/FormContainer";
import PasswordResetRequestForm from "@/components/login/password_reset/PasswordResetRequestForm";
import ResetPasswordForm from "./ResetPasswordForm";

export default function PasswordResetPage({styles, searchParams}){
  const [cookies, setCookie, removeCookie] = useCookies();
  if (searchParams.pk){
    const {pk, token} = searchParams;
    setCookie('pk', pk);
    setCookie('reset_token', token)
  }

  return (
    <>
      <FormContainer 
        styles={ styles } 
        FormComponent={ searchParams.pk ? ResetPasswordForm : PasswordResetRequestForm } 
        title={ 'Request Password Reset' } 
        searchParams={ searchParams } 
      />
    </>
  );
}
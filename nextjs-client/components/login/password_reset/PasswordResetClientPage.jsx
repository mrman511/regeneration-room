'use client'
import { useCookies } from "react-cookie";
import FormContainer from "@/components/FormContainer";
import PasswordResetRequestForm from "@/components/login/password_reset/PasswordResetRequestForm";
import ResetPasswordForm from "./ResetPasswordForm";

export default function PasswordResetPage({styles, refreshToken}){
  const [cookies, setCookie, removeCookie] = useCookies(['refresh_token']);
  if (refreshToken) setCookie('refresh_token', refreshToken, { maxAge: 60*60 });

  return (
    <>
      <FormContainer styles={ styles } FormComponent={ refreshToken ? ResetPasswordForm : PasswordResetRequestForm } title={ 'Request Password Reset' } />
    </>
  );
}
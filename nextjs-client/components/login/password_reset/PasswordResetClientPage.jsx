'use client'
import FormContainer from "@/components/FormContainer";
import PasswordResetRequestForm from "@/components/login/password_reset/PasswordResetRequestForm";

export default function PasswordResetPage({styles}){
  // const [cookie, setCookie, removeCookie] = useCookies(['user'])

  return (
    <>
      <FormContainer styles={ styles } FormComponent={ PasswordResetRequestForm } title={ 'Request Password Reset' } />
    </>
  );
}
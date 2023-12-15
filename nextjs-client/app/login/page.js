'use client'
import { useCookies } from "react-cookie";

import LoginForm from "@/components/login/LoginForm";
import FormContainer from "@/components/FormContainer";
import Header from "@/components/Header";
import styles from '@/styles/Styles.module.scss';

export default function Login() {
  const [cookie, setCookie, removeCookie] = useCookies(['user'])

  return (
    <main className="flex min-h-screen flex-col items-center font-base">
      <Header styles={ styles }/>
      <FormContainer styles={ styles } FormComponent={ LoginForm } title={ 'Login' } setCookie={ setCookie }/>
    </main>
  )
}

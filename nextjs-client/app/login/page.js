'use client'
import LoginForm from "@/components/login/LoginForm";
import FormContainer from "@/components/FormContainer";
import Header from "@/components/Header";
import styles from '@/styles/Styles.module.scss';

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center font-base">
      <Header styles={ styles }/>
      <FormContainer styles={ styles } FormComponent={ LoginForm } title={ 'Login' } />
    </main>
  )
}

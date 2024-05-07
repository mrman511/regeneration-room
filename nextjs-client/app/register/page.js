'use client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/registration/RegistratioinForm';
import FormContainer from '@/components/FormContainer';
import styles from '@/styles/Styles.module.scss';

export default function Register() {
  return (
    <>
    <Header styles={ styles }/>
    <main className="flex min-h-screen flex-col items-center font-base">
      <FormContainer styles={ styles } FormComponent={ RegistrationForm } title={ 'Register Today!' } />
    </main>
    <Footer />
    </>
  )
}

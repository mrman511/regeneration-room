import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from '@/styles/Styles.module.scss';
import PasswordResetPage from "@/components/login/password_reset/PasswordResetClientPage";

export default function ResetPassword({params, searchParams}) {


  return (
    <>
    <Header styles={ styles }/>
    <main className="flex min-h-screen flex-col items-center font-base">
      <PasswordResetPage styles={ styles } searchParams={ searchParams }/>
    </main>
    <Footer />
    </>
  )
}
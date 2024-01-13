import Header from "@/components/Header";
import styles from '@/styles/Styles.module.scss';
import PasswordResetPage from "@/components/login/password_reset/PasswordResetClientPage";

export default function ResetPassword({params, searchParams}) {
  let refreshToken = searchParams ? searchParams.refresh_token : undefined;

  return (
    <main className="flex min-h-screen flex-col items-center font-base">
      <Header styles={ styles }/>
      <PasswordResetPage styles={ styles } refreshToken={ refreshToken }/>
    </main>
  )
}
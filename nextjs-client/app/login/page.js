import LoginForm from "@/components/login/LoginForm";
import styles from '@/styles/Styles.module.scss';

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center font-base">
      <LoginForm />
    </main>
  )
}

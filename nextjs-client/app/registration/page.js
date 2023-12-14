import RegistrationForm from '@/components/registration/RegistratioinForm';
import styles from '@/styles/Styles.module.scss';

export default function Registration() {
  return (
    <main className="flex min-h-screen flex-col items-center font-base">
      <RegistrationForm />
    </main>
  )
}
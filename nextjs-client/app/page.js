import styles from '@/styles/Styles.module.scss'
import ComingSoon from '@/components/ComingSoon'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ComingSoon styles={ styles }/>
    </main>
  )
}

import styles from '@/styles/Styles.module.scss';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoGroup from '@/components/videos/VideoGroup';

export default function Home() {

  return (
    <>
    <Header />
    <main className="relative flex flex-col items-center justify-between font-base bg-background-light">
      <Hero styles={ styles }/>
      <VideoGroup />
    </main>
    </>
  );
}

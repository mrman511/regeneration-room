import Link from "next/link";

export default function Navigation({ styles}){

  return (
    <>
      <nav className={ [styles.navigation, 'block me-4'].join(' ') }>
        <Link href="/" className="text-lg font-semibold">Preregister</Link>
      </nav>
    </>
  );
}
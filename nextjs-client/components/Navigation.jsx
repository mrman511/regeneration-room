import Link from "next/link";

export default function Navigation({ styles}){

  return (
    <>
      <nav className={ [styles.navigation, 'block me-4'].join(' ') }>
        <Link href="/login" className="text-lg max-sm:text-md font-semibold text-right whitespace-nowrap">Register / Login</Link>
      </nav>
    </>
  );
}
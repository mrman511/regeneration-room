'use client'
import { useCookies } from "react-cookie";
import Header from "@/components/Header";

export default function Login() {
  const [cookie, setCookie, removeCookie] = useCookies(['user'])

  return (
    <main className="flex min-h-screen flex-col items-center font-base">
      <Header styles={ styles }/>
    </main>
  )
}

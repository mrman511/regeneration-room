// import { useCookies } from "react-cookie";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminPageContainer from "@/components/admin/AdminPageContainer";
import { FalsePage } from "@/components/FalsePage";

export default function Login() {
  // const [cookie, setCookie, removeCookie] = useCookies(['user'])
  
  return (
    <>
    <AdminHeader/>
    <AdminPageContainer PageComponent={ FalsePage }/>
    </>
  )
}

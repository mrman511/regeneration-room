import AdminHeader from "@/components/admin/AdminHeader";
import AdminPageContainer from "@/components/admin/AdminPageContainer";
import UsersPage from "@/components/admin/users/UsersPage";

export default function Login() {
  // const [cookie, setCookie, removeCookie] = useCookies(['user'])

  return (
    <>
    <AdminHeader/>
    <AdminPageContainer PageComponent={ UsersPage }/>
    </>
  )
}
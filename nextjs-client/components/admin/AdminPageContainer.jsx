'use client'
import AdminNavigation from "@/components/admin/adminNavigation";
import handleUserCookies from "@/utils/helpers/handleUserCookies";


export default function AdminPageContainer({PageComponent }){

  const { cookies, logout } = handleUserCookies();

  const gridLayoutClasses="grid md:grid-cols-4 md:grid-rows-1 lg:grid-cols-5";
  const gridMainLayout="md:col-start-2 md:col-span-3 lg:col-span-4";

  return (
    <main className={[gridLayoutClasses, "min-h-full top-0 flex-col font-base bg-white"].join(' ')}>
      <AdminNavigation />
      <section className={[gridMainLayout, "w-full h-full flex justify-center items-center"].join(' ')}>
        <PageComponent user={ cookies.user }/>
      </section>
    </main>
  );
}
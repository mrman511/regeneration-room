import Link from "next/link"
import AppointmentList from "./AppointmentsList"

export default function MyAppointments({styles, appointments, setAppointmentData}){
  return (
    <section className="relative w-[320px] sm:w-[380px] flex flex-col py-4">
      <div className="w-full flex flex-col items-center text-lg">
        <h2 className="font-cursive text-5xl font-semibold">My Appointments</h2>
        <div className="w-full flex mt-2 justify-evenly">
          <Link href="">Upcoming</Link>
          <Link href="">Past</Link>
        </div>
      </div>
      <div className="max-h-96  border-2 border-grey-200 rounded-xl overflow-scroll p-2">
        <AppointmentList appointments={ appointments } setAppointmentData={ setAppointmentData }/>
      </div>
    </section>
  )
}
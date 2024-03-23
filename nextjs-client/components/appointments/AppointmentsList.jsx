import AppointmentItem from "./AppointmentItem"

export default function AppointmentList({styles, appointments, setAppointmentData}){

  const parsedAppointments = appointments.map((appointment, i ) => <AppointmentItem 
    key={ `${appointment.id}-${i}` }
    appointment={ appointment }
    setAppointmentData={ setAppointmentData }
  />)
  return (
    <section className="relative w-full flex flex-col items-center">
      { parsedAppointments }
    </section>
  )
}
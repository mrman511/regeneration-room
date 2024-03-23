import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faDollar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function AppointmentItem({styles, appointment, setAppointmentData}){
  const appointmentDateTime = new Date(`${appointment.date}T${appointment.time}`);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const appointmentStartTime = appointmentDateTime.toTimeString().slice(0, 5);
  const appointmentEndTime = new Date(appointmentDateTime.getTime() + (appointment.duration * 60 * 1000)).toTimeString().slice(0,5);

  function editAppointment(){
    setAppointmentData(appointment)
  }
  
  return (
    <article className="relative w-full max-w-[320px] my-1 flex h-24 border border- border-primary-light rounded-md">
      <section className="w-[125px] p-2 flex flex-col items-center border-e-2 border-gray-200">
        <h4 className="text-xl">{ appointmentDateTime.toLocaleString('default', { month: 'long' }) }</h4>
        <hr />
        <div className="w-full flex justify-center items-end">
          <h3 className="text-lg mb-0.5 me-2">{ daysOfWeek[appointmentDateTime.getDay()] }</h3>
          <h3 className="text-4xl font-semibold">{ appointmentDateTime.getUTCDate() }</h3>
        </div>
      </section>
      <section className="relative min-h-full flex flex-col ps-3 ms-2 items-center">
        <div className="grow-0">
          <p>{ appointmentStartTime } - { appointmentEndTime }</p>
        </div>
        <div className="relative h-full grow flex items-center">
          <h3><span className="text-4xl font-semibold">{appointment.duration}</span> min.</h3>
        </div>
      </section>
      <section className="absolute right-0 h-full pe-2 py-4 flex flex-col items-center justify-between">
        <button className="hover:pointer-cursor" onClick={ editAppointment }>
          <FontAwesomeIcon className="w-5 h-5" icon={ faPenToSquare } />
        </button>
        <Link href=''>
          <FontAwesomeIcon className="w-5 h-5 text-error" icon={ faDollar } />
        </Link>
      </section>

    </article>
  );
}
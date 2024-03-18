'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function FullestCalendar({styles}){

  return(
    <section className='w-full h-full bg-white rounded-lg'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        // events={events}
        // eventContent={renderEventContent}
      />
    </section>
  );
}
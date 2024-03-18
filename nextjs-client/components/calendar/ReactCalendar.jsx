import Calendar from 'react-calendar'

export default async function ReactCalendar({styles, tileClassName}){

  return (
    <section className='w-full h-full bg-white rounded-lg'>
      <Calendar tileClassName={tileClassName}/>
    </section>
  );
}
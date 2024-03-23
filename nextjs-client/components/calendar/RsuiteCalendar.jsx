'use client'
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Calendar } from 'rsuite'

export default function RsuiteCalendar({styles, cellClassName, select}){

  return (
    <article className='w-full h-auto bg-white rounded-lg'>
      <Calendar 
        bordered
        compact
        onSelect={ select }
      />
    </article>
  );
}
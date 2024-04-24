import Image from 'next/image';

import paymentOptions from '@/public/images/payment-options.png';

export default function Payments({}){

  return (
    <section className='w-full flex flex-col items-center mb-12'>
      <h2 className='text-3xl'>Accepted Payments</h2>
      <p className='text-xl mt-2'>We accept all major credit cards, Interac debit, and cash.</p>
      <div className='relative w-11/12 h-20 max-w-[400px] mt-4'>
        <Image
          src={ paymentOptions }
          alt='We accept all major credit cards, Interac debit, and cash.'
          fill
          objectFit='contain'
          // styles={{ objectFit: 'contain' }}
          sizes='400px'
          placeholder='blur'
          loading='lazy'
        />
      </div>
    </section>
  );
}
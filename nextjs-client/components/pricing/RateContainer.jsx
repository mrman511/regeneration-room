import Image from "next/image";

export default function RateContainer({ i, rateGroup }){
  const { title, sub_title, image_path, rates, note  } = rateGroup;
  let flex = 'md:flex-row'
  flex += (i % 2 == 0) ? '' : '-reverse'
  const image = require(`../../public/images/rates/${image_path}`);


  const rateRows = rates.map((rate, i)=>(
    <tr 
      key={`${title}-row-${rate.title}-${i}`}
      className="text-lg md:text-xl"
    >
      <td className="px-2 pt-3 font-semibold ">{ rate.title }</td>
      <td className="px-2 pt-3">{ rate.rate_text ? rate.rate_text : `$${rate.rate}` }</td>
    </tr>
  ))

  return (
    <article className={['relative w-full my-10 flex flex-col items-stretch', flex].join(' ')}>
      <div className="relative w-11/12 h-72 md:h-[22rem]">
        <Image 
          src={ image }
          alt={ title }
          fill
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, 66vw"
          placeholder="blur"
          loading="lazy"
        />
      </div>

      <div className="relative w-11/12 max-md:py-4 flex flex-col items-center justify-center text-center">
        <h2 className="font-cursive text-5xl md:text-6xl my-1">{ title }</h2>
        { sub_title && <p className="text-xl md:text-2xl">{ sub_title }</p>}
        <table className="my-2 px-4">
          <tbody>
            { rateRows }
          </tbody>
        </table>
        {note && <p>*{ note }</p>}
      </div>
    </article>
  );
}
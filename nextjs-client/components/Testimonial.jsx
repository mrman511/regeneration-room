import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function Testimonial({testimonial, i}){
  const { id, name, text, stars, date } = testimonial;

  const parsedStars = [];
  let count = 0;
  while (count < stars){
    if (( stars-count ) >= 1){
      parsedStars.push(
        <FontAwesomeIcon
          key={ `testimonial-${id}-star-${count}` }
          icon={ faStar }
          className="text-secondary-action"
        />
      );
      count++;
    } else {
      parsedStars.push(
        <FontAwesomeIcon
          key={ `testimonial-${id}-star-${count}` }
          icon={ faStarHalf }
          className="text-secondary-action"
        />
      );
      count = stars;
    }
  }

  return(
    <article className="embla__slide relative w-[300px] h-[500px] mx-4 flex flex-col items-center border-2 border-extra-dark rounded-xl text-center text-lg ">
      <div className="w-full mb-1 border-b-2 border-primary-dark-1/3">
        <h4 className="text-xl font-semibold">{ name }</h4>
      </div>
      <div className="flex items-center mb-2">
        { parsedStars }
      </div>
      <div>
        <p>{ text }</p>
      </div>
    </article>
  )
}
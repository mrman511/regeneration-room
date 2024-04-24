import RateContainer from "./RateContainer";

export default function RatesList({ rateGroups, reverseStart }){
  const parsedRateGroups = rateGroups.map((rateGroup, i)=>(
    <RateContainer 
      key={ `rateGroup-${rateGroup.title}` }
      rateGroup={ rateGroup }
      i={ i }
      reverseStart={ reverseStart }
    />
  ))

  return(
    <section className="w-full py-10 flex flex-col items-center">
      { parsedRateGroups }
    </section>
  );
}
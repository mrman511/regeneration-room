import ExternalVideoComponet from "./YouTubeVideoComponent";
import FileVideo from "./FileVideo";

export default function VideoContainer({  i, path, text}){
  // outside container classes
  let flex = "flex flex-col justify-center items-center"
  flex += (i % 2) === 0 ? ' md:flex-row' : ' md:flex-row-reverse';

  // coloured backgound sizes
  const ribbonColour = (i % 2) === 0 ? 'bg-secondary-action' : 'bg-secondary-trim'

  // video container classes
  let vidSizeClasses=`w-11/12 pb-[${(56.25*(11/12))}%] pt-[51.625%] md:w-8/12 md:pb-[${(56.25*(8/12))}%] md:pt-[37.5%]`;
  
  let VideoComponent
  if (path.slice(0,4) === 'http'){
    VideoComponent = ExternalVideoComponet;
    vidSizeClasses += ''
  } else {
    VideoComponent = FileVideo;
  }
  

  return (
    <article className={ [flex, "relative w-full md:w-11/12 my-12"].join(' ') }>
      <div className={ [ribbonColour, "absolute h-full w-8/12 md:h-[85%] lg:h-[60%] md:w-full"].join(' ') }>
      </div>
      <div className="text-center w-7/12 md:w-4/12 md:px-4 my-3 z-10 text-lg" >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className={ [vidSizeClasses, 'relative h-0 z-20'].join(' ') }>
        <VideoComponent path={ path }/>
      </div>
    </article>
  );
}
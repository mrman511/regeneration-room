import VideoContainer from './VideoContainer';


export default function VideoGroup({}){

  return (
    <section className='relative w-full h-auto flex flex-col items-center my-8'>
      <VideoContainer 
          i={ 0 }
          path={ "https://www.youtube.com/embed/5r2-4EVdMcI" }
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
      <VideoContainer 
          i={ 1 }
          path={ "/videos/EESystemWhiteboard.mp4" }
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
    </section>
  );
}
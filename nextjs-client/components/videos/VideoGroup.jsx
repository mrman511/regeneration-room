import VideoContainer from './VideoContainer';
import BackgroundImage from '../BackgroundImage';

import floral from '@/public/images/floral-bg.png' 


export default function VideoGroup({}){

  return (
    <section className='relative w-full h-auto flex flex-col items-center'>
      <BackgroundImage src={ floral } alt='Background' gradientClasses="" zIndex='z-0'/>
      {/* <BackgroundImage gradientClasses='bg-gradient-to-br from-extra-dark via-primary-dark to-extra-dark opacity-80'/> */}
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
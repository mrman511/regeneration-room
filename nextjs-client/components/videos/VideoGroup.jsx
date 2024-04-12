import YouTubeVideoComponet from '@/components/videos/YouTubeVideoComponent';
import FileVideoPlayer from '@/components/videos/FileVideo';
import VideoContainer from './VideoContainer';


export default function VideoGroup({}){
  const ignore = (
    <article 
          className='relative w-8/12 mt-4 ms-4'
          style={{
            paddingBottom: `${ (56.25*(8/12)) }%` /* 16:9 */,
            paddingTop: 25,
            height: 0
          }}
        >
          <FileVideoPlayer name="EESystemWhiteboard.mp4" />
        </article>
  )

  return (
    <section className='relative w-full h-auto flex flex-col items-center my-8'>
      <VideoContainer 
          i={ 0 }
          path={ "https://www.youtube.com/embed/5r2-4EVdMcI" }
        />
      <VideoContainer 
          i={ 1 }
          path={ "/videos/EESystemWhiteboard.mp4" }
        />
    </section>
  );
}
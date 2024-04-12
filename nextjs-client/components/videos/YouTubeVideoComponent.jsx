'use client'

export default function YouTubeVideoComponet({ path }){

  return (
    <iframe
      src={ path }
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
      frameBorder={ 0 }
    />
  );
}
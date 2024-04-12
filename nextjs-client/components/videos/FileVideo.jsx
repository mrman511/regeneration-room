'use client'

export default function FileVideo({ path }){
  return (
    (
      <video className="absolute top-0" width="100%" height="100%" controls preload="auto">
        <source src={ path } type="video/mp4" />
        This video is not supported by your browser.
      </video>
    )
  );
}
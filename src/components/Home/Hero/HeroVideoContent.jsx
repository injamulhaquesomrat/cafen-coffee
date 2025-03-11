import { useRef, useState } from "react";
import HeroPausePlayBtn from "./HeroPausePlayBtn";

const HeroVideoContent = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  // handle pause and play
  const handlePlayPause = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="relative">
      {/* start:: video */}
      <video
        ref={videoRef}
        className="rounded-lg shadow-lg w-full rounded-t-2xl rounded-b-none border border-cf-coffee relative z-40"
        autoPlay
        loop
        muted
      >
        <source src="/cafen-intro.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag
      </video>
      {/* end:: video */}

      {/* start:: custom pause and playbutton */}
      <HeroPausePlayBtn
        handlePlayPause={handlePlayPause}
        isVideoPlaying={isVideoPlaying}
      />
      {/* end:: custom pause and playbutton */}

      {/* start:: video props container */}
      <div className="hidden md:block blur-sm absolute -top-20 -left-20 z-20">
        <img src="/icons/hero/hero-decorative-01.avif" alt="video prop" />
      </div>
      <div className="hidden md:block blur-sm absolute -top-20 right-1/3 z-30 ">
        <img src="/icons/hero/hero-decorative-04.avif" alt="video prop" />
      </div>
      <div className="hidden md:block blur-sm absolute bottom-1/3 -right-20 z-40">
        <img src="/icons/hero/hero-decorative-02.avif" alt="video prop" />
      </div>
      <div className="hidden md:block absolute top-1/2 -left-6 z-40">
        <img src="/icons/hero/hero-decorative-06.avif" alt="video prop" />
      </div>
      <div className="hidden md:block absolute top-2 -right-10 z-40">
        <img src="/icons/hero/hero-decorative-07.avif" alt="video prop" />
      </div>
      {/* end:: video props container */}
    </div>
  );
};

export default HeroVideoContent;

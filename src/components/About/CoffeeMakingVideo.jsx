import { useRef } from "react";
import { useState } from "react";
import HeroPausePlayBtn from "../Home/Hero/HeroPausePlayBtn";

const CoffeeMakingVideo = () => {
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
        className=" w-full border-t border-primary relative z-40 max-h-[715px] min-h-[300px] object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/assets/videos/about-video.mp4" type="video/mp4" />
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
    </div>
  );
};

export default CoffeeMakingVideo;

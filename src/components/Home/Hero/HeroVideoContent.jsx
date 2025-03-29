import { useRef, useState } from "react";
import HeroPausePlayBtn from "./HeroPausePlayBtn";
import { videoPropItems } from "../../../utils/videoPropItems";

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
      {videoPropItems.map((item) => (
        <div
          key={item?.id}
          className={`hidden md:block blur-sm absolute ${item?.classNames}`}
        >
          <img src={item?.src} alt="video prop" />
        </div>
      ))}
      {/* end:: video props container */}
    </div>
  );
};

export default HeroVideoContent;

import { useState } from "react";
import Marquee from "react-fast-marquee";
import { aboutMarqueeItems } from "../../../utils/aboutMarqueeItems";

const AboutMarquee = () => {
  const [marqueeDirection, setMarqueeDirection] = useState("right");

  const handleCycleComplete = () => {
    // Change direction after completing a cycle
    setMarqueeDirection((prevDirection) =>
      prevDirection === "right" ? "left" : "right"
    );
  };
  return (
    <section className="bg-secondary">
      <Marquee
        direction={marqueeDirection}
        onCycleComplete={handleCycleComplete}
      >
        {aboutMarqueeItems.map((item) => (
          <div key={item.id} className="flex gap-4 items-center py-6 pr-4">
            <img src="/marquee-icon.svg" alt="marquee icon" />
            <p
              className="font-sober text-primary text-xl md:text-2xl"
              key={item.id}
            >
              {item.text}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default AboutMarquee;

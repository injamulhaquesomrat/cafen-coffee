import { useState } from "react";
import Marquee from "react-fast-marquee";
import { brandsMarqueeItems } from "../../utils/brandsMarqueeItems";
import Container from "../shared/Container";

const Brands = () => {
  const [marqueeDirection, setMarqueeDirection] = useState("right");

  const handleCycleComplete = () => {
    // Change direction after completing a cycle
    setMarqueeDirection((prevDirection) =>
      prevDirection === "right" ? "left" : "right"
    );
  };
  return (
    <div className="py-[50px] border-y border-cf-coffee">
      <Container>
        <div className="flex flex-col md:flex-row gap-7 items-center">
          <div className="md:w-2/6 lg:w-1/3 xl:w-2/12">
            <h3 className="text-xl font-nunito text-cf-coffee tracking-tighter leading-tight lg:text-[26px]">
              We are serving top brands coffee
            </h3>
          </div>
          <div className="md:w-4/6 lg:w-2/3 xl:w-10/12">
            <Marquee
              direction={marqueeDirection}
              onCycleComplete={handleCycleComplete}
            >
              {brandsMarqueeItems.map((item) => (
                <div key={item.id} className="flex items-center pr-10 lg:pr-16">
                  <img src={item.src} alt="brand icon" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Brands;

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
    <section className="py-[50px] border-y border-primary bg-foreground">
      <Container>
        <div className="flex flex-col md:flex-row gap-7 items-center">
          {/* start:: section heading */}
          <div className="md:w-1/4">
            <h3 className="text-xl lg:text-[26px] font-sober text-primary">
              We are serving top brands coffee
            </h3>
          </div>
          {/* end:: section heading */}

          {/* start:: brand marquee list */}
          <div className="w-full md:w-4/6 lg:w-2/3 xl:w-10/12">
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
          {/* end:: brand marquee list */}
        </div>
      </Container>
    </section>
  );
};

export default Brands;

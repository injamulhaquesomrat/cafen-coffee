import { GiRoundStar } from "react-icons/gi";

const RenderStars = ({ count }) => {
  return (
    <div className="inline-flex gap-1 text-[#ffc700] items-center">
      {Array.from({ length: count }, (_, index) => (
        <GiRoundStar key={index} className="text-2xl" />
      ))}
    </div>
  );
};

export default RenderStars;

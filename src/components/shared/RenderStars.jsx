import { FaStar } from "react-icons/fa";

const RenderStars = ({ count }) => {
  return (
    <div className="inline-flex gap-1 text-[#ffc700] items-center">
      {Array.from({ length: count }, (_, index) => (
        <FaStar key={index} className="text-lg md:text-xl" />
      ))}
    </div>
  );
};

export default RenderStars;

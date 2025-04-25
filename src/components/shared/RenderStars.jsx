

const RenderStars = ({ count }) => {
  return (
    <div className="inline-flex gap-1 text-[#ffc700] items-center">
      {Array.from({ length: count }, (_, index) => (
        <img
          key={index}
          src="/assets/icons/props/star-one.svg"
          alt="star one"
        />
      ))}
    </div>
  );
};

export default RenderStars;

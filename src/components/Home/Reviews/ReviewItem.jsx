import RenderStars from "../../shared/RenderStars";

const ReviewItem = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center text-cf-coffee overflow-hidden md:w-2/3 mx-auto">
      {/* start:: review carousel item text content */}
      <div className="flex flex-col p-4 md:p-6">
        <div className="flex-1 pb-4 md:pb-6 grid justify-center">
          <div className="pb-6">
            <RenderStars count={5} />
          </div>

          <h4 className="text-xl md:text-3xl font-nunito font-bold pb-2 md:pb-4 tracking-tight">
            {item?.review}
          </h4>
          <p className="line-clamp-2 text-2xl font-medium">{item?.name}</p>
          <p>{item?.role}</p>
        </div>
      </div>
      {/* end:: review carousel item text content */}

      {/* start:: review carousel item image  */}
      <div>
        <img
          className="object-cover w-full h-full aspect-[16/12] md:aspect-[16/10]"
          src={item?.image}
          alt={item?.title}
        />
      </div>
      {/* end:: review carousel item image  */}
    </div>
  );
};

export default ReviewItem;

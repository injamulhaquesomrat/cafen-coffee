import RenderStars from "../../shared/RenderStars";

const ReviewItem = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center text-cf-coffee overflow-hidden md:w-2/3 mx-auto">
      {/* start:: review carousel item text content */}
      <div className="flex flex-col md:p-6">
        <div className="flex-1 pb-4 md:pb-6 grid justify-center">
          <div className="pb-4">
            <RenderStars count={5} />
          </div>

          <h4 className="text-xl xs:text-[22px] md:text-[26px] lg:text-[32px] font-sober pb-4 leading-normal">
            {item?.review}
          </h4>
          <p className="line-clamp-4 text-[22px] md:text-2xl font-medium font-sober">
            {item?.name}
          </p>
          <p>{item?.role}</p>
        </div>
      </div>
      {/* end:: review carousel item text content */}

      {/* start:: review carousel item image  */}
      {/* <div>
        <img
          className="object-cover w-full h-full aspect-[16/12] md:aspect-[16/10]"
          src={item?.image}
          alt={item?.title}
        />
      </div> */}
      {/* end:: review carousel item image  */}
    </div>
  );
};

export default ReviewItem;

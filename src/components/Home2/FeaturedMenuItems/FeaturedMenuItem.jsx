const FeaturedMenuItem = ({ category, img, subCategories }) => {
  return (
    <div className="p-[30px] xl:p-[50px] bg-background border border-primary rounded-2xl overflow-hidden flex flex-col gap-16">
      {/* start:: featured item image container */}
      <div className="flex flex-col items-center gap-[25px]">
        <div className="flex justify-center items-center">
          <img
            className="rounded-full h-[150px] w-[150px] border border-primary"
            src={img}
            alt={category}
          />
        </div>
        <h4 className="text-3xl text-primary font-sober   text-center">
          {category}
        </h4>
      </div>
      {/* end:: featured item image container */}

      {/* start:: featured item price list */}
      <div className="grid gap-8">
        {subCategories?.map((item) => (
          <>
            <div className="flex justify-between items-end gap-8 border-b border-primary pb-5">
              <div className="grid gap-2.5">
                <h6 className="text-xl md:text-2xl text-primary  ">
                  {item?.name}
                </h6>
                <p className="text-sm md:text-base text-primary">
                  {item?.details}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-base text-primary">
                  {item?.price}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* end:: featured item price list */}
    </div>
  );
};

export default FeaturedMenuItem;

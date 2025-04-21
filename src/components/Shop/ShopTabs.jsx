const ShopTabs = ({ shopTabItems, selectedCategory, handleCategoryChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-2.5 md:gap-5 mt-5">
      {shopTabItems &&
        shopTabItems.length > 0 &&
        shopTabItems.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => handleCategoryChange(item.name.toLowerCase())}
            className={`inline-flex w-full sm:w-fit justify-center border border-cf-coffee px-[30px] sm:px-10 py-2.5 rounded-full bg-cf-light-yellow text-cf-coffee cursor-pointer ${
              selectedCategory === item.name.toLowerCase() && "bg-cf-yellow"
            } hover:bg-cf-yellow transition duration-300 ease-in-out`}
          >
            {item.name}
          </button>
        ))}
    </div>
  );
};

export default ShopTabs;

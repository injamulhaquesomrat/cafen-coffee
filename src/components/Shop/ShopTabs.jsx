const ShopTabs = ({ shopTabItems, selectedCategory, handleCategoryChange }) => {
  return (
    <>
      {shopTabItems &&
        shopTabItems.length > 0 &&
        shopTabItems.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => handleCategoryChange(item.name.toLowerCase())}
            className={`flex justify-center border border-cf-coffee px-[30px] sm:px-10 py-2.5 rounded-full bg-cf-light-yellow text-cf-coffee font-nunito font-bold tracking-tighter cursor-pointer ${
              selectedCategory === item.name.toLowerCase() && "bg-cf-yellow"
            } hover:bg-cf-yellow transition duration-300 ease-in-out`}
          >
            {item.name}
          </button>
        ))}
    </>
  );
};

export default ShopTabs;

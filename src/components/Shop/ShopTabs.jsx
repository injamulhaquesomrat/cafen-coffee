import { cn } from "../../lib/utils";

const ShopTabs = ({ shopTabItems, selectedCategory, handleCategoryChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-2.5 md:gap-5 mt-5">
      {shopTabItems &&
        shopTabItems.length > 0 &&
        shopTabItems.map((item) => (
          <button
            type="button"
            key={item?.id}
            onClick={() => handleCategoryChange(item?.name.toLowerCase())}
            className={cn(
              `inline-flex w-full sm:w-fit justify-center border border-primary px-[30px] sm:px-10 py-2.5 rounded-full bg-secondary-foreground text-primary cursor-pointer hover:bg-secondary transition duration-300 ease-in-out ${
                selectedCategory === item?.name.toLowerCase() && "bg-secondary"
              }`
            )}
          >
            {item?.name}
          </button>
        ))}
    </div>
  );
};

export default ShopTabs;

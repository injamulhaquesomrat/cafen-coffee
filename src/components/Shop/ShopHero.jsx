import ShopTabs from "./ShopTabs";

const shopTabItems = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Coffee",
  },
  {
    id: 3,
    name: "Tea",
  },
  {
    id: 4,
    name: "Dessert",
  },
];

const ShopHero = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <div className="py-[80px] px-5 bg-cf-light-yellow border border-cf-coffee rounded-lg shadow-lg mt-5">
      <h1 className="text-[50px] text-center md:text-7xl leading-tighter tracking-tighter font-nunito font-bold text-cf-coffee">
        Shop
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-6 mt-5 lg:mt-8 flex-wrap">
        <ShopTabs
          shopTabItems={shopTabItems}
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
    </div>
  );
};

export default ShopHero;

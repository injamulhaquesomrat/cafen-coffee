import PageHero from "../shared/PageHero";
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
    <>
      <PageHero
        pageTitle={"Shop"}
        subContent={
          <ShopTabs
            shopTabItems={shopTabItems}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />
        }
      />
    </>
  );
};

export default ShopHero;

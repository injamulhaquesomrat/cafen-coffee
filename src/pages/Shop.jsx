import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import ShopHero from "../components/Shop/ShopHero";
import { productItems } from "../utils/productItems";
import ProductItem from "../components/Home/Products/ProductItem";
import { useState } from "react";

const Shop = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("all");


  const filteredItems = selectedCategory === "all"
  ? productItems // Replace with your actual items array
  : productItems.filter((item) => item.category === selectedCategory);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Container>
          {/* start:: shop hero section */}
          <ShopHero
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />
          {/* end:: shop hero section */}

          {/* start:: products container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-[60px] sm:py-20 lg:py-[100px]">
            {filteredItems.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}
          </div>
          {/* end:: products container */}
        </Container>
      </div>
    </>
  );
};

export default Shop;

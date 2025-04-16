import ShopHero from "./ShopHero";
import { useState } from "react";
import Container from "../shared/Container";
import ProductItem from "../Home/Products/ProductItem";
import { productItems } from "../../utils/productItems";
import Pagination from "../shared/Pagination";

const ShopContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredItems =
    selectedCategory === "all"
      ? productItems // Replace with your actual items array
      : productItems.filter((item) => item.category === selectedCategory);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset pagination
  };

  return (
    <Container>
      {/* start:: shop hero section */}
      <ShopHero
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      {/* end:: shop hero section */}

      {/* start:: products container */}
      <div className="py-[60px] sm:py-20 lg:py-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {currentItems.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>

        {/* start:: pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
        {/* end:: pagination */}
      </div>

      {/* end:: products container */}
    </Container>
  );
};

export default ShopContainer;

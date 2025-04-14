import { Helmet } from "react-helmet";
import Container from "../components/shared/Container";
import ShopHero from "../components/Shop/ShopHero";
import { productItems } from "../utils/productItems";
import ProductItem from "../components/Home/Products/ProductItem";
import { useState } from "react";
import ShopPagination from "../components/Shop/ShopPagination";
import GoToTop from "../components/shared/GoToTop";

const Shop = () => {
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop | Cafen ☕</title>
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
          <div className="py-[60px] sm:py-20 lg:py-[100px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {currentItems.map((item, index) => (
                <ProductItem key={index} item={item} />
              ))}
            </div>

            {/* start:: pagination */}
            <ShopPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
            {/* end:: pagination */}
          </div>

          {/* end:: products container */}
        </Container>
        <GoToTop />
      </div>
    </>
  );
};

export default Shop;

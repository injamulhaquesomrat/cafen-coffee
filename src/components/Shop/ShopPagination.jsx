import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ShopPagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-7 pt-10 w-full md:w-10/12 lg:w-8/12 mx-auto">
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`flex items-center justify-center gap-1.5 px-[30px] md:px-10 py-2.5 sm:py-5 text-cf-yellow bg-cf-coffee rounded-full font-nunito font-bold cursor-pointer w-full border border-cf-coffee hover:bg-cf-yellow hover:text-cf-coffee transition duration-300 ease-in-out ${
          currentPage === 1 && "invisible"
        }`}
      >
        <FaChevronLeft size={12} /> Previous
      </button>
      <div className="text-cf-coffee text-nowrap font-nunito font-medium">
        {currentPage} / {totalPages}
      </div>
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center gap-1.5 px-[30px] md:px-10 py-2.5 sm:py-5 text-cf-yellow bg-cf-coffee rounded-full font-nunito font-bold cursor-pointer w-full  border border-cf-coffee hover:bg-cf-yellow hover:text-cf-coffee transition duration-300 ease-in-out ${
          currentPage === totalPages && "invisible"
        }`}
      >
        Next <FaChevronRight size={12} />
      </button>
    </div>
  );
};

export default ShopPagination;

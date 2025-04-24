import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  // handle previous button
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // handle next button
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
        className={`flex items-center justify-center gap-1.5 px-[30px] md:px-10 py-2.5 sm:py-5 text-secondary bg-primary rounded-full cursor-pointer w-full border border-primary hover:bg-secondary hover:text-primary transition duration-300 ease-in-out ${
          currentPage === 1 && "invisible"
        }`}
      >
        <FaChevronLeft className="mt-0.5" size={10} /> Previous
      </button>
      <div className="text-primary text-nowrap font-medium">
        {currentPage} / {totalPages}
      </div>
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center gap-1.5 px-[30px] md:px-10 py-2.5 sm:py-5 text-secondary bg-primary rounded-full cursor-pointer w-full  border border-primary hover:bg-secondary hover:text-primary transition duration-300 ease-in-out ${
          currentPage === totalPages && "invisible"
        }`}
      >
        Next <FaChevronRight className="mt-0.5" size={10} />
      </button>
    </div>
  );
};

export default Pagination;

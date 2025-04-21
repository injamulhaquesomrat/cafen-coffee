import Specs from "../Home2/Specs/Specs";
import BookATableForm from "./BookATableForm";

const BookATableContainer = () => {
  return (
    <div className="py-[60px] md:py-20 lg:py-[100px]">
      <div className="max-w-[940px] mx-auto pb-20 md:pb-[100px] lg:pb-[150px]">
        <BookATableForm />
      </div>
      <Specs />
    </div>
  );
};

export default BookATableContainer;

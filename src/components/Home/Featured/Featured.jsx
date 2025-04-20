import { Link } from "react-router-dom";
import { featuredItems } from "../../../utils/featuredItems";
import Container from "../../shared/Container";
import PrimaryButton from "../../shared/PrimaryButton";
import MenuList from "../../shared/MenuList";

const Featured = () => {
  return (
    <section>
      <Container>
        <div className="my-16 md:my-28 bg-cf-light-yellow border border-cf-coffee rounded-2xl p-5 md:p-10 xl:p-[100px]">
          {/* start:: section heading */}
          <div className="flex flex-col gap-1.5 items-center justify-center mb-10 lg:mb-[60px] xl:mb-[70px]">
            <img src="/feature-icon.svg" alt="feature icon" />
            <h1 className="text-[36px] sm:text-[40px] md:text-[42px] lg:text-5xl xl:text-[55px] font-sober text-cf-coffee text-center">
              Featured menu items
            </h1>
          </div>
          {/* end:: section heading */}

          {/* start::menu list */}
          <MenuList menuItems={featuredItems} />
          {/* end::menu list */}

          {/* start:: button container */}
          <div className="flex items-center justify-center mt-10 xl:mt-[90px">
            <Link to="/menu">
              <PrimaryButton buttonText={"View full menu"} />
            </Link>
          </div>
          {/* end:: button container */}
        </div>
      </Container>
    </section>
  );
};

export default Featured;

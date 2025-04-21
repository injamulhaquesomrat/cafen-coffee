import { Link } from "react-router-dom";
import { featuredItems } from "../../../utils/featuredItems";
import Container from "../../shared/Container";
import PrimaryButton from "../../shared/PrimaryButton";
import MenuList from "../../shared/MenuList";
import SectionTitle from "../../shared/SectionTitle";

const Featured = () => {
  return (
    <section className="bg-cf-light-white py-16 md:py-28">
      <Container>
        <div className="bg-cf-light-yellow border border-cf-coffee rounded-2xl p-5 md:p-10 xl:p-[100px]">
          {/* start:: section heading */}
          <div className="flex flex-col gap-1.5 items-center justify-center mb-10 lg:mb-[60px] xl:mb-[70px] text-center">
            <img src="/feature-icon.svg" alt="feature icon" />
            <SectionTitle title="Featured menu items" />
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

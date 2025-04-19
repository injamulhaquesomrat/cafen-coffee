import { Link } from "react-router-dom";
import { featuredItems } from "../../../utils/featuredItems";
import Container from "../../shared/Container";
import PrimaryButton from "../../shared/PrimaryButton";
import MenuList from "../../shared/MenuList";

const Featured = () => {
  return (
    <section>
      <Container>
        <div className="my-16 md:my-28 bg-cf-light-yellow border border-cf-coffee rounded-2xl p-10">
          {/* start:: section heading */}
          <div className="flex flex-col gap-5 items-center justify-center">
            <img src="/feature-icon.svg" alt="feature icon" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-sober font-bold text-cf-coffee text-center">
              Featured menu items
            </h1>
          </div>
          {/* end:: section heading */}

          {/* start::menu list */}
          <MenuList menuItems={featuredItems} />
          {/* end::menu list */}

          {/* start:: button container */}
          <div className="flex items-center justify-center">
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

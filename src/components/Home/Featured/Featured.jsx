import { Link } from "react-router-dom";
import { featuredItems } from "../../../utils/featuredItems";
import Container from "../../shared/Container";

const Featured = () => {
  return (
    <section>
      <Container>
        <div className="my-16 md:my-28 bg-cf-light-yellow border border-cf-coffee rounded-2xl p-10">
          <div className="flex flex-col gap-5 items-center justify-center">
            <img src="/feature-icon.svg" alt="feature icon" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-nunito font-bold text-cf-coffee text-center">
              Featured menu items
            </h1>
          </div>

          {/* start::menu list */}
          <ul className="grid grid-cols-2 justify-between py-10 gap-y-6 gap-x-16">
            {featuredItems.map((item, index) => (
              <li
                className="border-b border-cf-light-white pb-5 col-span-2 lg:col-span-1"
                key={index}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-5 w-full">
                  <div className="relative">
                    {item.new && (
                      <span className="text-cf-coffee leading-relaxed absolute left-1/2 -top-2 px-4 py-.5 border border-cf-coffee rounded-full bg-cf-yellow -translate-x-1/2">
                        New
                      </span>
                    )}
                    <img
                      className="aspect-square h-24 w-24 rounded-full object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-5 flex-1 justify-between items-start text-cf-coffee">
                    <div className="space-y-1">
                      <h6 className="text-xl font-nunito font-bold tracking-tight">
                        {item.name}
                      </h6>
                      <p>{item.description}</p>
                    </div>
                    <div className="font-nunito font-bold">{item.price}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* end::menu list */}

          <div className="flex items-center justify-center">
            {/* start:: button */}
            <Link to="/menu">
              <button className="cf-btn text-cf-coffee relative overflow-hidden group mb-10 z-10">
                <img
                  className="absolute top-0 -left-8 group-hover:-left-2 transition-all duration-500"
                  src="/button-vector-01.svg"
                  alt="button hover"
                />
                View full menu
                <img
                  className="absolute -bottom-2 -right-10 group-hover:-right-5 transition-all duration-500"
                  src="/button-vector-02.svg"
                  alt="button hover"
                />
              </button>
            </Link>
            {/* end:: button */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Featured;

import Container from "../shared/Container";
import ValuesAccordion from "./ValuesAccordion";

const OurValues = () => {
  return (
    <section className="cf-section bg-foreground">
      <Container>
        {/* start:: section title */}
        <h2 className="text-[42px] xs:text-[50px] md:text-[54px] lg:text-[56px] xl:text-6xl font-sober  text-primary font-medium text-center">
          Our values
        </h2>
        {/* end:: section title */}

        {/* start:: our values container */}
        <div className="flex flex-col md:flex-row gap-10 xl:gap-20 mt-[30px] xs:mt-10 lg:mt-[60px] xl:mt-[70px]">
          {/* start:: our values image container */}
          <div className="w-[45%]">
            <img
              className="rounded-2xl border border-primary"
              src="/assets/images/about/about-values.avif"
              alt="over values banner image"
            />
          </div>
          {/* end:: our values image container */}

          {/* start:: our values accordion container */}
          <ValuesAccordion accordionItems={accordionItems} />
          {/* end:: our values accordion container */}
        </div>
        {/* end:: our values container */}
      </Container>
    </section>
  );
};

export default OurValues;

// our values accordion items
const accordionItems = [
  {
    id: 1,
    title: "Quality",
    content:
      "We never compromise on the quality of our ingredients or our service.",
  },
  {
    id: 2,
    title: "Community",
    content:
      "We strive to be a positive force in our community, supporting local events and initiatives.",
  },
  {
    id: 3,
    title: "Sustainability",
    content:
      "We are committed to eco-friendly practices, from our biodegradable packaging to our efforts to reduce waste.",
  },
  {
    id: 4,
    title: "Innovation",
    content:
      "We continually explore new ways to enhance our menu and improve the café experience.",
  },
];

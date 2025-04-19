import ValuesAccordion from "./ValuesAccordion";

const OurValues = () => {
  return (
    <section className="py-20 md:py-[100px] lg:py-[10\20px] ">
      {/* start:: section title */}
      <h2 className="text-[42px] sm:text-[50px] md:text-[54px] lg:text-6xl font-sober  text-cf-coffee font-medium text-center">
        Our values
      </h2>
      {/* end:: section title */}

      {/* start:: our values container */}
      <div className="flex flex-col md:flex-row gap-10 lg:gap-20 mt-[30px] md:mt-10 lg:mt-[60px]">
        {/* start:: our values image container */}
        <div>
          <img
            className="rounded-2xl border border-cf-coffee"
            src="https://cdn.prod.website-files.com/66b98cdd4dab60f19c8c1440/66c6bfc3e1cf54b7acae136c_value-image.avif"
            alt="over values banner image"
          />
        </div>
        {/* end:: our values image container */}

        {/* start:: our values accordion container */}
        <ValuesAccordion accordionItems={accordionItems} />
        {/* end:: our values accordion container */}
      </div>
      {/* end:: our values container */}
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

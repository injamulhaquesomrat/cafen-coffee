import PrimaryButton from "../../shared/PrimaryButton";

const EventContent = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-8 pt-20">
      {/* start::event details */}
      <div className="text-cf-coffee  md:w-7/12 overflow-y-scroll md:h-screen no-scrollbar">
        <p className="pb-5">
          Immerse yourself in the world of specialty coffee, where each sip
          tells a story of origin, craftsmanship, and passion. Begin your
          journey with an introduction to the art of coffee, exploring the rich
          history and diverse regions that produce some of the world&apos;s
          finest beans.
        </p>
        <blockquote className="mb-5 p-5 rounded-lg bg-cf-coffee text-cf-yellow text-xl text-center">
          As the tasting begins, you&apos;ll be guided through a curated
          selection of hand-picked coffee varieties, each representing distinct
          flavor profiles. From the bright and fruity notes of an Ethiopian
          Yirgacheffe to the deep, chocolatey richness of a Colombian
          single-origin, every cup offers a unique experience.
        </blockquote>
        <ul className="list-disc pl-5 gap-2.5 flex flex-col">
          <li>
            Ethiopian Yirgacheffe: Bright, floral, and fruity with a tea-like
            body.
          </li>
          <li>
            Colombian Single-Origin: Chocolatey, rich, with hints of caramel.
          </li>
          <li>Guatemalan Antigua: Balanced with notes of cocoa and spice.</li>
          <li>Kenyan: Bold acidity with citrus and berry undertones.</li>
        </ul>
      </div>
      {/* end::event details */}

      {/* start::event register */}
      <div className=" flex flex-col h-fit md:w-5/12 gap-5 p-5 border border-cf-coffee rounded-xl text-cf-coffee bg-cf-foreground
      sticky top-20">
        <h6 className="text-3xl font-sober">Coffee art workshop</h6>
        <p>
          This workshop is the perfect way to enhance your coffee-making skills.
        </p>
        <div className="flex flex-col gap-2.5 ">
          <span>Location : Paris, France</span>
          <span>Date : August 19, 2024</span>
          <span>Time : 8:00 PM - 10:00 AM</span>
        </div>
        <div className="-mb-10">
          <PrimaryButton buttonText={"Register to event"} />
        </div>
      </div>
      {/* end::event register */}
    </div>
  );
};

export default EventContent;

import PageUtilityLinks from "./PageUtilityLinks";
import WebsiteInformation from "./WebsiteInformation";

const PageInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-[35px]">
      {/* start:: website information */}
      <WebsiteInformation />
      {/* start:: website information */}

      {/* start:: page & utility links */}
      <PageUtilityLinks />
      {/* end:: page & utility liinks */}
    </div>
  );
};

export default PageInfo;

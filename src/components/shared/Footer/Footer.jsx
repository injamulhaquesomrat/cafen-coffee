import Container from "../Container";
import Newsletter from "./Newsletter";
import PageInfo from "./PageInfo";

const Footer = () => {
  return (
    <div className="pt-[60px] pb-[30px] xs:pt-10 lg:pt-[100px] md:pb-10 lg:pb-20 xl:pt-[150px] bg-cf-foreground border-t border-cf-coffee">
      <Container>
        <Newsletter />
        <PageInfo />
      </Container>
    </div>
  );
};

export default Footer;

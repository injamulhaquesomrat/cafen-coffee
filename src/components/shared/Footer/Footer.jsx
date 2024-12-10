import Container from "../Container";
import Newsletter from "./Newsletter";
import PageInfo from "./PageInfo";

const Footer = () => {
  return (
    <div className="py-10 md:py-14 bg-cf-light-yellow">
      <Container>
        <Newsletter />
        <PageInfo />
      </Container>
    </div>
  );
};

export default Footer;

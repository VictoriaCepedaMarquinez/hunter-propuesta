import Carousel from "../components/Carousel";
import SectionPropuesta from "../components/SectionPropuesta";
import SectionUstedes from "../components/SectionUstedes";
import FindUsComponent from "../components/FindUsComponent";
import FooterComponent from "../components/FooterComponent";

function Home() {
  return (
    <>
      <div className="bg-noche">
        <Carousel />
        <SectionPropuesta />
        <SectionUstedes />
        <FindUsComponent/>
        <FooterComponent/>
      </div>
    </>
  );
}

export default Home;

import Hero from "../Hero/Hero";
import Highlights from "../Highlights/Highlights";
import Testimonials from "../Testimonials/Testimonials";

const Home = ({handleOpenBookTable}) => {
  return (
    <>
      <Hero handleOpenBookTable={handleOpenBookTable}/>
      <Highlights />
      <Testimonials />
    </>
  );
};
export default Home;

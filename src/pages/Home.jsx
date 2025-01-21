import FormationCard from "../components/FormationCard";
import Formations from "../components/Formations";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Hero/>
      <Formations/>
      <FormationCard/>
    </div>
  );
};

export default Home;

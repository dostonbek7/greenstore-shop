import Card from "../components/Card";
import Category from "../components/Category";
import Customers from "../components/Customers";
import Hero from "../components/Hero";
import Plants from "../components/Plants";
import Story from "../components/Story";

function Home() {
  return (
    <>
      <Hero />
      <Plants/>
      <Story/>
      <Customers/>
      <Card/>
      <Category/>
    </>
  );
}

export default Home;

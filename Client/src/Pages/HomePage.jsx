import { useState } from "react";
import { IoRestaurant } from "react-icons/io5";
import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="LandingPage flex flex-col gap-4 p-8 w-full bg-[#16a085] h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default HomePage;

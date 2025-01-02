// import Image from "next/image";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
    </>
  );
}

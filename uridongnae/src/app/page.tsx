import Image from "next/image";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import SecondSection from "./components/SecondSection";
import CarouselPosts from "./components/CarouselPosts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <h1>
      <Header />
      <MainSection />
      {/* <CarouselPosts /> */}
      <SecondSection />
      <Footer />
    </h1>
  );
}

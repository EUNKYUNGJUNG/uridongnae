import Image from "next/image";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import SecondSection from "./components/SecondSection";
import CarouselPosts from "./components/CarouselPosts";
import Footer from "./components/Footer";
import ThirdSection from "./components/ThirdSection";
import ChannelSection from "./components/ChannelSection";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      {/* <CarouselPosts /> */}
      <SecondSection />
      <ThirdSection />
      <ChannelSection />
      <Footer />
    </div>
  );
}

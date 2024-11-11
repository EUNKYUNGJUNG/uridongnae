"use client";
import Image from "next/image";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import SecondSection from "./components/SecondSection";
import CarouselPosts from "./components/CarouselPosts";
import Footer from "./components/Footer";
import ThirdSection from "./components/ThirdSection";
import ChannelSection from "./components/ChannelSection";
import { useEffect } from "react";
import ChannelTalk from "./hook/ChannelTalk";
import TalkLayout from "./components/TalkLayout";

export default function Home() {
  useEffect(() => {
    const CT = new ChannelTalk();

    // 먼저 스크립트를 로드한 후 ChannelIO가 초기화되는지 확인
    CT.loadScript();

    const checkChannelIOInitialized = () => {
      if (window.ChannelIO) {
        console.log("ChannelIO is initialized:", window.ChannelIO);
        CT.boot({
          pluginKey: "bcbc3420-54f3-4e93-9cfc-111fd4cd4818",
        });
      } else {
        console.log("ChannelIO is not ready yet.");
      }
    };

    // 스크립트 로드 후에 실행되도록 delay를 주는 방식
    setTimeout(checkChannelIOInitialized, 1000); // 1초 후에 확인

    // for unmount
    return () => {
      CT.shutdown();
    };
  }, []);

  return (
    <div>
      <Header />
      <MainSection />
      <SecondSection />
      <ThirdSection />
      <ChannelSection />
      {/* <TalkLayout /> */}
      <Footer />
    </div>
  );
}

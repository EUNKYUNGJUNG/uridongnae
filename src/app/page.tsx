"use client";
import Image from "next/image";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import SecondSection from "../components/SecondSection";
import CarouselPosts from "../components/CarouselPosts";
import Footer from "../components/Footer";
import ThirdSection from "../components/ThirdSection";
import ChannelSection from "../components/ChannelSection";
import { useEffect, useState, useRef } from "react";
import ChannelTalk from "./hook/ChannelTalk";
import TalkLayout from "../components/TalkLayout";
import useDisableBodyScroll from "@/components/ControlScroll";

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
  const [isChecked, setIsChecked] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleCheckboxChange = (value: boolean) => {
    setIsChecked(value);
  };

  useDisableBodyScroll(isModalOpen);

  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const scrollToThirdSection = () => {
    if (thirdSectionRef.current) {
      const offsetTop = thirdSectionRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop - 80, // Header 높이만큼 보정
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Header />
      <MainSection scrollToThirdSection={scrollToThirdSection} />
      <SecondSection />
      <div ref={thirdSectionRef}>
        <ThirdSection
          isModalOpen={isModalOpen}
          isChecked={isChecked}
          closeModal={closeModal}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
      {/* <ChannelSection /> */}
      {/* <TalkLayout /> */}
      <Footer />
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            zIndex: 100,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 방지
          >
            <div style={{ marginBottom: 30 }}>
              <p>접수가 잘 되었습니다. 🥰 </p>
              <p>카카오톡 및 문자로 알려드릴게요 🫶🏻 </p>
            </div>
            <button
              style={{
                padding: 10,
                backgroundColor: "#2F88FC",
                borderRadius: 8,
                color: "#fff",
              }}
              onClick={closeModal}
            >
              확인완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

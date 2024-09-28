"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useMediaQuery from "../hook/useMediaQuery";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)"); // 모바일 감지

  const handleUrl = () => {
    router.push("/call");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
        height: isMobile ? 80 : 120,
        display: "flex",
        alignItems: "center",
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: isScrolled ? "white" : "transparent",
        borderBottom: "0.5px solid #fff",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Title Text */}
      <div
        style={{
          fontSize: isMobile ? 24 : 34, // 모바일일 경우 글씨 크기 조정
          color: isScrolled ? "black" : "white",
          transition: "color 0.3s ease",
        }}
      >
        우리동네 부동산
      </div>

      {/* Button Text */}
      <div
        style={{
          fontSize: isMobile ? 18 : 24, // 모바일일 경우 글씨 크기 조정
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isScrolled ? "black" : "white",
        }}
      >
        <Image
          src="/images/call.png"
          alt="인스타그램"
          width={isMobile ? 30 : 50} // 원하는 너비
          height={isMobile ? 30 : 50} // 원하는 높이
          style={{ marginRight: 10 }}
        />
        1833-9883
      </div>
    </div>
  );
}

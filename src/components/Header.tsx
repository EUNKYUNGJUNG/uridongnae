"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image, { ImageLoader } from "next/image";
import useMediaQuery from "../app/hook/useMediaQuery";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)"); // 모바일 감지
  const imageLoader: ImageLoader = ({ src, width, quality }: any) => {
    return `https://uridongnae.com/${src}?w=${width || 200}&q=${quality || 75}`;
  };
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
        backgroundColor: "#347EBD",
        borderBottom: "0.5px solid #fff",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Title Text */}
      <div
        style={{
          fontSize: isMobile ? 18 : 34, // 모바일일 경우 글씨 크기 조정
          color: isScrolled ? "#fff" : "white",
          transition: "color 0.3s ease",
        }}
      >
        우리동네부동산
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
        <a
          href="tel:1833-9883"
          style={{
            fontSize: isMobile ? 18 : 24, // 모바일일 경우 글씨 크기 조정
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isScrolled ? "#fff" : "white",
            textDecoration: "none", // 링크의 밑줄 제거
          }}
        >
          {/* <Image
            loader={imageLoader}
            src="/images/call.png"
            alt="images_call"
            width={isMobile ? 30 : 50} // 원하는 너비
            height={isMobile ? 30 : 50} // 원하는 높이
            style={{ marginRight: 10 }}
          /> */}
          1833 - 9883
        </a>
      </div>
    </div>
  );
}

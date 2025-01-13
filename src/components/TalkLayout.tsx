"use client";
import useMediaQuery from "../app/hook/useMediaQuery";
import { Post } from "./CarouselPosts";
import Image, { ImageLoader } from "next/image";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageLoader: ImageLoader = ({ src, width, quality }: any) => {
    return `https://uridongnae.com/${src}?w=${width || 200}&q=${quality || 75}`;
  };
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 10,
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
        overflow: "visible",
        background: "transparent",
        bottom: 71,
      }}
    >
      <div
        style={{
          height: 80,
          width: "100%",
          backgroundColor: "#093876",
          color: "white",
          padding: 18,
          fontSize: 25,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          궁금한 점이 있으신가요? 톡톡 서비스를 통해 후회 없는 서비스를
          받아보세요
          <Image
            loader={imageLoader}
            src="/images/arrow.png"
            alt="인스타그램"
            width={isMobile ? 35 : 50}
            height={20} // 원하는 높이
            style={{ marginLeft: 20 }}
          />
        </div>
      </div>
    </div>
  );
}

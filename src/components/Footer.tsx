"use client";
import useMediaQuery from "../app/hook/useMediaQuery";
import { Post } from "./CarouselPosts";
import Image from "next/image";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: isMobile ? "100%" : 151,
        backgroundColor: "#347EBD",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          lineHeight: 1,
          fontSize: isMobile ? 24 : 30,
          marginBottom: isMobile ? 10 : 0,
        }}
      >
        <span>URI_DONGNAE</span>
        <span>realestate</span>
      </div>
      <div
        style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            color: "white",
            paddingLeft: isMobile ? 0 : 15,
            width: 300,
            fontSize: 12,
          }}
        >
          Copyright © 2024 우리동네부동산
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            color: "white",
            paddingLeft: isMobile ? 0 : 15,
            width: 300,
            fontSize: 12,
          }}
        >
          <span>우리동네부동산공인중개사사무소</span>
          <span>대표 : 송유진</span>
          <span>사업자등록번호 :731-73-00597</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            color: "white",
            paddingLeft: isMobile ? 0 : 15,
            width: 300,
            fontSize: 12,
          }}
        >
          <span>주소 : </span>
          <span>인천광역시 연수구 인천타워대로 365 상가C동 206호</span>
          <span>email : uri_dongnae@naver.com</span>
        </div>
      </div>
    </div>
  );
}

import { Post } from "./CarouselPosts";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        height: 160,
        backgroundColor: "blue",
        justifyContent: "space-between",
        padding: 15,
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          lineHeight: 1,
          fontSize: 34,
        }}
      >
        <span>URI_DONGNAE</span>
        <span>realestate</span>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            color: "white",
            paddingLeft: 15,
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
            paddingLeft: 15,
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
            paddingLeft: 15,
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

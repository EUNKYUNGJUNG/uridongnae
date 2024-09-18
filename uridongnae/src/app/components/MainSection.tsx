"use client";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export type Post = {
  path: string; // 포스트의 고유 경로
  title: string; // 포스트 제목
  excerpt: string; // 포스트 요약
  image: string; // 포스트에 사용할 이미지 URL
  // date: string; // 포스트 날짜
};
const posts: Post[] = [
  {
    path: "https://www.naver.com/",
    title: "First Post",
    excerpt: "This is a summary of the first post.",
    image: "/images/songdo_night_view.jpg",
    // date: "2024-09-01",
  },
  {
    path: "/post2",
    title: "Second Post",
    excerpt: "This is a summary of the second post.",
    image: "/images/songdo_night_view.jpg",
    // date: "2024-09-05",
  },
  {
    path: "/post3",
    title: "Second Post",
    excerpt: "This is a summary of the second post.",
    image: "/images/songdo_night_view.jpg",
    // date: "2024-09-05",
  },
  // {
  //   path: "/post4",
  //   title: "Second Post",
  //   excerpt: "This is a summary of the second post.",
  //   image: "/images/carousel_logo.png",
  //   // date: "2024-09-05",
  // },
  // ... 더 많은 포스트 객체들
];

export default function MainSection() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 검정색 반투명 레이어
            zIndex: 1, // 이미지보다 위에 배치
          }}
        ></div>
        <MultiCarousel>
          {posts.map((post) => (
            <PostCard key={post.path} post={post} />
          ))}
        </MultiCarousel>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <div
          className="text-container"
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "6em",
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.8))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: 0.8,
              marginBottom: -110,
              zIndex: 0,
              position: "relative",
            }}
          >
            송도
          </div>
          <div
            style={{
              zIndex: 5,
              position: "relative",
              marginTop: "20px",
            }}
          >
            {`언제나`}
            <span style={{ color: "#2F88FC" }}>{`우리동네`}</span>
            {`를 책임지는`}
          </div>
          <div>{`감성 부동산`}</div>
          <div>
            <span style={{ color: "#2F88FC" }}>{`우리동네 부동산`}</span>
            {`입니다.`}
          </div>
        </div>
      </div>

      {/* CSS for the animations */}
      <style jsx global>{`
        @keyframes slideUp {
          0% {
            transform: translateY(20%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .text-container {
          animation: slideUp 2s ease-out;
        }
      `}</style>
    </div>
  );
}

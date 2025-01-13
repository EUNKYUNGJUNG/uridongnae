// "use client";
// import useMediaQuery from "../hook/useMediaQuery";
// import MultiCarousel from "./MultiCarousel";
// import PostCard from "./PostCard";

// export type Post = {
//   path: string; // 포스트의 고유 경로
//   // title: string; // 포스트 제목
//   // excerpt: string; // 포스트 요약
//   image: string; // 포스트에 사용할 이미지 URL
//   // date: string; // 포스트 날짜
// };
// const posts: Post[] = [
//   {
//     path: "https://www.naver.com/",
//     // title: "First Post",
//     // excerpt: "This is a summary of the first post.",
//     image: "/images/incheon_songdo0.jpg",
//     // date: "2024-09-01",
//   },
//   {
//     path: "/post2",
//     // title: "Second Post",
//     // excerpt: "This is a summary of the second post.",
//     image: "/images/incheon_songdo1.jpg",
//     // date: "2024-09-05",
//   },
//   {
//     path: "/post3",
//     // title: "Second Post",
//     // excerpt: "This is a summary of the second post.",
//     image: "/images/incheon_songdo2.jpg",
//     // date: "2024-09-05",
//   },
//   {
//     path: "/post3",
//     // title: "Second Post",
//     // excerpt: "This is a summary of the second post.",
//     image: "/images/incheon_songdo3.jpg",
//     // date: "2024-09-05",
//   },
//   {
//     path: "/post3",
//     // title: "Second Post",
//     // excerpt: "This is a summary of the second post.",
//     image: "/images/incheon_songdo3.jpg",
//     // date: "2024-09-05",
//   },
// ];

// export default function MainSection() {
//   const isMobile = useMediaQuery("(max-width: 768px)"); // 모바일 감지
//   return (
//     <div style={{ position: "relative" }}>
//       <div style={{ position: "relative", width: "100vw", height: "80vh" }}>
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)", // 검정색 반투명 레이어
//             zIndex: 1, // 이미지보다 위에 배치
//           }}
//         ></div>
//         {/* <MultiCarousel>
//           {posts.map((post) => (
//             <PostCard key={post.path} post={post} />
//           ))}
//         </MultiCarousel> */}
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 1,
//         }}
//       >
//         <div
//           className="text-container"
//           style={{
//             color: "white",
//             fontSize: "32px",
//             fontWeight: "bold",
//             textAlign: "center",
//             zIndex: 1,
//             minWidth: 300,
//           }}
//         >
//           <div
//             style={{
//               fontSize: isMobile ? "3em" : "6em",
//               background:
//                 "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.8))",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               opacity: 0.8,
//               marginBottom: isMobile ? -70 : -110,
//               zIndex: 0,
//               position: "relative",
//             }}
//           >
//             송도
//           </div>
//           <div
//             style={{
//               zIndex: 5,
//               position: "relative",
//               marginTop: "20px",
//               fontSize: isMobile ? "24px" : "32px",
//             }}
//           >
//             {`언제나`}
//             <span style={{ color: "#2F88FC" }}>{`우리동네`}</span>
//             {`를 책임지는,`}
//           </div>
//           <div style={{ fontSize: isMobile ? "24px" : "32px" }}>
//             <span style={{ color: "#2F88FC" }}>{`AtoZ`}</span>
//             {`까지 모든 것을`}
//           </div>
//           <div
//             style={{ fontSize: isMobile ? "24px" : "32px" }}
//           >{`다 알아서 알려주고 다 해주는`}</div>
//           <div
//             style={{ fontSize: isMobile ? "24px" : "32px" }}
//           >{`부동산전문가`}</div>
//           <div style={{ fontSize: isMobile ? "24px" : "32px" }}>
//             <span style={{ color: "#2F88FC" }}>{`우리동네부동산`}</span>
//             {`입니다.`}
//           </div>
//         </div>
//       </div>

//       {/* CSS for the animations */}
//       <style jsx global>{`
//         @keyframes slideUp {
//           0% {
//             transform: translateY(20%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         .text-container {
//           animation: slideUp 2s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }
//-----------------
"use client";
import useMediaQuery from "../app/hook/useMediaQuery";
import MultiCarousel from "./MultiCarousel";
import Image, { ImageLoader } from "next/image";
import "../app/styles/text.css";

export default function MainSection() {
  const isMobile = useMediaQuery("(max-width: 768px)"); // 모바일 감지
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative", width: "100vw", height: "65vh" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            marginTop: isMobile ? "78px" : "120px",
            zIndex: 1, // 이미지보다 위에 배치
          }}
        >
          {/* section2 _ 왼쪽  */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 6,
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
                minWidth: 300,
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? "1em" : "2em",
                  background:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.8))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 1,
                  marginBottom: isMobile ? -90 : -110,
                  zIndex: 5,
                  position: "relative",
                }}
              >
                {isMobile ? (
                  <>
                    {`럭스 소유주분들은`}
                    <br />
                    {`주목하세요!`}
                  </>
                ) : (
                  <>{"럭스 소유주분들은 주목하세요!"}</>
                )}
              </div>
              <div
                style={{
                  zIndex: 5,
                  position: "relative",
                  marginTop: "75px",
                  fontSize: isMobile ? "18px" : "32px",
                  color: "#c3c3c3",
                }}
              >
                {isMobile ? (
                  <>
                    {`가만히 있으면 원하는 것을 아무것도`}
                    <br />
                    {`얻을 수 없습니다.`}
                  </>
                ) : (
                  <>{`가만히 있으면 원하는 것을 아무것도 얻을 수 없습니다.`}</>
                )}
              </div>
              <div
                style={{
                  color: "#636363",
                  fontSize: isMobile ? "18px" : "32px",
                }}
              >
                <span style={{ color: "#2F88FC" }}>{`'우리동네부동산'`}</span>
                <span style={{ color: "#c3c3c3" }}>{`과 함께 `}</span>
                {isMobile ? (
                  <>
                    <br />
                    <span
                      style={{ color: "#2F88FC" }}
                    >{`가장 빠르게 가장 원하는 거래`}</span>
                  </>
                ) : (
                  <span
                    style={{ color: "#2F88FC" }}
                  >{`가장 빠르게 가장 원하는 거래`}</span>
                )}
                <span style={{ color: "#c3c3c3" }}>{`하세요.`}</span>
              </div>
            </div>
          </div>
          {/* section1 _ 오른쪽  */}
          <div
            style={{
              position: "relative",
              width: "100vw",
              height: "65vh",
            }}
          >
            <Image
              // loader={imageLoader}
              src="/images/new_home.jpeg"
              alt="image_office_full"
              layout="fill"
              objectFit="cover"
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)", // 반투명 레이어
                zIndex: 1,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 11,
              bottom: 20,
              color: "white",
              top: "90%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: isMobile ? 0 : 10,
                width: "100%",
                fontSize: isMobile ? "12px" : "16px",
              }}
            >
              {isMobile ? (
                <>{`🎉 선착순중!`}</>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {`🎉 럭스 소유주분들을 위한 선착순 30명 이벤트 진행 중!`}
                  <br />
                  {"이벤트 내용은 신청 후 카톡 & 문자로 전송됩니다."}
                </div>
              )}
            </div>
            <div>
              {/* {"상담 신청하기 이벤트 내용을 카카오톡 및 문자로 알려드려요!"} */}
              <button
                onClick={() => {
                  // 화면 맨 아래로 이동
                  window.scrollTo({
                    top: document.body.scrollHeight, // 문서의 전체 높이
                    behavior: "smooth", // 부드럽게 스크롤
                  });
                }}
                style={{
                  backgroundColor: "#2F88FC",
                  padding: "14px 18px",
                  color: "#fff",
                  borderRadius: 8,
                  fontSize: 16,
                  width: "100%",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 5,
                }}
              >
                이벤트 상담 신청하기
              </button>
            </div>
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

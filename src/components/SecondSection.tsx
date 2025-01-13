// "use client";
// import Image, { ImageLoader } from "next/image";
// import useMediaQuery from "../hook/useMediaQuery";

// export default function SecondSection() {
//   const isMobile = useMediaQuery("(max-width: 768px)"); // 모바일 감지
//   const imageLoader: ImageLoader = ({ src, width, quality }: any) => {
//     return `https://uridongnae.com/${src}?w=${width || 200}&q=${quality || 75}`;
//   };
//   return (
//     <div
//       style={{
//         paddingTop: 50,
//         paddingBottom: 50,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f0f0f0",
//       }}
//     >
//       <div
//         style={{
//           display: isMobile ? "flex" : "grid",
//           flexDirection: "column",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gridTemplateRows: "repeat(3, 1fr)",
//           gap: "0",
//           width: "60%", // Adjust the width as needed
//           height: "76%", // Adjust the height as needed
//         }}
//       >
//         {/* First row */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: "#fff",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             padding: 20,
//           }}
//         >
//           <div style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold" }}>
//             부동산 공간을
//             <br /> 구하고 내놓는 모든 사람들의
//             <br /> 처한 상황은 다릅니다.
//           </div>
//           <div
//             style={{
//               display: "flex",
//               borderWidth: 1,
//               width: 60,
//               borderColor: "black",
//             }}
//           ></div>
//           <div style={{ fontSize: 14, paddingTop: 5 }}>
//             부동산은 단순한 물건이 아닙니다. <br />
//             단순히 공간을 찾는 것이 아닌 대출 , 세금 , 보유자산, 개인 일정 등
//             고객님들의 상황에 맞는 조건들을 종합적으로 고려하여 딱 맞는 공간을
//             찾아드리고 연결시키는 차원이 다른 서비스를 제공합니다.
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundColor: "#fff",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "relative",
//             width: "100%",
//             height: "100%",
//           }}
//         >
//           <Image
//             loader={imageLoader}
//             src="/images/carousel_logo.png"
//             alt="image_carousel_logo"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         <div
//           style={{
//             backgroundColor: "#fff",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             justifyContent: "center",
//             padding: 20,
//           }}
//         >
//           <div style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold" }}>
//             추천하고 계약하는 것에 끝나지 않습니다.
//           </div>
//           <div
//             style={{
//               display: "flex",
//               borderWidth: 1,
//               width: 60,
//               borderColor: "black",
//             }}
//           ></div>
//           <div style={{ fontSize: 14, paddingTop: 5 }}>
//             우리동네부동산은 맞춤 상담, 추천부터 계약, 사후관리까지 끝까지
//             책임지는 부동산 전문가들입니다. <br />
//             나만의 중개비서가 되어 여러분의 우리동네 만들기를 돕습니다.
//           </div>
//         </div>

//         {/* Second row */}
//         <div
//           style={{
//             backgroundColor: "#fff",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "relative", // Add this
//             width: "100%", // Ensure the parent div has a defined width
//             height: "100%", // Ensure the parent div has a defined height
//           }}
//         >
//           <Image
//             loader={imageLoader}
//             src="/images/IMG_1843.jpg"
//             alt="image_office_full"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: "#fff",
//             alignItems: "flex-start",
//             justifyContent: "center",
//             padding: 20,
//           }}
//         >
//           <div style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold" }}>
//             우리동네를 책임집니다.
//           </div>
//           <div
//             style={{
//               display: "flex",
//               borderWidth: 1,
//               width: 60,
//               borderColor: "black",
//             }}
//           ></div>
//           <div style={{ fontSize: 14, paddingTop: 5 }}>
//             우리동네의 대표 부동산으로 매매/임대 등 원하는 거래를 책임집니다.
//             <br />
//             원하는 조건에 맞는 빠르고 원활한 거래를 위해 우리동네를 원하는 많은
//             고객들에게 소개하고 연결합니다.
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundColor: "#fff",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "relative", // Add this
//             width: "100%", // Ensure the parent div has a defined width
//             height: "100%", // Ensure the parent div has a defined height
//           }}
//         >
//           <Image
//             loader={imageLoader}
//             src="/images/IMG_1854.jpg"
//             alt="image_license"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>

//         {/* Third row */}
//         <div
//           style={{
//             backgroundColor: "#fff",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "relative", // Add this
//             width: "100%", // Ensure the parent div has a defined width
//             height: "100%", // Ensure the parent div has a defined height
//           }}
//         >
//           <Image
//             loader={imageLoader}
//             src="/images/IMG_1841.jpg"
//             alt="image_table"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         <div
//           style={{
//             backgroundColor: "#fff",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "relative", // Add this
//             width: "100%", // Ensure the parent div has a defined width
//             height: "100%", // Ensure the parent div has a defined height
//           }}
//         >
//           <Image
//             loader={imageLoader}
//             src="/images/IMG_1850.jpg"
//             alt="image_sofa"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         {/* <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: "#fff",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             padding: 20,
//           }}
//         >
//           <div style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold" }}>
//             부동산 공간을 구하고 내놓는 모든 사람들의 처한 상황은 다릅니다.
//           </div>
//           <div
//             style={{
//               display: "flex",
//               borderWidth: 1,
//               width: 60,
//               borderColor: "black",
//             }}
//           ></div>
//           <div style={{ fontSize: 14, paddingTop: 5 }}>
//             부동산은 단순한 물건이 아닙니다. <br />
//             단순히 공간을 찾는 것이 아닌 대출 , 세금 , 보유자산, 개인 일정 등
//             고객님들의 상황에 맞는 조건들을 종합적으로 고려하여 딱 맞는 공간을
//             찾아드리고 연결시키는 차원이 다른 서비스를 제공합니다.
//           </div>
//         </div> */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             backgroundColor: "#fff",
//             alignItems: "flex-start",
//             justifyContent: "center",
//             padding: 20,
//           }}
//         >
//           <div style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold" }}>
//             지금까지 부동산중개사무소
//             <br /> 공간은 어떠셨나요?
//           </div>
//           <div
//             style={{
//               display: "flex",
//               borderWidth: 1,
//               width: 60,
//               borderColor: "black",
//             }}
//           ></div>
//           <div style={{ fontSize: 14, paddingTop: 5 }}>
//             우리동네부동산은 그저 계약하는 딱딱한 공간이 아닌 모두가 편하게
//             이야기하고 상담받을 수 있는 감성 넘치는 공간을 제공합니다.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
import Image, { ImageLoader } from "next/image";
import useMediaQuery from "../app/hook/useMediaQuery";
import "../app/styles/text.css";
import { sans, thinGothic } from "../app/styles/fonts";

export default function SecondSection() {
  const isMobile = useMediaQuery("(max-width: 768px)"); // 모바일 감지
  const imageLoader: ImageLoader = ({ src, width, quality }: any) => {
    return `https://uridongnae.com/${src}?w=${width || 200}&q=${quality || 75}`;
  };
  return (
    <div
      style={{
        paddingTop: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          width: "60%", // Adjust the width as needed
          height: isMobile ? "1100px" : "65vh", // Adjust the height as needed
        }}
      >
        <div
          style={{
            paddingTop: isMobile ? 0 : 20,
            paddingBottom: 20,
            fontSize: isMobile ? 18 : 30,
          }}
        >
          🔥 럭스 및 주변 APT 시세확인
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {/* 첫번쨰 */}
          <div
            style={{
              width: isMobile ? "100%" : "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? 18 : 22,
              flexDirection: "column",
              marginBottom: 20,
            }}
          >
            <div
              className={sans.className}
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: isMobile ? 12 : 30,
                animation: "blink 2.5s infinite",
              }}
            >
              <Image
                src="/images/SK_1.png"
                alt="카카오채널"
                width={isMobile ? 40 : 60}
                height={45}
              />
              송도럭스오션 SK뷰
            </div>
            <div style={{ fontSize: isMobile ? 12 : 18 }}>
              <div style={{ marginBottom: 10 }}>
                <div
                  className={sans.className}
                  style={{
                    padding: 2,
                    borderRadius: 10,
                    maxWidth: "45%",
                    backgroundColor: "#fa2c2c",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/house.png"
                    alt="house"
                    width={16}
                    height={16}
                    objectFit="cover"
                    style={{ marginRight: 5 }}
                  />
                  매매
                </div>
                <div
                  className={thinGothic.className}
                  style={{
                    paddingLeft: 10,
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 400,
                  }}
                >
                  <div>
                    최고가 <span>9억7천 만원</span>
                  </div>
                  <div>
                    평균가 <span>8억2천 만원</span>
                  </div>
                  <div>
                    최저가 <span>9억8천 만원</span>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div
                  style={{
                    padding: 2,
                    borderRadius: 10,
                    maxWidth: "45%",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/house.png"
                    alt="house"
                    width={16}
                    height={16}
                    objectFit="cover"
                    style={{ marginRight: 5 }}
                  />
                  전세
                </div>
                <div
                  className={thinGothic.className}
                  style={{
                    paddingLeft: 10,
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 400,
                  }}
                >
                  <div>
                    최고가<span>9억8천 만원</span>
                  </div>
                  <div>
                    평균가<span>9억8천 만원</span>
                  </div>
                  <div>
                    최저가<span>9억8천 만원</span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    padding: 2,
                    borderRadius: 10,
                    maxWidth: "45%",
                    backgroundColor: "#FF9800",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/house.png"
                    alt="house"
                    width={16}
                    height={16}
                    objectFit="cover"
                    style={{ marginRight: 5 }}
                  />
                  월세
                </div>
                <div
                  className={thinGothic.className}
                  style={{
                    paddingLeft: 10,
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 400,
                  }}
                >
                  <div>
                    최고가<span>9억8천 만원</span>
                  </div>
                  <div>
                    평균가<span>9억8천 만원</span>
                  </div>
                  <div>
                    최저가<span>9억8천 만원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 가운데 */}
          <div
            style={{
              width: isMobile ? "100%" : "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? 18 : 22,
              flexDirection: "column",
              marginBottom: 20,
            }}
          >
            <div
              className={sans.className}
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: isMobile ? 12 : 30,
                animation: "blink 2.5s infinite",
              }}
            >
              <Image
                src="/images/Xi_2.png"
                alt="카카오채널"
                width={isMobile ? 40 : 60}
                height={45}
              />
              송도자이더스타
            </div>
            <div style={{ fontSize: isMobile ? 12 : 18 }}>
              <div style={{ marginBottom: 10 }}>
                <div
                  className={sans.className}
                  style={{
                    padding: 2,
                    borderRadius: 10,
                    maxWidth: "45%",
                    backgroundColor: "#fa2c2c",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/house.png"
                    alt="house"
                    width={16}
                    height={16}
                    objectFit="cover"
                    style={{ marginRight: 5 }}
                  />
                  매매
                </div>
                <div
                  className={thinGothic.className}
                  style={{
                    paddingLeft: 10,
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 400,
                  }}
                >
                  <div>
                    최고가<span>9억8천 만원</span>
                  </div>
                  <div>
                    평균가<span>9억8천 만원</span>
                  </div>
                  <div>
                    최저가<span>9억8천 만원</span>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div
                  className={sans.className}
                  style={{
                    padding: 2,
                    borderRadius: 10,
                    maxWidth: "45%",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/house.png"
                    alt="house"
                    width={16}
                    height={16}
                    objectFit="cover"
                    style={{ marginRight: 5 }}
                  />
                  전세
                </div>
                <div
                  className={thinGothic.className}
                  style={{
                    paddingLeft: 10,
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 400,
                  }}
                >
                  <div>
                    최고가<span>9억8천 만원</span>
                  </div>
                  <div>
                    평균가<span>9억8천 만원</span>
                  </div>
                  <div>
                    최저가<span>9억8천 만원</span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={sans.className}
                  style={{
                    padding: 2,
                    borderRadius: 10,
                    maxWidth: "45%",
                    backgroundColor: "#FF9800",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/house.png"
                    alt="house"
                    width={16}
                    height={16}
                    objectFit="cover"
                    style={{ marginRight: 5 }}
                  />
                  월세
                </div>
                <div
                  className={thinGothic.className}
                  style={{
                    paddingLeft: 10,
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 400,
                  }}
                >
                  <div>
                    최고가<span>9억8천 만원</span>
                  </div>
                  <div>
                    평균가<span>9억8천 만원</span>
                  </div>
                  <div>
                    최저가<span>9억8천 만원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 마지막 */}
          <div
            style={{
              width: isMobile ? "100%" : "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? 18 : 22,
              flexDirection: "column",
              marginBottom: 20,
            }}
          >
            <div
              className={sans.className}
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: isMobile ? 12 : 30,
                animation: "blink 2.5s infinite",
              }}
            >
              <Image
                src="/images/Xi_2.png"
                alt="카카오채널"
                width={isMobile ? 40 : 60}
                height={45}
              />
              송도크리스탈자이오션
            </div>
            <div style={{ fontSize: isMobile ? 12 : 18 }}>
              <div style={{ marginBottom: 10 }}>
                <div
                  className={sans.className}
                  style={{
                    padding: 2,
                    borderRadius: 10,
                    maxWidth: "45%",
                    backgroundColor: "#fa2c2c",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/house.png"
                    alt="house"
                    width={16}
                    height={16}
                    objectFit="cover"
                    style={{ marginRight: 5 }}
                  />
                  매매
                </div>
                <div
                  className={thinGothic.className}
                  style={{
                    paddingLeft: 10,
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 400,
                  }}
                >
                  <div>
                    최고가<span>9억8천 만원</span>
                  </div>
                  <div>
                    평균가<span>9억8천 만원</span>
                  </div>
                  <div>
                    최저가<span>9억8천 만원</span>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div
                  className={sans.className}
                  style={{
                    padding: 2,
                    borderRadius: 10,
                    maxWidth: "45%",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/house.png"
                    alt="house"
                    width={16}
                    height={16}
                    objectFit="cover"
                    style={{ marginRight: 5 }}
                  />
                  전세
                </div>
                <div
                  className={thinGothic.className}
                  style={{
                    paddingLeft: 10,
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 400,
                  }}
                >
                  <div>
                    최고가<span>9억8천 만원</span>
                  </div>
                  <div>
                    평균가<span>9억8천 만원</span>
                  </div>
                  <div>
                    최저가<span>9억8천 만원</span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={sans.className}
                  style={{
                    padding: 2,
                    borderRadius: 10,
                    maxWidth: "45%",
                    backgroundColor: "#FF9800",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/house.png"
                    alt="house"
                    width={16}
                    height={16}
                    objectFit="cover"
                    style={{ marginRight: 5 }}
                  />
                  월세
                </div>
                <div
                  className={thinGothic.className}
                  style={{
                    paddingLeft: 10,
                    fontSize: isMobile ? 14 : 16,
                    fontWeight: 400,
                  }}
                >
                  <div>
                    최고가<span>9억8천 만원</span>
                  </div>
                  <div>
                    평균가<span>9억8천 만원</span>
                  </div>
                  <div>
                    최저가<span>9억8천 만원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

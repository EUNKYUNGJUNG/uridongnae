// "use client";
// import Image, { ImageLoader } from "next/image";
// import useMediaQuery from "../hook/useMediaQuery";
// export default function ThirdSection() {
//   const isMobile = useMediaQuery("(max-width: 768px)");
//   const imageLoader: ImageLoader = ({ src, width, quality }: any) => {
//     return `https://uridongnae.com/${src}?w=${width || 200}&q=${quality || 75}`;
//   };
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           alignItems: "center",
//           justifyContent: "center",
//           width: "100vw",
//           height: isMobile ? "" : "70vh",
//           padding: "50px",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "#fff",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "relative", // Add this
//             width: isMobile ? "100vw" : "50vw", // 모바일에서는 전체 너비를 사용
//             height: isMobile ? "40vh" : "100%", // 모바일에서는 적절한 높이 설정
//           }}
//         >
//           <Image
//             loader={imageLoader}
//             src="/images/map.png"
//             alt="Image 9"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>

//         <div
//           style={{
//             marginLeft: isMobile ? 0 : 20,
//             width: isMobile ? "100%" : "30%",
//           }}
//         >
//           <div
//             style={{
//               fontWeight: "bold",
//               display: "flex",
//               alignItems: "center",
//               marginTop: isMobile ? 20 : 0,
//             }}
//           >
//             <span
//               style={{
//                 display: "inline-block",
//                 width: 6,
//                 height: "20px",
//                 backgroundColor: "#2F88FC",
//                 borderRadius: "3px",
//                 marginRight: 6,
//               }}
//             ></span>
//             주소 안내
//           </div>

//           <div
//             style={{
//               display: "flex",
//               fontWeight: 700,
//               paddingLeft: 12,
//               fontSize: isMobile ? 14 : 16,
//             }}
//           >
//             힐스테이트송도더스카이 상가C동 2층 206호
//           </div>

//           <br />
//           <div style={{ paddingLeft: 12, fontSize: isMobile ? 14 : 16 }}>
//             <div style={{ display: "flex" }}>
//               <Image
//                 loader={imageLoader}
//                 src="/images/map_public_transport.png"
//                 alt="map_office_building"
//                 style={{ marginRight: 5 }}
//                 width={20}
//                 height={20}
//               />
//               대중교통 이용 안내 :
//             </div>
//             인천1호선 국제업무지구역 3번출구 하차 후 호수변으로 이동 , 상가C동
//             2층 위치  <br />
//             <br />
//             <div style={{ display: "flex" }}>
//               <Image
//                 loader={imageLoader}
//                 src="/images/map_car.png"
//                 alt="map_car"
//                 style={{ marginRight: 5 }}
//                 width={20}
//                 height={20}
//               />
//               차량 이용 안내 :
//             </div>
//             3번 게이트로 진입하시어 좌측 , 좌측 진입 하여 C동 ( 104동 )  주변
//             주차
//             <div
//               style={{
//                 width: "100%",
//                 alignItems: "cetner",
//                 marginTop: 20,
//                 display: "flex",
//                 flexDirection: "row",
//               }}
//             >
//               <a
//                 href="https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%9D%B8%EC%B2%9C%ED%83%80%EC%9B%8C%EB%8C%80%EB%A1%9C%20365%20C%EB%8F%99%202%EC%B8%B5%20206%ED%98%B8/address/14096194.5253012,4495297.2670303,%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%9D%B8%EC%B2%9C%ED%83%80%EC%9B%8C%EB%8C%80%EB%A1%9C%20365,new?c=15.00,0,0,0,dh&isCorrectAnswer=true"
//                 target="_blank"
//                 style={{
//                   backgroundColor: "#093876",
//                   padding: "5px 18px",
//                   color: "#fff",
//                   borderRadius: 25,
//                   fontSize: 16,
//                   fontWeight: "500",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   margin: 5,
//                 }}
//               >
//                 자세히 보기
//               </a>
//               <a
//                 href="https://map.naver.com/p/directions/-/14096194.5253012,4495297.2670303,%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%9D%B8%EC%B2%9C%ED%83%80%EC%9B%8C%EB%8C%80%EB%A1%9C%20365,,ADDRESS_POI/-/transit?c=15.00,0,0,0,dh"
//                 target="_blank"
//                 style={{
//                   border: "2px solid #093876",
//                   padding: "5px 18px",
//                   color: "#093876",
//                   borderRadius: 25,
//                   fontSize: 16,
//                   fontWeight: "500",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   margin: 5,
//                 }}
//               >
//                 빠른길 찾기
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import useMediaQuery from "../app/hook/useMediaQuery";
import { useEffect, useState } from "react";
import { addUserInfo } from "../api/firebase";

interface UserInfo {
  userName: string;
  atpName: string;
  dongHo: string;
  contactNumber: string;
  terms: boolean;
}

interface Props {
  isModalOpen: boolean;
  isChecked: boolean;
  closeModal: (value: boolean) => void;
  handleCheckboxChange: (e: boolean) => void;
}
export default function ThirdSection(props: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userName: "",
    atpName: "",
    dongHo: "",
    contactNumber: "",
    terms: true,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!props.isChecked) {
      return alert("약관에 동의해주세요.");
    }

    //Firebase 에 새로운 제품을 추가함
    addUserInfo(userInfo);
    if (typeof props.closeModal === "function") {
      props.closeModal(true);
    } else {
      console.error("closeModal is not a function");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          paddingTop: 20,
          marginBottom: isMobile ? 20 : 0,
          fontSize: isMobile ? 16 : 30,
        }}
      >
        📋 상담 및 매물 접수 신청하기 ( 이벤트 포함 )
      </div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: isMobile ? "" : "50vh",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: isMobile ? "column" : "row",
              marginBottom: 30,
            }}
          >
            {/* 왼쪽 */}
            <div
              style={{
                width: isMobile ? "90%" : "50%",
                marginRight: isMobile ? 0 : 10,
                marginBottom: isMobile ? 20 : 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginBottom: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 150,
                    fontSize: isMobile ? 14 : 16,
                  }}
                >
                  성함
                </div>
                <input
                  style={{
                    backgroundColor: "white",
                    height: 46,
                    borderRadius: 4,
                    borderBottomColor: "gray",
                    borderBottomWidth: 1,
                    fontSize: isMobile ? 14 : 16,
                  }}
                  type="text"
                  name="userName"
                  value={userInfo?.userName ?? ""}
                  placeholder="김럭스"
                  required
                  onChange={handleChange}
                ></input>
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ width: 150, fontSize: isMobile ? 12 : 16 }}>
                  소유하신 아파트명
                </div>
                <input
                  style={{
                    backgroundColor: "white",
                    height: 46,
                    borderRadius: 4,
                    borderBottomColor: "gray",
                    borderBottomWidth: 1,
                    fontSize: isMobile ? 14 : 16,
                  }}
                  type="text"
                  name="atpName"
                  value={userInfo?.atpName ?? ""}
                  placeholder="송도럭스오션"
                  required
                  onChange={handleChange}
                ></input>
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ width: 150, fontSize: isMobile ? 14 : 16 }}>
                  동 호수
                </div>
                <input
                  style={{
                    backgroundColor: "white",
                    height: 46,
                    borderRadius: 4,
                    borderBottomColor: "gray",
                    borderBottomWidth: 1,
                    fontSize: isMobile ? 14 : 16,
                  }}
                  type="text"
                  name="dongHo"
                  value={userInfo?.dongHo ?? ""}
                  placeholder="XXX동 XXXX호"
                  required
                  onChange={handleChange}
                ></input>
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ width: 150, fontSize: isMobile ? 14 : 16 }}>
                  연락처
                </div>
                <input
                  style={{
                    backgroundColor: "white",
                    height: 46,
                    borderRadius: 4,
                    borderBottomColor: "gray",
                    borderBottomWidth: 1,
                    fontSize: isMobile ? 14 : 16,
                  }}
                  type="text"
                  name="contactNumber"
                  value={userInfo?.contactNumber ?? ""}
                  placeholder="010-1234-5678"
                  required
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            {/* 오른쪽 */}
            <div
              style={{
                width: "100%",
                paddingLeft: isMobile ? 20 : 0,
                paddingRight: isMobile ? 20 : 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 8,
                }}
              >
                <div style={{ fontSize: isMobile ? 14 : 16 }}>
                  개인정보취급방침동의
                </div>
                <div
                  style={{
                    height: 190,
                    width: isMobile ? "100%" : "300px",

                    overflowY: "auto",
                    fontSize: 9,
                  }}
                >
                  * 개인정보 수집 및 이용동의
                  <br />
                  [개인정보보호를 위한 이용자 동의사항]
                  <br />
                  자세한 내용은 아래의 ‘관심고객등록에 대한 개인정보취급방침’ 을
                  확인하시기 바랍니다.
                  <br />
                  <br />
                  *고객등록에 대한 개인정보 취급방침*
                  <br />
                  우리동네부동산(이하’운영주체’) 은 매물접수 및 상담 , 고객 직접
                  참여 이벤트 등을 위해 아래와 같은 개인정보를 수집 및 이용하고
                  있으며 , 아래의 목적 이외의 용도로는 이용하지 않습니다.
                  운영주체는 고객님의 개인정보를 중요취급하고 개인정보 보호법 및
                  정보통신망 이용촉진 및 정보보호 등에 관한 법률을 준수하고
                  있습니다.
                  <br />
                  <br />
                  1.개인정보 수집 및 이용에 동의
                  <br />
                  <br />
                  (1) 수집하는 개인정보 항목
                  <br />
                  -수집항목 : 이름 , 생년월일 , 휴대전화번호 , 소유 부동산정보 ,
                  서비스 이용기록 , 접속 로그 , 쿠키, 접속 IP 정보 등의 전부
                  또는 일부
                  <br />
                  -개인정보 수집방법 : 홈페이지 , 관심고객 등록 , 이벤트 응모 .
                  상담신청 . 매물접수
                  <br />
                  <br />
                  (2)개인정보의 수집 및 이용 목적  수집한 개인정보를 다음의
                  목적으로 이용합니다.
                  <br />
                  -신청 및 접수한 부동산에 대한 정보 및 마케팅 자료,통계에 활용
                  <br />
                  -마케팅 및 광고에 활용 , 신규 서비스 개발 및 특화 , 이벤트 등
                  광고성 정보 전달 , 고객사전추천(MGM) , 인구통계학적 특성에
                  따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원 서비스
                  이용에 대한 통계 및 정보 안내 , 아파트 확인 및 DM,TM 등<br />
                  <br />
                  (3)개인정보의 보유 및 이용기간
                  <br />
                  개인정보 수집 및 이용목적이 달성된 후 ( 마감, 이벤트 수령 등)
                  해당 정보를 파기합니다. <br />
                  다만, 아래의 경우에는예외로 합니다.
                  <br />
                  -고객이사전에 요청한 경우
                  <br />
                  -법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
                  방법에 따라 수사기관의 요구가 있는 경우
                  <br />
                  <br />
                  (4)거부할권리
                  <br />
                  고객은 정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다.
                  다만, 동의해야만 등록할 수 있으며 , 거부시 이용에 제한이 있을
                  수 있습니다.
                  <br />
                  <br />
                  2.개인정보의 제3자 제공에 대한 동의
                  <br />
                  <br />
                  (1)수집한 개인정보의 제3자의 제공
                  <br />
                  고객에게 보다 질 높은 서비스를 제공하기 위해 아래와 같이
                  귀하의 개인정보를 타 중개업소에 제공할 수 있습니다.
                  <br />
                  <br />
                  (2) 제공하는 개인정보 항목 : 이름 , 생년월일 , 휴대전화번호 ,
                  소유한 부동산 정보 . 서비스 이용기록 , 접속 로그 , 쿠키,
                  접속IP정보 등의 전부또는 일부
                  <br />
                  <br />
                  (3) 제공 정보의 이용 목적 : 콘텐츠 제공 , 불만처리 등 민원처리
                  , 고지사항 전달, 이벤트 등 광고성 정보 전달 , DM , TM 등의
                  확인
                  <br />
                  <br />
                  (4) 제공 정보의 보유 및 이용 기간
                  <br />
                  개인정보 수집 및 이용 목적이 달성된 후 ( 마감, 이벤트 수령 등
                  ) 해당 정보를 파기합니다. 다만 , 아래의 경우에는 예외로합니다.
                  <br />
                   -고객이 사전에 요청한 경우
                  <br />
                   -법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
                  방법에 따라 수사기관의 요구가 있는 경우
                  <br />
                  <br />
                  (5) 거부할 권리
                  <br />
                  고객은 개인정보 3자 제공에 대한 동의를 거부할 권리가 있습니다.
                  다만 동의해야만 등록할 수 있으며 , 거부시 이용에 제한이 있을수
                  있습니다.
                  <br />
                  <br />
                  *당사 운영하는 이벤트 및 관심고객 등록 유의사항
                  <br />
                  -홈페이지에 등록한 정보가 계약 시 인적사항과 다를 경우 증정
                  불가
                  <br />
                  -등록한 개인정보는 마감 및 이벤트 증정 등의 업무 종료 후 즉시
                  파기함
                  <br />
                  <br />
                  이벤트 관련 이메일 문의 : uri_dongnae@naver.com
                </div>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    paddingTop: 5,
                    paddingBottom: 5,
                    width: isMobile ? "100%" : "300px",
                  }}
                >
                  <label
                    style={{
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      style={{ marginRight: 5 }}
                      type="checkbox"
                      checked={props.isChecked}
                      onChange={(e) =>
                        props.handleCheckboxChange(e.target.checked)
                      }
                      id="agree1"
                      name="terms"
                    ></input>
                    약관에 동의합니다.
                  </label>
                </button>
              </div>
            </div>
          </div>
          <button
            style={{
              backgroundColor: "#2F88FC",
              padding: 14,
              borderRadius: 8,
              width: 230,
              color: "#fff",
              marginBottom: isMobile ? 20 : 0,
            }}
          >
            신청하기
          </button>
        </div>
      </form>
    </div>
  );
}

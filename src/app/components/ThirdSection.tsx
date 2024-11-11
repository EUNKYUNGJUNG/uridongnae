"use client";
import Image, { ImageLoader } from "next/image";
import useMediaQuery from "../hook/useMediaQuery";
export default function ThirdSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageLoader: ImageLoader = ({ src, width, quality }: any) => {
    return `https://uridongnae.com/${src}?w=${width || 200}&q=${quality || 75}`;
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: isMobile ? "" : "70vh",
          padding: "50px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative", // Add this
            width: isMobile ? "100vw" : "50vw", // 모바일에서는 전체 너비를 사용
            height: isMobile ? "40vh" : "100%", // 모바일에서는 적절한 높이 설정
          }}
        >
          <Image
            loader={imageLoader}
            src="/images/map.png"
            alt="Image 9"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div
          style={{
            marginLeft: isMobile ? 0 : 20,
            width: isMobile ? "100%" : "30%",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              marginTop: isMobile ? 20 : 0,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: "20px",
                backgroundColor: "#2F88FC",
                borderRadius: "3px",
                marginRight: 6,
              }}
            ></span>
            주소 안내
          </div>

          <div
            style={{
              display: "flex",
              fontWeight: 700,
              paddingLeft: 12,
              fontSize: isMobile ? 14 : 16,
            }}
          >
            힐스테이트송도더스카이 상가C동 2층 206호
          </div>

          <br />
          <div style={{ paddingLeft: 12, fontSize: isMobile ? 14 : 16 }}>
            <div style={{ display: "flex" }}>
              <Image
                loader={imageLoader}
                src="/images/map_public_transport.png"
                alt="map_office_building"
                style={{ marginRight: 5 }}
                width={20}
                height={20}
              />
              대중교통 이용 안내 :
            </div>
            인천1호선 국제업무지구역 3번출구 하차 후 호수변으로 이동 , 상가C동
            2층 위치  <br />
            <br />
            <div style={{ display: "flex" }}>
              <Image
                loader={imageLoader}
                src="/images/map_car.png"
                alt="map_car"
                style={{ marginRight: 5 }}
                width={20}
                height={20}
              />
              차량 이용 안내 :
            </div>
            3번 게이트로 진입하시어 좌측 , 좌측 진입 하여 C동 ( 104동 )  주변
            주차
            <div
              style={{
                width: "100%",
                alignItems: "cetner",
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <a
                href="https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%9D%B8%EC%B2%9C%ED%83%80%EC%9B%8C%EB%8C%80%EB%A1%9C%20365%20C%EB%8F%99%202%EC%B8%B5%20206%ED%98%B8/address/14096194.5253012,4495297.2670303,%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%9D%B8%EC%B2%9C%ED%83%80%EC%9B%8C%EB%8C%80%EB%A1%9C%20365,new?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                target="_blank"
                style={{
                  backgroundColor: "#093876",
                  padding: "5px 18px",
                  color: "#fff",
                  borderRadius: 25,
                  fontSize: 16,
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 5,
                }}
              >
                자세히 보기
              </a>
              <a
                href="https://map.naver.com/p/directions/-/14096194.5253012,4495297.2670303,%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EC%9D%B8%EC%B2%9C%ED%83%80%EC%9B%8C%EB%8C%80%EB%A1%9C%20365,,ADDRESS_POI/-/transit?c=15.00,0,0,0,dh"
                target="_blank"
                style={{
                  border: "2px solid #093876",
                  padding: "5px 18px",
                  color: "#093876",
                  borderRadius: 25,
                  fontSize: 16,
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 5,
                }}
              >
                빠른길 찾기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

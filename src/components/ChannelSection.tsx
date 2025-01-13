"use client";
import Image, { ImageLoader } from "next/image";
import useMediaQuery from "../app/hook/useMediaQuery";

export default function ChannelSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageLoader: ImageLoader = ({ src, width, quality }: any) => {
    return `https://uridongnae.com/${src}?w=${width || 200}&q=${quality || 75}`;
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "10vh",
          padding: "50px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <button style={{ marginRight: isMobile ? 0 : 20 }}>
          <a
            // 추후 네이버 톡톡 하는 형식으로 전부 교체하기!
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const start = Date.now();

              if (isMobile) {
                // 모바일일 때 네이버 앱을 열거나 실패 시 웹 페이지로 유도
                window.location.href =
                  "naversearchapp://inappbrowser?url=https://talk.naver.com/W5IJE3";
                setTimeout(() => {
                  if (Date.now() - start < 1500) {
                    window.location.href = "https://talk.naver.com/W5IJE3"; // 모바일 웹 버전
                  }
                }, 1000);
              } else {
                // PC일 때는 바로 웹 페이지로 유도
                window.location.href = "https://talk.naver.com/W5IJE3";
              }
            }}
            target="_blank"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <Image
              loader={imageLoader}
              src="/images/sns_talk.png"
              alt="네이버톡톡"
              width={isMobile ? 35 : 50}
              height={50} // 원하는 높이
              style={{
                borderRadius: "11px",
                boxShadow: "0 4px 8px rgba(96, 96, 96, 0.5)",
                backgroundColor: "transparent",
              }}
            />
            <span
              style={{
                paddingLeft: isMobile ? 0 : 5,
                width: 100,
                fontSize: isMobile ? 14 : 16,
              }}
            >
              네이버 톡톡
            </span>
          </a>
        </button>
        <button style={{ marginRight: isMobile ? 0 : 20 }}>
          <a
            href={
              isMobile
                ? "kakaoplus://plusfriend/friend/_ZVxhyG"
                : "http://pf.kakao.com/_ZVxhyG"
            }
            target="_blank"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <Image
              loader={imageLoader}
              src="/images/sns_ch.png"
              alt="카카오채널"
              width={isMobile ? 35 : 50}
              height={50}
              style={{
                borderRadius: "11px",
                boxShadow: "0 4px 8px rgba(96, 96, 96, 0.5)",
                backgroundColor: "transparent",
              }}
            />
            <span
              style={{
                paddingLeft: isMobile ? 0 : 5,
                width: 100,
                fontSize: isMobile ? 14 : 16,
              }}
            >
              카카오 채널
            </span>
          </a>
        </button>
        <button style={{ marginRight: isMobile ? 0 : 20 }}>
          <a
            href={
              isMobile
                ? "instagram://user?username=uridongnae_sd" // 모바일 앱에서 열리도록 딥링크 설정
                : "https://www.instagram.com/uridongnae_sd" // PC에서 열리도록 웹 링크 설정
            }
            target="_blank"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <Image
              loader={imageLoader}
              src="/images/sns_ins.png"
              alt="인스타그램"
              width={isMobile ? 35 : 50}
              height={50} // 원하는 높이
              style={{
                borderRadius: "11px",
                boxShadow: "0 4px 8px rgba(96, 96, 96, 0.5)",
                backgroundColor: "transparent",
              }}
            />
            <span
              style={{
                paddingLeft: isMobile ? 0 : 5,
                width: 100,
                fontSize: isMobile ? 14 : 16,
              }}
            >
              인스타그램
            </span>
          </a>
        </button>
        <button style={{ marginRight: isMobile ? 0 : 20 }}>
          <a
            href={
              isMobile
                ? "naverblog://blog.naver.com/abcabc_0620"
                : "https://blog.naver.com/abcabc_0620"
            }
            target="_blank"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <Image
              loader={imageLoader}
              src="/images/sns_blog.png"
              alt="네이버블로그"
              width={isMobile ? 35 : 50}
              height={50} // 원하는 높이
              style={{
                borderRadius: "11px",
                boxShadow: "0 4px 8px rgba(96, 96, 96, 0.5)",
                backgroundColor: "transparent",
              }}
            />
            <span
              style={{
                paddingLeft: isMobile ? 0 : 5,
                width: 100,
                fontSize: isMobile ? 14 : 16,
              }}
            >
              네이버 블로그
            </span>
          </a>
        </button>
      </div>
    </div>
  );
}

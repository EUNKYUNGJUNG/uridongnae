"use client";
import Image from "next/image";
import useMediaQuery from "../hook/useMediaQuery";

export default function ChannelSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
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
            href="http://pf.kakao.com/_ZVxhyG"
            target="_blank"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <Image
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
            href="https://blog.naver.com/abcabc_0620"
            target="_blank"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <Image
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
        <button style={{ marginRight: isMobile ? 0 : 20 }}>
          <a
            href="https://www.instagram.com/uridongnae_sd?igsh=MXMyNTFiM3pnenc4aw=="
            target="_blank"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <Image
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
            href="https://talk.naver.com/W5IJE3"
            target="_blank"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <Image
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
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";

export default function SecondSection() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "0",
          width: "60%", // Adjust the width as needed
          height: "76%", // Adjust the height as needed
        }}
      >
        {/* First row */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 20,
          }}
        >
          <div style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold" }}>
            부동산 공간을 구하고 내놓는 모든 사람들의 처한 상황은 다릅니다.
          </div>
          <div
            style={{
              display: "flex",
              borderWidth: 1,
              width: 60,
              borderColor: "black",
            }}
          ></div>
          <div style={{ fontSize: 14, paddingTop: 5 }}>
            부동산은 단순한 물건이 아닙니다. <br />
            단순히 공간을 찾는 것이 아닌 대출 , 세금 , 보유자산, 개인 일정 등
            고객님들의 상황에 맞는 조건들을 종합적으로 고려하여 딱 맞는 공간을
            찾아드리고 연결시키는 차원이 다른 서비스를 제공합니다.
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative", // Add this
            width: "100%", // Ensure the parent div has a defined width
            height: "100%", // Ensure the parent div has a defined height
          }}
        >
          <Image
            src="/images/carousel_logo.png"
            alt="Image 9"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold" }}>
            추천하고 계약하는 것에 끝나지 않습니다.
          </div>
          <div
            style={{
              display: "flex",
              borderWidth: 1,
              width: 60,
              borderColor: "black",
            }}
          ></div>
          <div style={{ fontSize: 14, paddingTop: 5 }}>
            우리동네부동산은 맞춤 상담, 추천부터 계약, 사후관리까지 끝까지
            책임지는 부동산 전문가들입니다. <br />
            나만의 중개비서가 되어 여러분의 우리동네 만들기를 돕습니다.
          </div>
        </div>

        {/* Second row */}
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative", // Add this
            width: "100%", // Ensure the parent div has a defined width
            height: "100%", // Ensure the parent div has a defined height
          }}
        >
          <Image
            src="/images/office_full.png"
            alt="Image 9"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold" }}>
            우리동네를 책임집니다.
          </div>
          <div
            style={{
              display: "flex",
              borderWidth: 1,
              width: 60,
              borderColor: "black",
            }}
          ></div>
          <div style={{ fontSize: 14, paddingTop: 5 }}>
            우리동네의 대표 부동산으로 매매/임대 등 원하는 거래를 책임집니다.
            <br />
            원하는 조건에 맞는 빠르고 원활한 거래를 위해 우리동네를 원하는 많은
            고객들에게 소개하고 연결합니다.
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative", // Add this
            width: "100%", // Ensure the parent div has a defined width
            height: "100%", // Ensure the parent div has a defined height
          }}
        >
          <Image
            src="/images/license.png"
            alt="Image 9"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Third row */}
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative", // Add this
            width: "100%", // Ensure the parent div has a defined width
            height: "100%", // Ensure the parent div has a defined height
          }}
        >
          <Image
            src="/images/table.png"
            alt="Image 9"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative", // Add this
            width: "100%", // Ensure the parent div has a defined width
            height: "100%", // Ensure the parent div has a defined height
          }}
        >
          <Image
            src="/images/sofa.png"
            alt="Image 9"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: 20,
          }}
        >
          <div style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold" }}>
            부동산 공간을 구하고 내놓는 모든 사람들의 처한 상황은 다릅니다.
          </div>
          <div
            style={{
              display: "flex",
              borderWidth: 1,
              width: 60,
              borderColor: "black",
            }}
          ></div>
          <div style={{ fontSize: 14, paddingTop: 5 }}>
            부동산은 단순한 물건이 아닙니다. <br />
            단순히 공간을 찾는 것이 아닌 대출 , 세금 , 보유자산, 개인 일정 등
            고객님들의 상황에 맞는 조건들을 종합적으로 고려하여 딱 맞는 공간을
            찾아드리고 연결시키는 차원이 다른 서비스를 제공합니다.
          </div>
        </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div style={{ fontSize: 20, paddingBottom: 5, fontWeight: "bold" }}>
            지금까지 부동산중개사무소 공간은 어떠셨나요?
          </div>
          <div
            style={{
              display: "flex",
              borderWidth: 1,
              width: 60,
              borderColor: "black",
            }}
          ></div>
          <div style={{ fontSize: 14, paddingTop: 5 }}>
            우리동네부동산은 그저 계약하는 딱딱한 공간이 아닌 모두가 편하게
            이야기하고 상담받을 수 있는 감성 넘치는 공간을 제공합니다.
          </div>
        </div>
      </div>
    </div>
  );
}

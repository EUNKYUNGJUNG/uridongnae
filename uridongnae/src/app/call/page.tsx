"use client";
import { useState } from "react";

export default function ContactPage() {
  const [subCategoryId, setSubCategoryId] = useState(0);
  const categoryHandler = (e: any) => {
    setSubCategoryId(Number(e.target.value));
    console.log(subCategoryId);
  };

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
      }}
    >
      <div style={{ paddingBottom: 20 }}>
        <h1>상담신청</h1>
        1. 우리동네부동산은 상담을 통해 여러분의 상황/원하시는 조건을 정확히
        진단합니다. <br />
        2. 타협하지 않고 끊임없이 여러분에 더 맞는 매물을 찾아 추천하고
        연결해드립니다.
        <br />
        3. 매매/임대 등 원하는 거래가 빠르고 원활하게 이뤄질 수 있도록
        노력합니다.
        <br />
        <br /> 아래 정보를 입력, 신청해주시면
        <br /> 우리동네부동산 소속 전문 중개사가 확인 후 연락드립니다.
        <br /> 여러분의 상황 , 조건에 맞춰 최적의 상담과 결과를
        만들어드리겠습니다.
      </div>
      <div
        style={{
          borderWidth: 1,
          borderColor: "gray",
          width: "100%",
        }}
      ></div>
      <div>
        <div>원하시는 서비스 선택 </div>
        <div>
          <label>
            <input
              type="radio"
              value={2}
              onChange={categoryHandler}
              checked={subCategoryId == 2}
            />
            아파트/오피스텔
          </label>
          <label>
            <input
              type="radio"
              value={3}
              onChange={categoryHandler}
              checked={subCategoryId == 3}
            />
            아파트 분양권
          </label>
          <label>
            <input
              type="radio"
              value={4}
              onChange={categoryHandler}
              checked={subCategoryId == 4}
            />
            상가/사무실
          </label>
          <label>
            <input
              type="radio"
              value={5}
              onChange={categoryHandler}
              checked={subCategoryId == 5}
            />
            기타상담
          </label>
        </div>
        <div>
          <label>
            이름:{" "}
            <input
              name="name"
              style={{ color: "gray " }}
              defaultValue="이름을 입력해주세요"
            />
          </label>
          <label>
            연락처:{" "}
            <input
              name="call"
              style={{ color: "gray" }}
              defaultValue="연락처를 입력해주세요"
            />
          </label>
        </div>
        <div>
          <label>
            Edit your post:
            <textarea
              name="postContent"
              defaultValue="I really enjoyed biking yesterday!"
              rows={4}
              cols={40}
            />
          </label>
        </div>
      </div>
    </section>
  );
}

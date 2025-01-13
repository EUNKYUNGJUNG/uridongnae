import { useEffect } from "react";

function useDisableBodyScroll(isModalOpen: boolean) {
  useEffect(() => {
    const scrollY = window.scrollY;

    if (isModalOpen) {
      // 모달이 열릴 때 스크롤 고정
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // 모달이 닫힐 때 스크롤 복원
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    }

    return () => {
      // 컴포넌트가 언마운트될 때 스크롤 상태 복원
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isModalOpen]);
}

export default useDisableBodyScroll;

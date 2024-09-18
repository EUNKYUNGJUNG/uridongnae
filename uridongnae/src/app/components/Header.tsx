"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const handleUrl = () => {
    router.push("/call");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
        height: 120,
        display: "flex",
        alignItems: "center",
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: isScrolled ? "white" : "transparent",
        borderBottom: "0.5px solid #fff",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Title Text */}
      <div
        style={{
          fontSize: 34,
          color: isScrolled ? "black" : "white",
          transition: "color 0.3s ease",
        }}
      >
        우리동네 부동산
      </div>

      {/* Button Text */}
      <div style={{ fontSize: 24 }}>
        <button
          onClick={handleUrl}
          style={{
            color: isScrolled ? "black" : "white", // Change button text color based on scroll
            background: "none", // Make sure background is transparent
            border: "none", // Remove button border
            cursor: "pointer",
            transition: "color 0.3s ease", // Smooth transition
          }}
        >
          상담신청
        </button>
      </div>
    </div>
  );
}

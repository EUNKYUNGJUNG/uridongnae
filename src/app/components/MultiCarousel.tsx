"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/carousel.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
type Props = {
  children: React.ReactNode;
};

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <button className="custom-arrow custom-left-arrow" onClick={onClick}>
      {"<"}
    </button>
  );
};

// Custom Right Arrow
const CustomRightArrow = ({ onClick }: any) => {
  return (
    <button className="custom-arrow custom-right-arrow" onClick={onClick}>
      {">"}
    </button>
  );
};

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel
      infinite
      autoPlay
      responsive={responsive}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {children}
    </Carousel>
  );
}

// "use client";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };
// type Props = {
//   children: React.ReactNode;
// };
// export default function MultiCarousel({ children }: Props) {
//   return (
//     <Carousel infinite autoPlay responsive={responsive}>
//       {children}
//     </Carousel>
//   );
// }

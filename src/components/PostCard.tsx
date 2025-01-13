import { Post } from "./CarouselPosts";
import Image, { ImageLoader } from "next/image";
import "../styles/carousel.css";
type PostProps = {
  post: Post;
};

export default function PostCard({ post }: PostProps) {
  const imageLoader: ImageLoader = ({ src, width, quality }: any) => {
    return `https://uridongnae.com/${src}?w=${width || 200}&q=${quality || 75}`;
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* <a href={post.path}> */}
      <Image
        loader={imageLoader}
        src={post.image}
        alt={post.image}
        layout="fill" // 부모 요소에 맞춰 채움
        objectFit="cover" // 이미지 비율을 유지하면서 컨테이너에 맞춤
        // priority
        placeholder="blur"
        blurDataURL="/images/songdo_blur.jpg"
        loading="lazy"
        // objectFit="contain" // TODO: mobile 일떄, 이미지 변경하기
      />

      {/* </a> */}
      {/* <h3>{post.title}</h3> */}
      {/* <p>{post.excerpt}</p> */}
      {/* <small>{post.date}</small> */}
    </div>
  );
}

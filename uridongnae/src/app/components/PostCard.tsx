import { Post } from "./CarouselPosts";
import Image from "next/image";
import "../styles/carousel.css";
type PostProps = {
  post: Post;
};

export default function PostCard({ post }: PostProps) {
  return (
    <div style={{ height: "100vh" }}>
      <a href={post.path}>
        <Image
          src={post.image}
          alt={post.title}
          layout="fill" // 부모 요소에 맞춰 채움
          objectFit="contin" // 이미지 비율을 유지하면서 컨테이너에 맞춤
        />
      </a>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      {/* <small>{post.date}</small> */}
    </div>
  );
}

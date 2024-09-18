import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";
// export default async function CarouselPosts() {
export type Post = {
  path: string; // 포스트의 고유 경로
  title: string; // 포스트 제목
  excerpt: string; // 포스트 요약
  image: string; // 포스트에 사용할 이미지 URL
  // date: string; // 포스트 날짜
};
const posts: Post[] = [
  {
    path: "https://www.naver.com/",
    title: "First Post",
    excerpt: "This is a summary of the first post.",
    image: "/images/new_one.png",
    // date: "2024-09-01",
  },
  {
    path: "/post2",
    title: "Second Post",
    excerpt: "This is a summary of the second post.",
    image: "/images/new_tow.png",
    // date: "2024-09-05",
  },
  {
    path: "/post3",
    title: "Second Post",
    excerpt: "This is a summary of the second post.",
    image: "/images/uri.png",
    // date: "2024-09-05",
  },
  {
    path: "/post4",
    title: "Second Post",
    excerpt: "This is a summary of the second post.",
    image: "/images/carousel_logo.png",
    // date: "2024-09-05",
  },
  // ... 더 많은 포스트 객체들
];
export default function CarouselBannerPosts() {
  return (
    <section style={{ paddingTop: 120 }}>
      <h2>test</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}

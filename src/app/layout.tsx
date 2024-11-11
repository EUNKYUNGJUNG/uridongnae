import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "우리동네 부동산",
  description: "부동산",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="description"
        content={
          "AtoZ까지 모든 것을 다 알아서 알려주고 다 해주는 부동산 전문가 우리동네 부동산입니다."
        }
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={"우리동네 부동산"} />
      <meta property="og:description" content={"우리동네 부동산"} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="author" content="uridongnae" />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="우리동네 부동산, 부동산, 부동산 전문가"
      ></meta>
      <meta property="og:url" content={"https://www.uridongnae.com"} />
      <meta
        property="og:image"
        content={"https://www.uridongnae.com/images/carousel_logo.png"}
      />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content="uridongnae" />
      <meta property="og:site_name" content="우리동네 부동산" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

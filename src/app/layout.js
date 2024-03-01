import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pakistan Cricket Stream",
  description: "Explore the thrill of Pakistan cricket live streaming on our dedicated website. Immerse yourself in the excitement of every boundary, wicket, and match-changing moment as we bring you high-quality, real-time streams of Pakistan's cricket action. From international clashes to domestic tournaments, experience the passion of the game right from your screen. Stay updated with live scores, insightful commentary, and exclusive content, making our platform your go-to destination for an immersive Pakistan cricket viewing experience. Don't miss a single delivery – join us for an unparalleled journey through the heart of Pakistan's cricketing triumphs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
         <Script
          type="text/javascript"
          src="//www.topcreativeformat.com/6b26e94c5e18432a04d766fb715b3b5b/invoke.js"
        />
      </head>
      <body className={inter.className}>{children}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></Script>
      </body>
    </html>
  );
}

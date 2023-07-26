import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Roboto, Dancing_Script } from "next/font/google";
import { pages, aboutMeData } from "./data/data";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

// const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-gray min-h-screen min-w-screen"

        // className={roboto.className}
      >
        <Header name={aboutMeData.name} pages={pages} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

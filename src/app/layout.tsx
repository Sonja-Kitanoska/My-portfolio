import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Roboto, Dancing_Script } from "next/font/google";
import { pages } from "./data/data";
import ThemeProvider from "./contexts/ThemeProvider";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

// const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

// export const metadata = {
//   title: "Sonja's portfolio",
//   description: "Generated by create next app"
// };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full">
        <ThemeProvider>
          <Header name="Sonja Kitanoska" pages={pages} />
          <main className="mt-36 mb-6 md:mt-40 xl:text-xl">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

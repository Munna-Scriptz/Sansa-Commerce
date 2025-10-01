import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import ResNavbar from "./components/common/ResNavbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });


export const metadata = {
  title: "Sansa E-Commerce",
  description: "Sansa E-Commerce by munna scriptz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <ProgressBarProvider >
          <ProgressBar className="fixed z-[999] h-1 shadow-lg shadow-sky-500/20 bg-[#8AC732] top-0" />
          <Navbar />
          <ResNavbar />
          {children}
          <Footer />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
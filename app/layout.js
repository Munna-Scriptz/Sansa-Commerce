import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });


export const metadata = {
  title: "Sansa E-Commerce",
  description: "Sansa E-Commerce by munna scriptz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
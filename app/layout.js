import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sansa E-Commerce",
  description: "Sansa E-Commerce by munna scriptz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
import Navbar from "./components/Navbar";
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
      </body>
    </html>
  );
}
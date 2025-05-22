import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata = {
  title: "IP Address Tracker",
  description: "map search using ip and domain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        {children}
      </body>
    </html>
  );
}

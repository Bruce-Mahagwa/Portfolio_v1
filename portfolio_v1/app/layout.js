import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bruce Mahagwa Portfolio",
  description: "Hosts the Portfolio of Bruce Mahagwa, software engineer, full stack web developer, and data analyst",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

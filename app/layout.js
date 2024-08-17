import { Inter } from "next/font/google";
import "./globals.css";
import "./global.scss";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indie Hacker Kit",
  description: "Launch your Saas Today",
};

export default function RootLayout({ children, className = "" }) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <main className={`main relative overflow-hidden ${className}`}> */}

        {/* <main className={`main relative overflow-hidden`}> */}
        <body className={inter.className}>
          <Header />
          {children}
        </body>
        {/* </main> */}
      </html>
    </ClerkProvider>
  );
}

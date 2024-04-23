import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBarTop from "../components/layout/NavBarTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vue Storefront Next.js Starter",
  description: "Vue Storefront Next.js Starter",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarTop />
        {children}
      </body>
    </html>
  );
}

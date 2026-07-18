import "./globals.css";
import Link from "next/link";
import type { RootLayoutProps } from "@/app/types";
import Navbar from "@/app/components/Navbar";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.className} ${montserratAlternates.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

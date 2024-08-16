
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import {
  ClerkProvider,

} from '@clerk/nextjs'
import './globals.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FlashMind AI",
  description: "Learn, Practice, and Grow with FlashMind AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
  
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}

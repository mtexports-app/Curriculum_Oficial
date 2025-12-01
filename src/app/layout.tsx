import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Christian Barillas | Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Christian Barillas, a Full Stack Developer specializing in Next.js, AI integration, and premium web experiences. Creator of mtexports.app.",
  keywords: ["Full Stack Developer", "Next.js", "AI", "React", "El Salvador", "Web Development", "mtexports"],
  openGraph: {
    title: "Christian Barillas | Full Stack Developer",
    description: "Building the future of web with AI and premium design.",
    type: "website",
    locale: "en_US",
    url: "https://christianbarillas.com", // Replace with actual URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white antialiased selection:bg-blue-500/30`}>
        <Navbar />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <footer className="py-8 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Christian Barillas. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

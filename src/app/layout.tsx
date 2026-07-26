import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amit Parihar",
  description: "Amit Parihar is a Full Stack Developer who builds accessible, pixel-perfect digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased scroll-smooth`}>
      <body className={`${poppins.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300/30 selection:text-teal-900`}>
        {children}
      </body>
    </html>
  );
}

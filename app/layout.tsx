import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template NextJS App + MongoDB => Docker + Nginx",
  description: "Template de exemplo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen w-screen flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl mb-48">Rgm Software</h1>

          {children}

          <nav className="w-full text-red-800 ">
            <ul className="flex justify-center items-center gap-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/dados">Dados</Link>
              </li>
            </ul>
          </nav>
        </main>
      </body>
    </html>
  );
}

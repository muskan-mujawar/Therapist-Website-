import "./globals.css";
import Image from "next/image";
import { Tinos } from "next/font/google";

export const metadata = {
  title: "Your Page Title",
  description: "Your description",
};

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`section ${tinos.className}`}>
        <div className="flex mt-[3em] md:ps-[12em] ">
          <Image src="/logo.svg" width={50} height={50} alt="Logo" />
          <div className="text-[#607769]">
            <h1>Dr. Serena Blake, PsyD.</h1>
            <h1>(Clinical Psychologist)</h1>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

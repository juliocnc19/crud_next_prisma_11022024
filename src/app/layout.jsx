import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crud con primas y sqlite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}

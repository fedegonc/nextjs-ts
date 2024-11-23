import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/Navbar.tsx"; // Componente de navegación
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Barra de navegación global */}
        <Navbar />
        {/* Contenido principal */}
        <main>{children}</main>
        {/* Pie de página */}
        <footer className="text-center py-4 text-gray-500">
          © 2024 Mi Aplicación. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}

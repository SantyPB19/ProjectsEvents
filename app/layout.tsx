import type { Metadata } from "next";
import { Nunito, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// ✅ Fuentes bien configuradas
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// ✅ Metadata organizada
export const metadata: Metadata = {
  title: "Sistema de Autenticación",
  description: "Login con roles y dashboards personalizados",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

// ✅ Layout limpio + estilos base claros
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`
          ${nunito.variable} 
          ${geistMono.variable} 
          font-sans 
          antialiased 
          bg-[#fdf6f9] 
          text-gray-800
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

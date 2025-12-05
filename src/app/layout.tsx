import type { Metadata } from "next";
import { Nunito, Figtree } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "La Green Touch - Livraison de plantes à domicile",
  description: "Livraison de plantes d'intérieur en direct producteur facile d'entretien, pour décorer votre intérieur ou offrir un cadeau durable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <ClientBody className={`${nunito.variable} ${figtree.variable} font-sans`}>
        {children}
      </ClientBody>
    </html>
  );
}

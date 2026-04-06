import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/lib/ModalContext";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GMB Curtains & Blinds | Premium Window Treatments",
  description: "Bespoke curtains, motorized blinds, and smart window treatments tailored to your dimensions. Transform your space with GMB's expert craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ModalProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ModalProvider>
      </body>
    </html>
  );
}

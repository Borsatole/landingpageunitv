import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UniTv Menor Preço - Recarga Imediata e IPTV de Qualidade",
    template: "%s | UniTv Menor Preço",
  },
  description:
    "Assista aos melhores canais, filmes e séries com a UniTv. Recarga imediata, planos acessíveis e total segurança para você aproveitar o melhor do entretenimento.",
  keywords: [
    "UniTv",
    "Unitv Menor Preço",
    "IPTV",
    "TV Online",
    "Recarga Imediata",
    "Canais Ao Vivo",
    "Filmes e Séries",
    "Assinatura IPTV",
    "IPTV Barato",
    "Planos UniTv",
    "Unitv Anual",
    "Unitv Mensal",
    "Unitv Trimestral",
    "Baixar UniTv",
  ],
  authors: [
    {
      name: "UniTv Menor Preço",
      url: "https://unitvmenorpreco.playnetapp.com",
    },
  ],
  icons: {
    icon: "/logotipo.svg",
  },
  publisher: "UniTv Menor Preço",
  metadataBase: new URL("https://unitvmenorpreco.playnetapp.com"),
  alternates: {
    canonical: "https://unitvmenorpreco.playnetapp.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "UniTv - IPTV com Recarga Imediata e o Menor Preço do Brasil",
    description:
      "Assista aos melhores canais, filmes e séries com recarga imediata. IPTV 100% seguro, rápido e estável!",
    url: "https://unitvmenorpreco.playnetapp.com",
    siteName: "UniTv Menor Preço",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logotipo.svg", // ideal: imagem 1200x630 otimizada
        width: 1200,
        height: 630,
        alt: "UniTv Recarga Imediata e IPTV Menor Preço",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@unitv", // use o seu @ se tiver Twitter/X
    creator: "@unitv",
    title: "UniTv - IPTV com Recarga Imediata e o Menor Preço do Brasil",
    description:
      "Assine UniTv e tenha acesso imediato aos melhores canais, filmes e séries com total segurança.",
    images: ["/og-image.jpg"],
  },
  category: "entretenimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

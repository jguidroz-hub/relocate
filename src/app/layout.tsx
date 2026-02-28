import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relocate by Greenbelt — AI-Powered Relocation Reports",
  description:
    "Personalized AI relocation reports for families moving abroad. Schools, safety, taxes, cost of living — matched to your family. $149 per city.",
  openGraph: {
    title: "Relocate by Greenbelt — Know Before You Move",
    description:
      "AI-powered relocation intelligence. Personalized reports covering schools, safety, taxes, cost of living, and vetted local contacts.",
    url: "https://relocate.projectgreenbelt.com",
    type: "website",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Relocate by Greenbelt',
  description: 'AI-powered relocation reports for families moving abroad. Schools, safety, taxes, cost of living — matched to your family.',
  url: 'https://relocate.projectgreenbelt.com',
  provider: {
    '@type': 'Organization',
    name: 'Greenbelt Ventures',
    url: 'https://projectgreenbelt.com',
  },
  offers: {
    '@type': 'Offer',
    price: '149',
    priceCurrency: 'USD',
    description: 'Personalized AI relocation report per city',
  },
  areaServed: ['Colombia', 'Portugal', 'Spain', 'Mexico', 'Costa Rica', 'Ecuador'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased font-[Inter,sans-serif]">
        {children}
      </body>
    </html>
  );
}

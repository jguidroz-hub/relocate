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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is this different from just asking ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each report uses 9 specialized research prompts tuned by relocation experts, personalized to your family\'s specific situation. The output is a professionally formatted 50+ page document with honest downsides included.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly will I receive my report?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reports are generated and delivered to your email within 24 hours of payment, typically much sooner.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I\'m not satisfied?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a full refund within 7 days, no questions asked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I order reports for multiple cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Many families order 2-3 reports to compare cities side by side. Each report is $149.',
      },
    },
  ],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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

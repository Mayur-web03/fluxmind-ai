import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FluxMind AI — Automate. Analyze. Predict. Scale.',
  description:
    'FluxMind AI is an intelligent automation operating system for data teams. Automate pipelines, analyze in real-time, and predict outcomes at scale.',
  keywords: [
    'AI automation',
    'data pipeline',
    'machine learning platform',
    'data automation',
    'AI SaaS',
    'FluxMind',
  ],
  authors: [{ name: 'FluxMind AI' }],
  creator: 'FluxMind AI',
  metadataBase: new URL('https://fluxmind.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fluxmind.ai',
    title: 'FluxMind AI — Automate. Analyze. Predict. Scale.',
    description:
      'Intelligent automation operating system for data teams. Build, deploy, and scale AI pipelines without the complexity.',
    siteName: 'FluxMind AI',
    images: [
      {
        url: '/og/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FluxMind AI — AI Automation Operating System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FluxMind AI — Automate. Analyze. Predict. Scale.',
    description:
      'Intelligent automation operating system for data teams.',
    images: ['/og/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
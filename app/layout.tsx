import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veilr - Online Privacy",
  description: "Make your online life private and secure",
  keywords: [
    "veilr",
    "privacy",
    "security",
    "anonymity",
    "digital privacy",
    "online security",
    "internet privacy",
    "cybersecurity",
    "data protection",
    "privacy guide",
  ],
  applicationName: "Veilr",
  creator: "@hugoqdesh",
  // robots: "index, follow",
  openGraph: {
    title: "Veilr - Online Privacy",
    description: "Make your online life private and secure",
    url: "/opengraph-image.png",
    siteName: "Veilr",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    title: "Veilr - Online Privacy",
    description: "Make your online life private and secure",
    card: "summary_large_image",
    creator: "@hugoqdesh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matt Photography",
  description: "Fine-art wedding photography — book your date.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        {/* Design fonts — referenced by name in the converted screen markup */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Mulish:wght@300;400;500;600;700&display=swap"
        />
        {children}
      </body>
    </html>
  );
}

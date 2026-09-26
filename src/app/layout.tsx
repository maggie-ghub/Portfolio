import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meargportfolio.netlify.app"),
  title: "Mearg Gebremedhn",
  description:
    "Full-stack developer building permission systems, document platforms, and infrastructure-minded web apps with Vue 3, React, and Node.js.",
  openGraph: {
    title: "Mearg Gebremedhn",
    description:
      "Full-stack developer building permission systems, document platforms, and infrastructure-minded web apps with Vue 3, React, and Node.js.",
    url: "https://meargportfolio.netlify.app",
    siteName: "Mearg Gebremedhn",
    images: ["/images/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mearg Gebremedhn",
    description:
      "Full-stack developer building permission systems, document platforms, and infrastructure-minded web apps.",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

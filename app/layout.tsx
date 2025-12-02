import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"

/* 
  =============================================
  FONTS CONFIGURATION - Change fonts here
  =============================================
  Currently using:
  - Montserrat: Clean, modern sans-serif for body text
  - Playfair Display: Elegant serif for headings
  
  To change fonts, replace the imports above.
  Google Fonts alternatives: Open Sans, Roboto, Lato, Merriweather
*/
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Prime Locations | Find Your Next Business Location",
  description:
    "Expert commercial real estate services to help you find the perfect business location. Professional guidance for retail spaces, offices, and commercial properties.",
  keywords: ["commercial real estate", "business location", "retail space", "office space", "commercial property"],
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Prime Locations | Find Your Next Business Location",
    description: "Expert commercial real estate services to help you find the perfect business location.",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c4703e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

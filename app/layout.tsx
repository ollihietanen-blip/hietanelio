import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageWrapper } from "@/components/language-wrapper";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hietaneliö Oy | Omistaja, rakennuttaja ja sijoittaja",
  description:
    "Hietaneliö Oy on kankaanpääläinen kiinteistöyhtiö, joka toimii osana Area Group -yrityskonsortiota ja yhdistää omistamisen, rakennuttamisen, sijoittamisen ja hankekehityksen.",
  metadataBase: new URL("https://hietanelio.fi"),
  openGraph: {
    title: "Hietaneliö Oy",
    description:
      "Kankaanpäästä toimiva kiinteistöyhtiö, joka yhdistää omistamisen, rakennuttamisen, sijoittamisen ja hankekehityksen.",
    url: "https://hietanelio.fi",
    locale: "fi_FI",
    siteName: "Hietaneliö Oy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <body
        className={`${workSans.variable} ${playfair.variable} bg-background text-foreground antialiased`}
      >
        <LanguageProvider>
          <LanguageWrapper>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}

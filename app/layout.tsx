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
  title: "Hietaneliö Oy | Vastuullista kiinteistöomistamista",
  description:
    "Hietaneliö Oy on Satakunnan alueen kiinteistösijoittaja, joka tarjoaa vakaan tuoton ja laadukkaat tilat kasvaville yrityksille.",
  metadataBase: new URL("https://hietanelio.fi"),
  openGraph: {
    title: "Hietaneliö Oy",
    description:
      "Vastuullista kiinteistöomistamista ja tilaa kasvulle Kankaanpäässä.",
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

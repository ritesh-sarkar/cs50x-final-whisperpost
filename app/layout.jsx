import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Poppins, Inter } from "next/font/google";
import ConditionalMainHeader from "@/app/components/ConditionalMainHeader";
import ConditionalFooter from "@/app/components/ConditionalFooter";
import { Authprovider } from "@/lib/Authprovider";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "WhisperPost - Send & Receive Anonymous Messages",
  description:
    "WhisperPost lets you create a profile and receive anonymous messages securely and easily. Share your link and get honest feedback from friends or strangers.",
  keywords: [
    "WhisperPost",
    "anonymous message",
    "send secret message",
    "receive anonymous feedback",
    "anonymous chat tool",
    "whisper link",
    "get messages secretly",
    "no identity message",
  ],
  metadataBase: new URL("https://whisper-post.vercel.app"),
  openGraph: {
    title: "WhisperPost - Anonymous Messaging Platform",
    description:
      "Create your profile, share your link, and receive anonymous messages with WhisperPost. 100% free and privacy-focused.",
    url: "https://whisper-post.vercel.app",
    siteName: "WhisperPost",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "WhisperPost Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhisperPost | Send Anonymous Messages",
    description:
      "Receive anonymous feedback from anyone. Simple, private, and easy to use.",
    images: ["/og.webp"],
    creator: "Ritesh Sarkar",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body
        className={`
          ${poppins.variable}
          ${inter.variable}
          antialiased
          h-full
          w-full
          bg-gray-50
          text-gray-800
          overflow-x-hidden
          font-inter
          select-none
        `}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            success: {
              style: {
                background: "#22c55e",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#16a34a",
              },
            },
            error: {
              style: {
                background: "#ef4444",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#b91c1c",
              },
            },
          }}
        />

        <Authprovider>
          <ConditionalMainHeader />
          {children}
          <Analytics />
          <ConditionalFooter />
        </Authprovider>
      </body>
    </html>
  );
}

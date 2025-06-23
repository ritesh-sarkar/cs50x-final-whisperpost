import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Poppins, Inter } from "next/font/google";
import ConditionalMainHeader from "@/app/components/ConditionalMainHeader";
import ConditionalFooter from "@/app/components/ConditionalFooter";
import { Authprovider } from "@/lib/Authprovider";

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
  title: "Whisper Post",
  description: "Whisper Post",
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
                background: "#22c55e", // Tailwind green-500
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#16a34a", // Tailwind green-600
              },
            },
            error: {
              style: {
                background: "#ef4444", // Tailwind red-500
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#b91c1c", // Tailwind red-700
              },
            },
          }}
        />

        <Authprovider>
          <ConditionalMainHeader />
          {children}
          <ConditionalFooter />
        </Authprovider>
      </body>
    </html>
  );
}

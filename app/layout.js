import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import Image from "next/image";
import { Analytics } from '@vercel/analytics/next';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SENSAI - AI Career Buddy",
  description:
    "SENSAI is your AI-powered training platform designed to help you develop the right skills, ace interviews, and land your dream job with your own AI career guidance.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*HEADER*/}
            <Header />

            {/*MAIN*/}
            <main className="min-h-screen">{children}</main>
            <Toaster position="bottom-right" richColors />
            {/*FOOTER*/}
            <footer className="bg-muted/50 py-7">
              <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={200}
                    height={200}
                    className="cursor-pointer object-contain py-1 h-12 w-auto"
                  />
                </Link>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  © Copyright 2025. All Rights Reserved.
                </p>
                <div className="flex -mx-2">
                  <Link
                    href="https://www.linkedin.com/in/prasadarugollu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,38h-5V20h5V38z
                              M14.5,17.43c-1.61,0-2.93-1.32-2.93-2.93c0-1.61,1.32-2.93,2.93-2.93c1.61,0,2.93,1.32,2.93,2.93
                              C17.43,16.11,16.11,17.43,14.5,17.43z M38,38h-5v-9.42c0-2.25-0.04-5.15-3.14-5.15c-3.14,0-3.62,2.45-3.62,4.98V38h-5V20h4.8v2.46
                              h0.07c0.67-1.26,2.31-2.6,4.76-2.6c5.1,0,6.04,3.36,6.04,7.72V38z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://github.com/Prasad-Arugollu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Github"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}

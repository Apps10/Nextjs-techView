import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Lato } from "next/font/google"
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400','700','900']
})

export const metadata: Metadata = {
  title: "TechView App",
  description: "Aplicacion para prepararse para las entrevistas tecnicas "
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", lato.className)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

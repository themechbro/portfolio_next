import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Adrin T Paul",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

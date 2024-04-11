import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DrawerAppBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import styles from "./layout.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DrawerAppBar />
        <main className={styles.main}>
          <div className={styles.center}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

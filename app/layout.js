import "./globals.css";
import { Inter } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dreamescape",
  description: "Your One-Stop Shop for Travel Dreams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

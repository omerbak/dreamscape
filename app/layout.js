import "./globals.css";
import { Inter } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import Nav from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Dreamescape",
  description: "Your One-Stop Shop for Travel Dreams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Nav />
        </AuthProvider>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "../globals.css";
import Footer from "../components/Footer";
import HeaderLanding from "../components/HeaderLanding";
import AuthContextProvider from "../contexts/authContext";


export const metadata: Metadata = {
  title: "Digital Money House",
  description: "Digital Money House",
};

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <HeaderLanding />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}

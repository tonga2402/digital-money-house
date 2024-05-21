import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";
import './auth.css'


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <HeaderAuth />
        {children}
        <Footer />
      </body>
    </html>
  );
}

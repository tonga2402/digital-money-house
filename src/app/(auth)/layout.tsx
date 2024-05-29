import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";
import AuthContextProvider from "../contexts/authContext";
import './auth.css'


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
      <AuthContextProvider>
          <HeaderAuth />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <div>
        <div className="absolute inset-0 h-24 bg-center" style={{ backgroundImage: "url('/image-1.jpg')" }}></div>
      <div className="absolute inset-0 h-32 backdrop-filter backdrop-blur-sm"></div>
      <div className="absolute inset-0 h-28 bg-blue-950 opacity-60"></div>
      <Navbar />
        </div>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
     <div className={"flex flex-col min-h-screen"}>
        <Header/>
      <main className="flex-grow">{children}</main>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
import Navbar from "@/components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar  />
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

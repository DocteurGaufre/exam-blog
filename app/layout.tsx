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
        <main className="bg-[#ffbb83] min-h-screen">
          <Navbar  />
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

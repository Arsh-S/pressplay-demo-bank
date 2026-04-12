import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/sidebar";

export const metadata: Metadata = {
  title: "NeoBank - Dashboard",
  description: "Modern banking dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50 antialiased">
        <Sidebar />
        <main className="ml-64 flex-1 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}

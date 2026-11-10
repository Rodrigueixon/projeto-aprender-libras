import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinaliza — Plataforma Gamificada de Ensino de Libras",
  description:
    "Aprenda a Língua Brasileira de Sinais de forma intuitiva, visual e gamificada. Desde o alfabeto manual até conversações cotidianas.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤟</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
        {children}
      </body>
    </html>
  );
}

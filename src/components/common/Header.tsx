import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-slate-200 bg-white/90 px-6 md:px-12 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-3d-primary text-2xl group-hover:scale-105 transition-transform">
          🤟
        </div>
        <div>
          <span className="text-2xl font-black text-indigo-950 tracking-tight block leading-none">
            Sinaliza
          </span>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
            Aprenda Libras
          </span>
        </div>
      </Link>

      <nav className="flex items-center gap-3">
        <Link href="/login">
          <Button variant="outline" size="sm">
            Entrar
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="3d-primary" size="sm">
            Começar Grátis
          </Button>
        </Link>
      </nav>
    </header>
  );
}

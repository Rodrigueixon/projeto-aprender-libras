"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  Trophy,
  User,
  LineChart,
  Home,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    href: "/learn",
    label: "Aprender",
    icon: Compass,
    badge: "Principal",
  },
  {
    href: "/dashboard",
    label: "Painel",
    icon: Home,
  },
  {
    href: "/progress",
    label: "Progresso",
    icon: LineChart,
  },
  {
    href: "/achievements",
    label: "Conquistas",
    icon: Trophy,
  },
  {
    href: "/profile",
    label: "Perfil",
    icon: User,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar (Fixa à esquerda) */}
      <aside className="hidden md:flex h-screen w-64 flex-col border-r border-slate-200 bg-white p-4 fixed left-0 top-0 z-40">
        {/* Brand / Logo */}
        <Link
          href="/learn"
          className="flex items-center gap-3 px-3 py-4 mb-4 rounded-2xl hover:bg-slate-50 transition-colors"
        >
          <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-3d-primary text-2xl">
            🤟
          </div>
          <div>
            <h1 className="text-2xl font-black text-indigo-900 tracking-tight leading-none">
              Sinaliza
            </h1>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Aprenda Libras
            </span>
          </div>
        </Link>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1.5" aria-label="Navegação Principal">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href === "/learn" && pathname.startsWith("/lesson"));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3.5 px-4 py-3.5 rounded-2xl font-bold text-base transition-all select-none",
                  isActive
                    ? "bg-indigo-50 text-indigo-700 border-2 border-indigo-200 border-b-4 border-indigo-300 shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-2 border-transparent"
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 transition-transform",
                    isActive ? "text-indigo-600 scale-110" : "text-slate-500"
                  )}
                />
                <span className="flex-1">{item.label}</span>
                {item.badge && !isActive && (
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-lg bg-indigo-100 text-indigo-700">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mascote Card de Apoio no rodapé */}
        <div className="mt-auto p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/60 border border-indigo-200/80">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl" role="img" aria-label="Mascote Tico">
              🐵
            </span>
            <div>
              <p className="text-xs font-black text-indigo-900">Mascote Tico</p>
              <p className="text-[11px] text-indigo-700 font-semibold leading-tight">
                "Pratique 5 min todo dia para manter a ofensiva!"
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-slate-200 bg-white/95 px-2 backdrop-blur-md"
        aria-label="Navegação Mobile"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full py-1 rounded-xl transition-all",
                isActive
                  ? "text-indigo-600 font-bold"
                  : "text-slate-500 hover:text-slate-900"
              )}
            >
              <div
                className={cn(
                  "p-1.5 rounded-xl transition-all",
                  isActive && "bg-indigo-50"
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold tracking-tight mt-0.5">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

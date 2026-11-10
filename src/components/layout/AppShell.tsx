import React from "react";
import { Sidebar } from "@/components/common/Sidebar";
import { TopStats } from "@/components/common/TopStats";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 md:pl-64 flex flex-col min-w-0">
        <TopStats />
        <main className="flex-1 p-4 sm:p-6 md:p-8 pb-24 md:pb-12 max-w-5xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}

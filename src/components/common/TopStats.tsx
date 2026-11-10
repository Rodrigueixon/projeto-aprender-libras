import React from "react";
import Link from "next/link";
import { LivesIndicator } from "./LivesIndicator";
import { StreakIndicator } from "./StreakIndicator";
import { XpIndicator } from "./XpIndicator";
import { Avatar } from "@/components/ui/avatar";
import { mockUserProfile, mockUserStats } from "@/services/mock/userData";

interface TopStatsProps {
  lives?: number;
  streak?: number;
  xp?: number;
  avatarUrl?: string;
  username?: string;
}

export function TopStats({
  lives = mockUserStats.lives,
  streak = mockUserStats.streak,
  xp = mockUserStats.xp,
  avatarUrl = mockUserProfile.avatarUrl,
  username = mockUserProfile.username,
}: TopStatsProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/90 px-4 md:px-8 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Link href="/learn" className="flex items-center gap-2 group md:hidden">
          <span className="text-2xl">🤟</span>
          <span className="font-extrabold text-indigo-900 tracking-tight text-lg">
            Sinaliza
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-4">
        <LivesIndicator lives={lives} />
        <StreakIndicator streak={streak} />
        <XpIndicator xp={xp} />

        <Link href="/profile" className="transition-transform hover:scale-105 active:scale-95 ml-1">
          <Avatar
            src={avatarUrl}
            fallbackText={username}
            size="md"
            className="border-indigo-400"
          />
        </Link>
      </div>
    </header>
  );
}

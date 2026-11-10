import React from "react";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface XpIndicatorProps {
  xp: number;
  className?: string;
}

export function XpIndicator({ xp, className }: XpIndicatorProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-indigo-50 border border-indigo-200/80 font-extrabold text-indigo-700 shadow-sm text-sm select-none transition-all hover:bg-indigo-100/60",
        className
      )}
      title={`${xp} Pontos de Experiência`}
      aria-label={`${xp} XP`}
    >
      <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-xs">
        <Zap className="w-3.5 h-3.5 fill-current" />
      </div>
      <span>{xp} XP</span>
    </div>
  );
}

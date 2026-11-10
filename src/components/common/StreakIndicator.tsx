import React from "react";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakIndicatorProps {
  streak: number;
  isActive?: boolean;
  className?: string;
}

export function StreakIndicator({
  streak,
  isActive = true,
  className,
}: StreakIndicatorProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-50 border border-amber-200/80 font-extrabold text-amber-700 shadow-sm text-sm select-none transition-all hover:bg-amber-100/60",
        !isActive && "opacity-60 grayscale",
        className
      )}
      title={`${streak} dias consecutivos de estudo`}
      aria-label={`Ofensiva de ${streak} dias`}
    >
      <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-xs animate-pulse">
        <Flame className="w-3.5 h-3.5 fill-current" />
      </div>
      <span>{streak}</span>
    </div>
  );
}

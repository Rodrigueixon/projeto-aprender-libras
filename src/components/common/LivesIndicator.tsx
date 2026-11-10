import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface LivesIndicatorProps {
  lives: number;
  maxLives?: number;
  className?: string;
}

export function LivesIndicator({
  lives,
  maxLives = 5,
  className,
}: LivesIndicatorProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-rose-50 border border-rose-200/80 font-extrabold text-rose-700 shadow-sm text-sm select-none transition-all hover:bg-rose-100/60",
        lives === 0 && "animate-pulse bg-rose-100 border-rose-300",
        className
      )}
      title={`${lives} de ${maxLives} corações de vida restantes`}
      aria-label={`${lives} vidas`}
    >
      <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-xs">
        <Heart className="w-3.5 h-3.5 fill-current" />
      </div>
      <span>{lives}</span>
    </div>
  );
}

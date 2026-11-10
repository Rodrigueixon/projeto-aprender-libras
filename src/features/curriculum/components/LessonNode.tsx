import React from "react";
import Link from "next/link";
import { Check, Lock, Play, Star, Trophy } from "lucide-react";
import { Lesson, LessonStatus } from "@/types/curriculum.types";
import { cn } from "@/lib/utils";

interface LessonNodeProps {
  lesson: Lesson;
  index: number;
}

export function LessonNode({ lesson, index }: LessonNodeProps) {
  const isAvailable = lesson.status === "available";
  const isCompleted = lesson.status === "completed";
  const isLocked = lesson.status === "locked";
  const isCheckpoint = lesson.lessonType === "checkpoint";

  // Deslocamento horizontal suave para criar o efeito zigue-zague da trilha
  const horizontalOffsets = ["translate-x-0", "translate-x-8", "-translate-x-8", "translate-x-4", "-translate-x-4"];
  const offsetClass = horizontalOffsets[index % horizontalOffsets.length];

  const nodeContent = (
    <div className={cn("relative flex flex-col items-center group", offsetClass)}>
      {/* Balão do Mascote sobre o nó ativo */}
      {isAvailable && (
        <div className="absolute -top-12 z-20 animate-bounce bg-indigo-600 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-2xl shadow-md border-b-2 border-indigo-900 flex items-center gap-1.5 whitespace-nowrap">
          <span>🐵 Comece aqui!</span>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-600 rotate-45" />
        </div>
      )}

      {/* Botão circular do nó */}
      <button
        disabled={isLocked}
        aria-label={`${lesson.title} - ${isCompleted ? "Concluída" : isAvailable ? "Disponível" : "Bloqueada"}`}
        className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center transition-all select-none relative",
          // Concluído (Esmeralda)
          isCompleted &&
            "bg-emerald-500 border-b-6 border-emerald-700 text-white shadow-3d-success hover:bg-emerald-600 active:translate-y-1 active:border-b-2",
          // Disponível / Atual (Índigo com anel pulsante)
          isAvailable &&
            "bg-indigo-600 border-b-6 border-indigo-900 text-white shadow-3d-primary ring-4 ring-indigo-300 ring-offset-2 animate-pulse hover:bg-indigo-700 active:translate-y-1 active:border-b-2 scale-105",
          // Bloqueado (Cinza)
          isLocked &&
            "bg-slate-200 border-b-6 border-slate-300 text-slate-400 cursor-not-allowed opacity-80",
          // Checkpoint / Prova (Dourado/Âmbar)
          isCheckpoint && !isLocked &&
            "bg-amber-500 border-b-6 border-amber-700 text-white shadow-3d-accent hover:bg-amber-600"
        )}
      >
        {isCompleted && <Check className="w-9 h-9 stroke-[3]" />}
        {isAvailable && <Play className="w-8 h-8 fill-current ml-1" />}
        {isLocked && <Lock className="w-7 h-7" />}
        {isCheckpoint && !isLocked && <Trophy className="w-9 h-9" />}
      </button>

      {/* Rótulo da Lição abaixo do nó */}
      <div className="mt-2.5 text-center max-w-[140px]">
        <p
          className={cn(
            "text-sm font-extrabold tracking-tight leading-tight",
            isAvailable ? "text-indigo-950 font-black" : "text-slate-700",
            isLocked && "text-slate-400"
          )}
        >
          {lesson.title}
        </p>
        <span className="text-[11px] font-bold text-amber-600">
          +{lesson.xpReward} XP
        </span>
      </div>
    </div>
  );

  if (isLocked) {
    return nodeContent;
  }

  return (
    <Link href={`/lesson/${lesson.id}`} className="cursor-pointer">
      {nodeContent}
    </Link>
  );
}

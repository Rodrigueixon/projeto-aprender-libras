import React from "react";
import Link from "next/link";
import { CheckCircle2, Lock, ArrowRight, Zap, Play } from "lucide-react";
import { Lesson } from "@/types/curriculum.types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  const isAvailable = lesson.status === "available";
  const isCompleted = lesson.status === "completed";
  const isLocked = lesson.status === "locked";

  return (
    <div
      className={cn(
        "p-5 rounded-2xl border-2 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
        isAvailable && "bg-indigo-50/50 border-indigo-200 shadow-sm",
        isCompleted && "bg-white border-emerald-200",
        isLocked && "bg-slate-50 border-slate-200 opacity-75"
      )}
    >
      <div className="flex items-start gap-3.5">
        <div
          className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-black",
            isCompleted && "bg-emerald-500 text-white shadow-3d-success",
            isAvailable && "bg-indigo-600 text-white shadow-3d-primary",
            isLocked && "bg-slate-200 text-slate-400"
          )}
        >
          {isCompleted && <CheckCircle2 className="w-6 h-6" />}
          {isAvailable && <Play className="w-6 h-6 fill-current ml-0.5" />}
          {isLocked && <Lock className="w-5 h-5" />}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4
              className={cn(
                "font-black text-base tracking-tight",
                isAvailable ? "text-indigo-950" : "text-slate-800",
                isLocked && "text-slate-500"
              )}
            >
              {lesson.title}
            </h4>
            {isCompleted && (
              <Badge variant="success" className="text-[10px]">
                Concluída
              </Badge>
            )}
            {isAvailable && (
              <Badge variant="default" className="text-[10px] animate-pulse">
                Atual
              </Badge>
            )}
          </div>
          <p className="text-sm text-slate-600 leading-snug font-medium">
            {lesson.description}
          </p>
          <div className="flex items-center gap-3 mt-2 text-xs font-bold text-amber-600">
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-current" />
              +{lesson.xpReward} XP
            </span>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-auto shrink-0">
        {isLocked ? (
          <Button variant="outline" size="sm" disabled className="w-full sm:w-auto">
            Bloqueada
          </Button>
        ) : (
          <Link href={`/lesson/${lesson.id}`} className="block w-full sm:w-auto">
            <Button
              variant={isCompleted ? "outline" : "3d-primary"}
              size="sm"
              className="w-full sm:w-auto gap-2"
            >
              <span>{isCompleted ? "Revisar" : "Começar"}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

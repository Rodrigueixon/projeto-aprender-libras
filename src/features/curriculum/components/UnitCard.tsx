import React from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { Unit } from "@/types/curriculum.types";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface UnitCardProps {
  unit: Unit;
  children?: React.ReactNode;
}

export function UnitCard({ unit, children }: UnitCardProps) {
  const completedLessons = unit.lessons.filter((l) => l.status === "completed").length;
  const totalLessons = unit.lessons.length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-sm">
      {/* Cabeçalho da Unidade */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 text-white relative">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-indigo-200">
              <BookOpen className="w-4 h-4" />
              Unidade {unit.order}
            </span>
            <h3 className="text-2xl font-black tracking-tight">{unit.title}</h3>
            <p className="text-sm text-indigo-100 font-medium max-w-lg">
              {unit.description}
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-xs">
            <Sparkles className="w-6 h-6 text-amber-300" />
          </div>
        </div>

        {/* Barra de Progresso da Unidade */}
        <div className="mt-5 space-y-1.5">
          <div className="flex justify-between text-xs font-bold text-indigo-100">
            <span>Progresso da Unidade</span>
            <span>
              {completedLessons} de {totalLessons} lições ({progressPercent}%)
            </span>
          </div>
          <Progress
            value={progressPercent}
            className="h-3 bg-indigo-950/30"
            indicatorClassName="bg-amber-400"
          />
        </div>
      </div>

      {/* Conteúdo: Nós ou Lista de Lições */}
      {children && <div className="p-6 md:p-8 bg-slate-50/50">{children}</div>}
    </div>
  );
}

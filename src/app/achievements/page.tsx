import React from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Zap, CheckCircle2, Lock } from "lucide-react";
import { mockAchievements } from "@/services/mock/userData";
import { cn } from "@/lib/utils";

export default function AchievementsPage() {
  const unlockedCount = mockAchievements.filter((a) => a.isUnlocked).length;

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Galeria de Conquistas 🏆
            </h1>
            <p className="text-sm font-semibold text-slate-600 mt-1">
              Desbloqueie medalhas exclusivas conforme avança nos seus estudos de Libras.
            </p>
          </div>
          <div className="px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-extrabold text-sm self-start sm:self-auto">
            {unlockedCount} de {mockAchievements.length} desbloqueadas
          </div>
        </div>

        {/* Grade de Conquistas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockAchievements.map((ach) => (
            <div
              key={ach.id}
              className={cn(
                "p-6 rounded-3xl border-2 transition-all flex items-start gap-4 select-none",
                ach.isUnlocked
                  ? "bg-white border-amber-300 shadow-xs"
                  : "bg-slate-50 border-slate-200 opacity-80"
              )}
            >
              {/* Ícone da Medalha */}
              <div
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 border-b-4",
                  ach.isUnlocked
                    ? "bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950 border-amber-600 shadow-3d-accent"
                    : "bg-slate-200 text-slate-400 border-slate-300"
                )}
              >
                {ach.badgeIcon}
              </div>

              {/* Informações da Conquista */}
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-black text-base text-slate-900 tracking-tight">
                    {ach.title}
                  </h3>
                  <Badge
                    variant={ach.isUnlocked ? "warning" : "secondary"}
                    className="gap-1 text-[11px]"
                  >
                    <Zap className="w-3 h-3 fill-current" />
                    +{ach.xpBonus} XP
                  </Badge>
                </div>

                <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                  {ach.description}
                </p>

                {/* Status / Progresso */}
                <div className="pt-2">
                  {ach.isUnlocked ? (
                    <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Desbloqueada em {ach.unlockedAt}
                    </span>
                  ) : (
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-bold text-slate-500">
                        <span>Progresso</span>
                        <span>{ach.progressPercent}%</span>
                      </div>
                      <Progress value={ach.progressPercent} className="h-2" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

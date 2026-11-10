import React from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Progress } from "@/components/ui/progress";
import { LineChart, Calendar, CheckCircle2, Award, Zap, Brain, BookOpen } from "lucide-react";
import { mockUserStats } from "@/services/mock/userData";

export default function ProgressPage() {
  const daysOfWeek = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const completedDays = [true, true, true, true, true, true, false]; // Domingo pendente

  return (
    <AppShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Seu Progresso 📈
          </h1>
          <p className="text-sm font-semibold text-slate-600 mt-1">
            Acompanhe sua consistência de estudo e domínio dos sinais em Libras.
          </p>
        </div>

        {/* Gráfico Semanal de Ofensiva */}
        <div className="p-6 md:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span>Atividade Semanal</span>
            </h2>
            <span className="text-xs font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
              🔥 Ofensiva: {mockUserStats.streak} dias seguidos
            </span>
          </div>

          <div className="grid grid-cols-7 gap-2 sm:gap-4 text-center">
            {daysOfWeek.map((day, idx) => {
              const isDone = completedDays[idx];
              const isToday = idx === 6;

              return (
                <div key={day} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm select-none transition-transform ${
                      isDone
                        ? "bg-amber-400 text-amber-950 border-b-4 border-amber-600 shadow-xs"
                        : isToday
                        ? "bg-indigo-50 border-2 border-dashed border-indigo-400 text-indigo-700 animate-pulse"
                        : "bg-slate-100 text-slate-400 border border-slate-200"
                    }`}
                  >
                    {isDone ? "🔥" : isToday ? "Hoje" : "—"}
                  </div>
                  <span className="text-xs font-bold text-slate-600">{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Métricas de Retenção e Vocabulário */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-3d-primary mb-4">
              🤟
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase">Sinais Fixados</span>
            <p className="text-3xl font-black text-slate-900 mt-1">26 Sinais</p>
            <p className="text-xs font-semibold text-slate-600 mt-2">
              Alfabeto manual e saudações básicas
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-3d-success mb-4">
              🎯
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase">Precisão Média</span>
            <p className="text-3xl font-black text-slate-900 mt-1">94%</p>
            <p className="text-xs font-semibold text-slate-600 mt-2">
              Baseado nas últimas 5 lições
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-3d-accent mb-4">
              ⚡
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase">Nível do Aluno</span>
            <p className="text-3xl font-black text-slate-900 mt-1">Nível {mockUserStats.level}</p>
            <div className="mt-2 space-y-1">
              <Progress
                value={(mockUserStats.currentLevelXp / mockUserStats.nextLevelXp) * 100}
                className="h-2"
              />
              <span className="text-[11px] font-bold text-slate-500 block text-right">
                {mockUserStats.currentLevelXp}/{mockUserStats.nextLevelXp} XP para Nível {mockUserStats.level + 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

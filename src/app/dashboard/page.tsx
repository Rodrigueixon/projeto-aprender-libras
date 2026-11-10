import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Flame, Zap, Heart, Trophy, ArrowRight, Play, BookOpen, Clock } from "lucide-react";
import { mockUserStats, mockUserProfile, mockAchievements } from "@/services/mock/userData";
import { getMockCourse } from "@/services/mock/curriculumData";

export default function DashboardPage() {
  const course = getMockCourse();
  const unlockedAchievements = mockAchievements.filter((a) => a.isUnlocked).length;

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Banner de Boas-Vindas */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-xl space-y-3">
            <span className="px-3 py-1 rounded-xl bg-white/20 text-xs font-black uppercase tracking-wider backdrop-blur-xs">
              Bem-vindo de volta!
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Olá, {mockUserProfile.fullName.split(" ")[0]}! 🤟
            </h1>
            <p className="text-indigo-100 font-medium text-sm sm:text-base">
              Você está a uma lição de manter sua sequência de 12 dias de estudos em Libras.
            </p>
            <div className="pt-2">
              <Link href="/lesson/lesson-2">
                <Button variant="3d-accent" size="lg" className="gap-2">
                  <Play className="w-5 h-5 fill-current" />
                  <span>Continuar: Letras N a Z (+10 XP)</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute right-6 -bottom-6 text-9xl opacity-20 hidden md:block select-none pointer-events-none">
            🐵
          </div>
        </div>

        {/* Cards de Métricas Vitais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-3d-accent shrink-0">
              🔥
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase">Ofensiva</span>
              <p className="text-2xl font-black text-slate-900">{mockUserStats.streak} Dias</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-3d-primary shrink-0">
              ⚡
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase">Total XP</span>
              <p className="text-2xl font-black text-slate-900">{mockUserStats.xp} XP</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-2xl shadow-3d-danger shrink-0">
              ❤️
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase">Vidas</span>
              <p className="text-2xl font-black text-slate-900">
                {mockUserStats.lives}/{mockUserStats.maxLives}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-3d-success shrink-0">
              🏆
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase">Conquistas</span>
              <p className="text-2xl font-black text-slate-900">
                {unlockedAchievements}/{mockAchievements.length}
              </p>
            </div>
          </div>
        </div>

        {/* Resumo da Trilha Ativa */}
        <div className="p-6 md:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-black uppercase text-indigo-600 tracking-wider">
                Curso Atual
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                {course.title}
              </h2>
            </div>
            <Link href="/learn">
              <Button variant="outline" size="sm" className="gap-2">
                <span>Ver Trilha Completa</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {course.units.map((unit) => {
              const completedCount = unit.lessons.filter((l) => l.status === "completed").length;
              const totalCount = unit.lessons.length;
              const percent = Math.round((completedCount / totalCount) * 100);

              return (
                <div
                  key={unit.id}
                  className="p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <span className="text-xs font-bold text-indigo-700 uppercase">
                      Unidade {unit.order}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-base">{unit.title}</h3>
                    <div className="mt-2 flex items-center gap-3">
                      <Progress value={percent} className="h-2.5 max-w-xs" />
                      <span className="text-xs font-bold text-slate-500">{percent}%</span>
                    </div>
                  </div>
                  <Link href="/learn">
                    <Button variant="3d-primary" size="sm">
                      Acessar Unidade
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

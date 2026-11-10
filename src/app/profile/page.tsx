import React from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Zap, Heart, Calendar, ShieldCheck, Settings, LogOut, BookOpen } from "lucide-react";
import { mockUserProfile, mockUserStats } from "@/services/mock/userData";

export default function ProfilePage() {
  return (
    <AppShell>
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Cartão de Identificação do Perfil */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <Avatar
            src={mockUserProfile.avatarUrl}
            fallbackText={mockUserProfile.username}
            size="xl"
            className="border-4 border-indigo-400 shrink-0"
          />

          <div className="flex-1 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {mockUserProfile.fullName}
                </h1>
                <p className="text-sm font-bold text-indigo-600">
                  @{mockUserProfile.username}
                </p>
              </div>
              <Badge variant="default" className="self-center sm:self-start">
                Nível {mockUserStats.level} • Estudante
              </Badge>
            </div>

            <p className="text-xs font-semibold text-slate-500 flex items-center justify-center sm:justify-start gap-1.5 pt-1">
              <Calendar className="w-3.5 h-3.5" />
              Membro desde Outubro de 2026
            </p>
          </div>
        </div>

        {/* Estatísticas Gerais */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Estatísticas Vitais 📊
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-2 font-black text-xl">
                🔥
              </div>
              <span className="text-2xl font-black text-slate-900 block">
                {mockUserStats.streak} Dias
              </span>
              <span className="text-xs font-bold text-slate-500">Ofensiva Atual</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 text-center">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-2 font-black text-xl">
                ⚡
              </div>
              <span className="text-2xl font-black text-slate-900 block">
                {mockUserStats.xp} XP
              </span>
              <span className="text-xs font-bold text-slate-500">Total Acumulado</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 text-center">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-2 font-black text-xl">
                ❤️
              </div>
              <span className="text-2xl font-black text-slate-900 block">
                {mockUserStats.lives}/5
              </span>
              <span className="text-xs font-bold text-slate-500">Corações de Vida</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2 font-black text-xl">
                🤟
              </div>
              <span className="text-2xl font-black text-slate-900 block">
                26
              </span>
              <span className="text-xs font-bold text-slate-500">Sinais Aprendidos</span>
            </div>
          </div>
        </div>

        {/* Preferências e Configurações */}
        <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-xs space-y-4">
          <h3 className="text-lg font-black text-slate-900 tracking-tight">
            Acessibilidade e Preferências
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <span className="font-extrabold text-sm text-slate-900 block">
                  Vibração Háptica em Respostas (Mobile)
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Fornece feedback tátil imediato em dispositivos móveis
                </span>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded-md border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <span className="font-extrabold text-sm text-slate-900 block">
                  Legendas com Glosa em Vídeos
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Exibe a transcrição do sinal em caixa alta abaixo do vídeo
                </span>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded-md border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <Button variant="outline" size="sm" className="gap-2">
              <Settings className="w-4 h-4" />
              <span>Editar Perfil</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-rose-600 hover:bg-rose-50">
              <LogOut className="w-4 h-4" />
              <span>Sair da Conta</span>
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

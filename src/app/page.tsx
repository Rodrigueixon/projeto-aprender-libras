import React from "react";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Heart, Sparkles, Video, Eye, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-700 font-extrabold text-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Aprenda Libras de Verdade</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Aprenda Libras de forma{" "}
              <span className="text-indigo-600 underline decoration-amber-400 decoration-wavy decoration-2">
                gratuita, divertida
              </span>{" "}
              e inclusiva.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-xl">
              Uma experiência gamificada feita para conectar pessoas. Domine o
              alfabeto manual, os parâmetros dos sinais e a gramática própria
              da Libras em lições rápidas de 5 minutos por dia.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
              <Link href="/learn" className="w-full sm:w-auto">
                <Button variant="3d-primary" size="lg" className="w-full sm:w-auto gap-3 text-lg">
                  <span>Começar a Aprender</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/login" className="w-full sm:w-auto">
                <Button variant="3d-neutral" size="lg" className="w-full sm:w-auto text-lg">
                  Já tenho uma conta
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Lei nº 10.436/2002
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-indigo-600" />
                100% Visual-First
              </span>
            </div>
          </div>

          {/* Hero Visual Card (Apresentação interativa do Mascote Tico e dos Sinais) */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-xl overflow-hidden">
              {/* Card Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-xl bg-indigo-100 text-indigo-700 text-xs font-extrabold uppercase">
                  Lição em Destaque
                </span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-lg">
                    <Heart className="w-3.5 h-3.5 fill-current mr-1" /> 5
                  </span>
                  <span className="flex items-center text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">
                    <Flame className="w-3.5 h-3.5 fill-current mr-1" /> 12
                  </span>
                </div>
              </div>

              {/* Simulação do Vídeo de Sinal em Libras */}
              <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 flex flex-col items-center justify-center text-white p-4 text-center relative overflow-hidden group">
                <div className="text-5xl mb-2 animate-bounce">🤟</div>
                <p className="font-black text-lg text-white">Sinal: "BOM-DIA"</p>
                <span className="text-xs text-indigo-200 font-semibold">
                  Vídeo demonstrativo com instrutor surdo
                </span>
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-black/50 text-[10px] font-bold">
                  0.75x • HD
                </div>
              </div>

              {/* Opções interativas demonstrativas */}
              <div className="mt-6 space-y-2.5">
                <p className="text-sm font-bold text-slate-700">
                  Qual é o significado deste sinal?
                </p>
                <div className="p-3.5 rounded-2xl bg-indigo-50 border-2 border-indigo-500 border-b-4 font-bold text-indigo-950 flex items-center justify-between text-sm">
                  <span>Bom Dia</span>
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
                    ✓
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-200 font-medium text-slate-600 text-sm">
                  Boa Noite
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <span className="text-xl">🐵</span>
                  <span>"Excelente! Você acertou!"</span>
                </div>
                <Link href="/learn">
                  <Button variant="3d-success" size="sm">
                    Experimentar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares da Metodologia */}
        <section className="bg-white border-t border-b border-slate-200 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Por que aprender Libras com o Sinaliza?
              </h2>
              <p className="text-slate-600 font-medium mt-2">
                Respeitamos a natureza linguística da Libras como língua autônoma e completa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-3d-primary mb-4">
                  🤟
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  5 Parâmetros Fonológicos
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Aprenda as Configurações de Mão, Pontos de Articulação, Movimento, Orientação e Expressões Não-Manuais de forma didática.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-3d-accent mb-4">
                  🔥
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  Gamificação Estimulante
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Mantenha sua ofensiva diária, acumule pontos de experiência (XP), desbloqueie medalhas e recarregue vidas praticando.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-3d-success mb-4">
                  👁️
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  100% Inclusivo e Acessível
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Nenhuma dependência de som. Totalmente operável por pessoas surdas e ouvintes, com alto contraste e navegação por teclado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-6 text-center text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-extrabold text-base">
            <span>🤟</span>
            <span>Sinaliza • Educação e Inclusão em Libras</span>
          </div>
          <p>© 2026 Sinaliza. Projeto Acadêmico em Ciência da Computação.</p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { X, Heart, Sparkles, Volume2, VolumeX, RotateCcw, ArrowRight, Zap, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { FeedbackBanner } from "@/components/common/FeedbackBanner";
import { getMockLesson } from "@/services/mock/curriculumData";
import { mockUserStats } from "@/services/mock/userData";
import { cn } from "@/lib/utils";

export default function LessonPlayerPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params?.id as string;
  const lesson = getMockLesson(lessonId || "lesson-2");

  const exercises = lesson?.exercises || [];
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedbackStatus, setFeedbackStatus] = useState<"idle" | "correct" | "incorrect">("idle");
  const [currentLives, setCurrentLives] = useState(mockUserStats.lives);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [earnedXp, setEarnedXp] = useState(0);

  const currentExercise = exercises[currentExerciseIndex];
  const progressPercent = exercises.length > 0
    ? Math.round((currentExerciseIndex / exercises.length) * 100)
    : 100;

  // Suporte a atalhos numéricos do teclado (1, 2, 3, 4, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (feedbackStatus !== "idle") {
        if (e.key === "Enter") {
          handleNext();
        }
        return;
      }

      if (!currentExercise) return;

      const keyNum = parseInt(e.key, 10);
      if (keyNum >= 1 && keyNum <= currentExercise.options.length) {
        setSelectedOptionId(currentExercise.options[keyNum - 1].id);
      } else if (e.key === "Enter" && selectedOptionId) {
        handleCheck();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentExercise, selectedOptionId, feedbackStatus]);

  const handleCheck = () => {
    if (!selectedOptionId || !currentExercise) return;

    const selectedOption = currentExercise.options.find((o) => o.id === selectedOptionId);
    if (selectedOption?.isCorrect) {
      setFeedbackStatus("correct");
      setEarnedXp((prev) => prev + 5);
    } else {
      setFeedbackStatus("incorrect");
      setCurrentLives((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    setFeedbackStatus("idle");
    setSelectedOptionId(null);

    if (currentExerciseIndex + 1 < exercises.length) {
      setCurrentExerciseIndex((prev) => prev + 1);
    } else {
      // Conclusão da lição
      setIsCompleted(true);
    }
  };

  if (!lesson || exercises.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-black text-slate-800 mb-2">Lição Prática ou em Construção</h2>
        <p className="text-slate-600 mb-6 max-w-md">
          Esta lição utiliza o módulo de câmera ou está sendo finalizada no currículo.
        </p>
        <Link href="/learn">
          <Button variant="3d-primary">Voltar para a Trilha</Button>
        </Link>
      </div>
    );
  }

  // Tela de Vitória / Conclusão
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95">
        <div className="w-24 h-24 rounded-3xl bg-amber-400 text-white flex items-center justify-center text-5xl shadow-3d-accent mb-6 animate-bounce">
          🏆
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
          Lição Concluída com Sucesso!
        </h1>
        <p className="text-slate-600 font-semibold mb-8 max-w-sm">
          Parabéns! Você avançou na sua jornada de aprendizado em Libras.
        </p>

        <div className="grid grid-cols-2 gap-4 w-full max-w-xs mb-8">
          <div className="p-4 rounded-2xl bg-indigo-50 border-2 border-indigo-200 text-center">
            <span className="text-xs font-black text-indigo-700 uppercase block mb-1">XP Ganho</span>
            <span className="text-2xl font-black text-indigo-900 flex items-center justify-center gap-1">
              <Zap className="w-5 h-5 fill-indigo-600 text-indigo-600" />
              +{lesson.xpReward + earnedXp}
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-200 text-center">
            <span className="text-xs font-black text-amber-700 uppercase block mb-1">Ofensiva</span>
            <span className="text-2xl font-black text-amber-900 flex items-center justify-center gap-1">
              🔥 13 Dias
            </span>
          </div>
        </div>

        <Link href="/learn" className="w-full max-w-xs">
          <Button variant="3d-success" size="lg" className="w-full text-lg">
            Continuar na Trilha
          </Button>
        </Link>
      </div>
    );
  }

  const selectedOption = currentExercise.options.find((o) => o.id === selectedOptionId);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between select-none">
      {/* Barra Superior do Player */}
      <header className="h-20 border-b border-slate-200 bg-white px-4 sm:px-8 flex items-center justify-between gap-6 max-w-5xl mx-auto w-full">
        <Link
          href="/learn"
          className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors"
          title="Sair da lição"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </Link>

        {/* Barra de Progresso Contínua */}
        <div className="flex-1 max-w-xl">
          <Progress value={progressPercent} className="h-4 bg-slate-100" />
        </div>

        {/* Vidas restantes */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-rose-50 border border-rose-200 font-extrabold text-rose-700 text-sm">
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
          <span>{currentLives}</span>
        </div>
      </header>

      {/* Conteúdo Central da Lição */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 sm:py-8 flex flex-col justify-center">
        {/* Enunciado da Questão */}
        <div className="mb-6">
          <span className="text-xs font-black uppercase text-indigo-600 tracking-wider">
            Questão {currentExerciseIndex + 1} de {exercises.length}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            {currentExercise.prompt}
          </h2>
        </div>

        {/* Área de Visualização do Sinal em Libras (Vídeo/Animação Didática) */}
        <div className="w-full rounded-3xl bg-slate-900 border-2 border-slate-800 shadow-md overflow-hidden mb-6 relative aspect-video flex flex-col items-center justify-center text-white">
          <div className="text-6xl mb-2 animate-bounce">🤟</div>
          <p className="text-xl font-black text-white tracking-wider">
            {currentExercise.signGloss || "DEMONSTRAÇÃO EM LIBRAS"}
          </p>
          <span className="text-xs text-indigo-200 font-medium">
            Observação de parâmetros: Configuração de Mão e Orientação
          </span>

          {/* Controles do Vídeo */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-bold bg-black/40 backdrop-blur-md px-3 py-2 rounded-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-lg bg-indigo-600 text-white text-[11px]">
                Loop Ativo
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-300">Velocidade:</span>
              {[0.5, 0.75, 1.0].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={cn(
                    "px-2 py-0.5 rounded-lg transition-colors",
                    playbackSpeed === speed
                      ? "bg-white text-slate-900"
                      : "text-slate-300 hover:text-white"
                  )}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Alternativas de Resposta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5" role="radiogroup">
          {currentExercise.options.map((option, idx) => {
            const isSelected = selectedOptionId === option.id;
            const shortcutNum = idx + 1;

            return (
              <button
                key={option.id}
                onClick={() => {
                  if (feedbackStatus === "idle") {
                    setSelectedOptionId(option.id);
                  }
                }}
                disabled={feedbackStatus !== "idle"}
                role="radio"
                aria-checked={isSelected}
                className={cn(
                  "p-4 rounded-2xl border-2 text-left font-bold transition-all relative flex items-center justify-between select-none active:translate-y-1",
                  isSelected
                    ? "bg-indigo-50 border-indigo-600 border-b-4 text-indigo-950 shadow-sm"
                    : "bg-white border-slate-200 border-b-4 text-slate-800 hover:bg-slate-50 hover:border-slate-300"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 border",
                      isSelected
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-slate-100 text-slate-500 border-slate-200"
                    )}
                  >
                    {shortcutNum}
                  </span>
                  <span className="text-base leading-snug">{option.text}</span>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      {/* Barra Inferior com Botão Verificar */}
      <footer className="h-24 border-t border-slate-200 bg-white px-6 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="text-xs font-bold text-slate-400 hidden sm:block">
          Dica: Pressione as teclas 1, 2, 3 ou 4 e tecle Enter
        </div>

        <div className="ml-auto w-full sm:w-auto">
          <Button
            onClick={handleCheck}
            disabled={!selectedOptionId || feedbackStatus !== "idle"}
            variant="3d-primary"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            Verificar Resposta
          </Button>
        </div>
      </footer>

      {/* Banner Flutuante de Feedback Pós-Resposta */}
      <FeedbackBanner
        status={feedbackStatus}
        explanation={selectedOption?.explanation}
        onContinue={handleNext}
      />
    </div>
  );
}

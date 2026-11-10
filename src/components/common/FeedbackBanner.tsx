import React from "react";
import { CheckCircle2, XCircle, ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeedbackBannerProps {
  status: "idle" | "correct" | "incorrect";
  explanation?: string;
  onContinue: () => void;
  className?: string;
}

export function FeedbackBanner({
  status,
  explanation,
  onContinue,
  className,
}: FeedbackBannerProps) {
  if (status === "idle") return null;

  const isCorrect = status === "correct";

  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 border-t-4 transition-all duration-300 animate-in slide-in-from-bottom",
        isCorrect
          ? "bg-emerald-50 border-emerald-500 text-emerald-950"
          : "bg-rose-50 border-rose-500 text-rose-950",
        className
      )}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-4 w-full">
          <div
            className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm",
              isCorrect
                ? "bg-emerald-500 text-white shadow-3d-success"
                : "bg-rose-500 text-white shadow-3d-danger"
            )}
          >
            {isCorrect ? (
              <CheckCircle2 className="w-7 h-7" />
            ) : (
              <XCircle className="w-7 h-7" />
            )}
          </div>

          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-black tracking-tight">
              {isCorrect ? "Excelente! Resposta correta!" : "Quase lá! Resposta incorreta"}
            </h3>
            {explanation && (
              <p
                className={cn(
                  "text-sm font-semibold flex items-center gap-1.5",
                  isCorrect ? "text-emerald-800" : "text-rose-800"
                )}
              >
                <Lightbulb className="w-4 h-4 shrink-0" />
                <span>{explanation}</span>
              </p>
            )}
          </div>
        </div>

        <div className="w-full sm:w-auto shrink-0">
          <Button
            onClick={onContinue}
            variant={isCorrect ? "3d-success" : "3d-danger"}
            size="lg"
            className="w-full sm:w-auto gap-2"
            autoFocus
          >
            <span>{isCorrect ? "Continuar" : "Entendi"}</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

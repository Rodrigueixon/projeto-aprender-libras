import React from "react";
import { AppShell } from "@/components/layout/AppShell";
import { UnitCard } from "@/features/curriculum/components/UnitCard";
import { LessonNode } from "@/features/curriculum/components/LessonNode";
import { getMockCourse } from "@/services/mock/curriculumData";

export default function LearnPage() {
  const course = getMockCourse();

  return (
    <AppShell>
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Cabeçalho de Boas-Vindas */}
        <div className="text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-xs">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Trilha de Aprendizagem 🤟
            </h2>
            <p className="text-sm font-semibold text-slate-600 mt-1">
              Curso: <span className="text-indigo-600">{course.title}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800">
            <span>🔥 Meta diária: 1 lição</span>
          </div>
        </div>

        {/* Unidades da Trilha */}
        {course.units.map((unit) => (
          <UnitCard key={unit.id} unit={unit}>
            <div className="flex flex-col items-center py-6 gap-8 relative">
              {/* Linha pontilhada conectora central */}
              <div
                className="absolute top-10 bottom-10 w-1 border-r-2 border-dashed border-slate-300 left-1/2 -translate-x-1/2 z-0"
                aria-hidden="true"
              />

              {/* Nós de Lição */}
              {unit.lessons.map((lesson, index) => (
                <div key={lesson.id} className="relative z-10 w-full flex justify-center">
                  <LessonNode lesson={lesson} index={index} />
                </div>
              ))}
            </div>
          </UnitCard>
        ))}
      </div>
    </AppShell>
  );
}

import React from "react";
import { LessonPlayerClient } from "@/features/lesson-player/components/LessonPlayerClient";
import { mockCourse } from "@/services/mock/curriculumData";

// Para exportação estática (output: 'export' do Next.js / GitHub Pages)
export function generateStaticParams() {
  const lessonIds: { id: string }[] = [];
  for (const unit of mockCourse.units) {
    for (const lesson of unit.lessons) {
      lessonIds.push({ id: lesson.id });
    }
  }
  return lessonIds;
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <LessonPlayerClient initialLessonId={id} />;
}

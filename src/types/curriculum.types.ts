export type LessonStatus = "locked" | "available" | "in_progress" | "completed";

export type LessonType = "standard" | "practice" | "checkpoint";

export type ExerciseType =
  | "sign_to_image"
  | "sign_to_text"
  | "text_to_sign"
  | "word_order"
  | "parameter_id"
  | "camera_hand_pose";

export interface ExerciseOption {
  id: string;
  text?: string;
  imageUrl?: string;
  videoUrl?: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  videoUrl?: string;
  signGloss?: string;
  options: ExerciseOption[];
  targetParameter?: {
    cm?: string;
    pa?: string;
    m?: string;
    o?: string;
    enm?: string;
  };
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  lessonType: LessonType;
  status: LessonStatus;
  xpReward: number;
  order: number;
  exercises?: Exercise[];
}

export interface Unit {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  color: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  units: Unit[];
}

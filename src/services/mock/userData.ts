import { UserStats, Achievement, UserProfile } from "@/types/gamification.types";

export const mockUserStats: UserStats = {
  userId: "user-1",
  xp: 450,
  lives: 4,
  maxLives: 5,
  streak: 12,
  streakFreezeCount: 1,
  coins: 85,
  level: 3,
  currentLevelXp: 50,
  nextLevelXp: 200,
};

export const mockUserProfile: UserProfile = {
  id: "user-1",
  username: "aluno_libras",
  fullName: "Rodrigo Silva",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  role: "student",
  createdAt: "2026-10-15T10:00:00Z",
};

export const mockAchievements: Achievement[] = [
  {
    id: "ach-1",
    code: "FIRST_STEP",
    title: "Primeiro Sinal",
    description: "Completou sua primeira lição na plataforma.",
    badgeIcon: "🌟",
    xpBonus: 20,
    isUnlocked: true,
    unlockedAt: "2026-10-15",
    progressPercent: 100,
  },
  {
    id: "ach-2",
    code: "STREAK_7_DAYS",
    title: "Fogo Aceso",
    description: "Mantenha uma ofensiva ininterrupta de 7 dias.",
    badgeIcon: "🔥",
    xpBonus: 50,
    isUnlocked: true,
    unlockedAt: "2026-10-22",
    progressPercent: 100,
  },
  {
    id: "ach-3",
    code: "ALPHABET_MASTER",
    title: "Mestre da Datilologia",
    description: "Conclua todas as lições do alfabeto manual de A a Z.",
    badgeIcon: "🤟",
    xpBonus: 75,
    isUnlocked: false,
    progressPercent: 65,
  },
  {
    id: "ach-4",
    code: "CENTURY_XP",
    title: "Centurião dos Sinais",
    description: "Acumule 500 pontos de experiência (XP).",
    badgeIcon: "⚡",
    xpBonus: 100,
    isUnlocked: false,
    progressPercent: 90,
  },
];

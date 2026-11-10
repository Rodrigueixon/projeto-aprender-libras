export interface UserStats {
  userId: string;
  xp: number;
  lives: number;
  maxLives: number;
  streak: number;
  streakFreezeCount: number;
  coins: number;
  level: number;
  currentLevelXp: number;
  nextLevelXp: number;
}

export interface Achievement {
  id: string;
  code: string;
  title: string;
  description: string;
  badgeIcon: string;
  xpBonus: number;
  isUnlocked: boolean;
  unlockedAt?: string;
  progressPercent: number;
}

export interface UserProfile {
  id: string;
  username: string;
  fullName: string;
  avatarUrl: string;
  role: "student" | "instructor" | "admin";
  createdAt: string;
}

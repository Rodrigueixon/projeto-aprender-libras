export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          full_name: string;
          avatar_url: string | null;
          role: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username: string;
          full_name: string;
          avatar_url?: string | null;
          role?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string;
          full_name?: string;
          avatar_url?: string | null;
          role?: string;
          updated_at?: string;
        };
      };
      user_stats: {
        Row: {
          user_id: string;
          xp: number;
          lives: number;
          last_life_lost_at: string | null;
          streak: number;
          streak_freeze_count: number;
          last_active_date: string | null;
          coins: number;
        };
      };
      courses: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string | null;
          thumbnail_url: string | null;
          display_order: number;
          is_published: boolean;
        };
      };
      units: {
        Row: {
          id: string;
          course_id: string;
          title: string;
          description: string | null;
          display_order: number;
          checkpoint_min_score: number;
        };
      };
      lessons: {
        Row: {
          id: string;
          unit_id: string;
          title: string;
          description: string | null;
          lesson_type: string;
          xp_reward: number;
          display_order: number;
        };
      };
    };
  };
}

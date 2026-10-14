export type ThemeType = "system" | "light" | "dark";

export interface UserProfile {
  id: string;
  email_address: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
}

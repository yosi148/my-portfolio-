import { LucideIcon } from 'lucide-react';

export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string; // Placeholder URL
  tags: string[];
  icon?: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}
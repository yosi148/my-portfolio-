import { 
  Palette, 
  Zap, 
  Video, 
  Code, 
  Image as ImageIcon, 
  Lightbulb, 
  Camera, 
  Box 
} from 'lucide-react';
import { Skill, Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Logo design, social media visuals, banners, ads, motion graphics.',
    icon: Palette
  },
  {
    id: 'ai-image',
    title: 'AI Image Generation',
    description: 'Concept art, realistic portraits, product visualization, cinematic compositions.',
    icon: Zap
  },
  {
    id: 'ai-video',
    title: 'AI Video Generation',
    description: 'Storyboard-to-video creation, cinematic sequences, promotional content, social media clips.',
    icon: Video
  },
  {
    id: 'prompt-eng',
    title: 'Prompt Engineering',
    description: 'Writing precise prompts for AI tools to create consistent and high-quality outputs.',
    icon: Code
  }
];

export const IMAGE_PROJECTS: Project[] = [
  {
    id: 'concept-art',
    title: 'Concept Art & Illustrations',
    description: 'Fantasy landscapes and character designs using AI generation.',
    category: 'Image',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    tags: ['Midjourney', 'Concept Art', 'Fantasy'],
    icon: ImageIcon
  },
  {
    id: 'realistic-portrait',
    title: 'Realistic Portraits & Lifestyle',
    description: 'Professional headshots and lifestyle photography with AI.',
    category: 'Image',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    tags: ['Portrait', 'Lifestyle', 'Photography'],
    icon: Camera
  },
  {
    id: 'product-mockup',
    title: 'Product Mockups & Branding',
    description: 'Product visualization and brand identity designs.',
    category: 'Image',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    tags: ['Branding', 'Product Design', 'Mockups'],
    icon: Box
  }
];

export const VIDEO_PROJECTS: Project[] = [
  {
    id: 'social-promo',
    title: 'Social Media Promos',
    description: 'TikTok, Instagram, and YouTube promotional content.',
    category: 'Video',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    tags: ['Social Media', 'Promo', 'Short-form'],
    icon: Video
  },
  {
    id: 'cinematic',
    title: 'Cinematic Short Videos',
    description: 'Story-driven cinematic sequences and narratives.',
    category: 'Video',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    tags: ['Cinematic', 'Storytelling', 'Visual Effects'],
    icon: Video
  },
  {
    id: 'animated-ads',
    title: 'Animated Advertisements',
    description: 'Dynamic animated ads for brands and products.',
    category: 'Video',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    tags: ['Animation', 'Advertising', 'Motion Graphics'],
    icon: Video
  }
];

export const PROMPT_PROJECTS: Project[] = [
  {
    id: 'custom-prompts',
    title: 'Custom AI Prompts',
    description: 'Engineered prompts for consistent brand imagery.',
    category: 'Prompt',
    imageUrl: 'https://picsum.photos/600/400?random=7',
    tags: ['Prompt Engineering', 'Consistency', 'Branding'],
    icon: Lightbulb
  },
  {
    id: 'scene-prompts',
    title: 'Scene-by-Scene Video Prompts',
    description: 'Detailed prompts for video storytelling sequences.',
    category: 'Prompt',
    imageUrl: 'https://picsum.photos/600/400?random=8',
    tags: ['Video', 'Storytelling', 'Sequences'],
    icon: Lightbulb
  },
  {
    id: 'lighting-prompts',
    title: 'Realistic Lighting & Environment',
    description: 'Prompts focused on realistic lighting and environmental details.',
    category: 'Prompt',
    imageUrl: 'https://picsum.photos/600/400?random=9',
    tags: ['Lighting', 'Environment', 'Realism'],
    icon: Lightbulb
  }
];
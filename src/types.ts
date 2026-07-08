export interface Product {
  id: string;
  name: string;
  category: 'insurance' | 'health' | 'finance' | 'business';
  headline: string;
  shortDescription: string;
  benefits: string[];
  ctaText: string;
  iconName: string;
  priority: 'High' | 'Medium' | 'Low';
  expansionIdeas: string;
  vaultSpecific?: boolean;
}

export type NavPage =
  | 'home'
  | 'about'
  | 'how-it-works'
  | 'marketplace'
  | 'pricing'
  | 'dashboard'
  | 'enroll'
  | 'strategy';

export interface StrategicTopic {
  id: string;
  title: string;
  category: 'marketing' | 'operations' | 'corporate' | 'architecture';
  content: string;
  bullets?: string[];
  codeBlock?: string;
}

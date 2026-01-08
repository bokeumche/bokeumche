
export interface PortfolioItem {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
}

export interface TattooItem {
  id: number;
  imageUrl: string;
}

export type SectionId = 'home' | 'branding' | 'planning' | 'projects' | 'tattoo';

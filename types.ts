
export interface PortfolioItem {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  imageUrls?: string[]; // 추가: 여러 이미지 지원
}

export interface TattooItem {
  id: number;
  imageUrl: string;
}

export type SectionId = 'home' | 'branding' | 'planning' | 'projects' | 'tattoo';

export interface PortraitSample {
  id: string;
  name: string;
  modelOrigin: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  beforeDescription: string;
  afterDescription: string;
  stats: {
    poreDetail: string;
    filmGrain: string;
    organicDepth: string;
  };
}

export interface SignatureStyle {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  idealFor: string;
  badge: string;
  accentColor: string;
  settings: {
    grain: number;
    microTexture: number;
    warmth: number;
    specular: number;
  };
  sampleImage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Privacy' | 'Features' | 'Compatibility' | 'Billing';
}

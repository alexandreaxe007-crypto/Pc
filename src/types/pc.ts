export interface PcBuild {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: 'gamer_pro' | 'ultra_enthusiast' | 'workstation' | 'entry_level';
  pricePix: number;
  priceCard: number;
  installments: number;
  image: string;
  fpsEstimates: {
    game: string;
    fps1440p: number;
    fps4k: number;
  }[];
  specs: {
    processor: string;
    gpu: string;
    ram: string;
    storage: string;
    motherboard: string;
    cooling: string;
    psu: string;
    caseModel: string;
  };
  features: string[];
  stockStatus: 'pronta_entrega' | 'montagem_24h';
}

export interface CustomComponent {
  id: string;
  name: string;
  category: 'cpu' | 'gpu' | 'ram' | 'storage' | 'cooling' | 'case' | 'psu';
  price: number;
  tdp: number;
  specsSummary: string;
  recommendedFor?: string;
  performanceTier: number; // 1 to 5
}

export interface CartItem {
  id: string;
  title: string;
  specsSubtitle: string;
  price: number;
  quantity: number;
  image: string;
  isCustom?: boolean;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  modelBought: string;
  content: string;
  verified: boolean;
}

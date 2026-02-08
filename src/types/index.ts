// NFT Types
export interface NFTItem {
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentBid: number;
  endTime: Date;
}

export interface CoinGeckoNFT {
  id: string;
  name: string;
  symbol: string;
}

// UI Types
export interface UIState {
  isScrolled: boolean;
  isMenuOpen: boolean;
}

// Component Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
}

export interface TitleProps {
  text: string;
  variant?: 'h1' | 'h2' | 'h3';
  delay?: number;
}

export interface NFTCardProps {
  nft: NFTItem;
}

export interface TimerProps {
  endTime: Date;
}

export interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
}

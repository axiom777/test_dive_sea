// NFT Types
export interface Item {
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentBid: number;
  endTime: string;
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
export interface NFTCardProps {
  nft: Item;
}

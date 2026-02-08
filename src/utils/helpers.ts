// Available images from public/slider_images/
const NFT_IMAGES = [
  '/test_dive_sea/slider_images/sunglass-1.png',
  '/test_dive_sea/slider_images/sunglass-2.png',
  '/test_dive_sea/slider_images/sunglass-3.png',
  '/test_dive_sea/slider_images/sunglass-4.png',
  '/test_dive_sea/slider_images/sunglass-5.png',
];

export const getRandomImage = (index: number): string => {
  return NFT_IMAGES[index % NFT_IMAGES.length];
};

export const generateRandomBid = (): number => {
  const min = 0.5;
  const max = 5.0;
  return Math.random() * (max - min) + min;
};

export const generateRandomEndTime = (): Date => {
  const now = new Date();
  const hoursToAdd = Math.floor(Math.random() * 24) + 1;
  now.setHours(now.getHours() + hoursToAdd);
  return now;
};

export const formatTimeRemaining = (endTime: Date): string => {
  const now = new Date();
  const diff = endTime.getTime() - now.getTime();
  
  if (diff <= 0) {
    return '00h 00m 00s';
  }
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
};

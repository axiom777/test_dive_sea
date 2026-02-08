import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetNFTsQuery } from '../../../store/nftApiSlice';
import NFTCard from '../NFTCard';
import SliderControls from '../SliderControls';
import styles from './NFTSlider.module.scss';

export const NFTSlider: React.FC = () => {
  const { data: nfts, isLoading, error } = useGetNFTsQuery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1440) {
        setItemsPerView(4);
      } else if (width >= 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const handleNext = () => {
    if (!nfts) return;
    setCurrentIndex((prev) => (prev + 1) % nfts.length);
  };

  const handlePrev = () => {
    if (!nfts) return;
    setCurrentIndex((prev) => (prev - 1 + nfts.length) % nfts.length);
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error loading NFTs</div>;
  }

  if (!nfts || nfts.length === 0) {
    return <div className={styles.empty}>No NFTs available</div>;
  }

  const visibleNFTs = [];
  for (let i = 0; i < itemsPerView; i++) {
    visibleNFTs.push(nfts[(currentIndex + i) % nfts.length]);
  }

  return (
    <div className={styles.slider}>
      <h2 className={styles.title}>Trending NFTs</h2>
      <div className={styles.sliderContainer}>
        <AnimatePresence mode="popLayout">
          {visibleNFTs.map((nft, index) => (
            <motion.div
              key={`${nft.id}-${currentIndex}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={styles.slide}
            >
              <NFTCard nft={nft} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <SliderControls
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={currentIndex}
        totalItems={nfts.length}
      />
    </div>
  );
};

export default NFTSlider;

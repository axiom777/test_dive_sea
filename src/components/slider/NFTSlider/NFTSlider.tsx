import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';

import Title from '@common/Title';
import { useGetNFTsQuery } from '@store/nftApiSlice';

import Card from '../Card';
import SliderControls from '../SliderControls';
import styles from './NFTSlider.module.scss';
import 'swiper/swiper-bundle.css';

// Animation variants for staggered card animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const NFTSlider: React.FC = () => {
  const { data: nfts, isLoading, error } = useGetNFTsQuery();
  const swiperRef = useRef<SwiperRef>(null);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error loading NFTs</div>;
  }

  if (!nfts || nfts.length === 0) {
    return <div className={styles.empty}>No NFTs available</div>;
  }

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className={styles.slider}>
      <Title className={styles.title}>Weekly - Top NFT</Title>
      <motion.div 
        className={styles.sliderWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={'auto'}
          loop={true}
          centeredSlides={true}
          initialSlide={Math.min(10, nfts.length - 1)}
          breakpoints={{
            1024: {
              spaceBetween: 40,
            },
          }}
          className={styles.swiper}
        >
          {nfts.map((nft) => (
            <SwiperSlide key={nft.id} className={styles.slide}>
              <motion.div variants={cardVariants}>
                <Card data={nft} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <SliderControls
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default NFTSlider;

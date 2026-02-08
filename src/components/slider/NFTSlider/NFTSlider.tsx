import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { useGetNFTsQuery } from '../../../store/nftApiSlice';
import Card from '../Card';
import SliderControls from '../SliderControls';
import styles from './NFTSlider.module.scss';
import Title from '../../common/Title';
import 'swiper/swiper-bundle.css';

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
      <div className={styles.sliderWrapper}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={'auto'}
          loop={true}
          centeredSlides={true}
          breakpoints={{
            768: {
              spaceBetween: 32,
            },
            1024: {
              spaceBetween: 40,
            },
          }}
          className={styles.swiper}
        >
          {nfts.map((nft) => (
            <SwiperSlide key={nft.id} className={styles.slide}>
              <Card data={nft} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SliderControls
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={0}
        totalItems={nfts.length}
      />
    </div>
  );
};

export default NFTSlider;

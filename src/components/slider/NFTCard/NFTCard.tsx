import React from 'react';
import { motion } from 'framer-motion';
import type { NFTItem } from '../../../types';
import Timer from '../Timer';
import Button from '../../common/Button';
import styles from './NFTCard.module.scss';

export type NFTCardProps = {
  nft: NFTItem;
};

export const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageContainer}>
        <img src={nft.image} alt={nft.name} className={styles.image} />
        <div className={styles.timerWrapper}>
          <Timer endTime={new Date(nft.endTime)} />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{nft.name}</h3>
        <div className={styles.bidSection}>
          <div className={styles.bidInfo}>
            <img src="/icons/ethereum-icon.svg" alt="ETH" className={styles.ethIcon} />
            <span className={styles.bidAmount}>{nft.currentBid.toFixed(2)} ETH</span>
          </div>
          <Button variant="secondary" size="sm">Place Bid</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTCard;

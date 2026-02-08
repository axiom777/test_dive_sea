import { motion } from 'framer-motion';
import React from 'react';

import Button from '@common/Button';
import Title from '@common/Title';
import type { Item } from '@types';

import Timer from '../Timer';
import styles from './Card.module.scss';


export type CardProps = {
  data: Item;
};

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageContainer}>
        <img src={data.image} alt={data.name} className={styles.image} />
        <div className={styles.timerWrapper}>
          <Timer endTime={new Date(data.endTime)} />
        </div>
      </div>
      <Title variant='h3' className={styles.name}>{data.name}</Title>
      <div className={styles.bidSection}>
        <div className={styles.bidInfo}>
          <span className={styles.bidLabel}>Current bid</span>
          <div className={styles.bidPrice}>
            <svg className={styles.ethIcon} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0014 1.6045L5.27222 11.2295L11.0014 14.667L16.7306 11.2295L11.0014 1.6045ZM5.27222 12.3753L11.0014 20.3962L16.7306 12.3753L11.0014 15.8128L5.27222 12.3753Z" fill="currentColor" />
            </svg>
            <span className={styles.bidAmount}>{data.currentBid.toFixed(2)} ETH</span>

          </div>
        </div>
        <Button variant="primary">Place Bid</Button>
      </div>
    </motion.div>
  );
};

export default Card;

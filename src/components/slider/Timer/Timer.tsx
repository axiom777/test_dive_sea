import React, { useEffect, useState } from 'react';
import styles from './Timer.module.scss';

export type TimerProps = {
  endTime: Date;
};

export const Timer: React.FC<TimerProps> = ({ endTime }) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = endTime.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeRemaining('00h 00m 00s');
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining(
        `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className={styles.timer}>
      {timeRemaining}
    </div>
  );
};

export default Timer;

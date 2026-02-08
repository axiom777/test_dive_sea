import React, { useEffect, useState } from 'react';

import { formatTimeRemaining } from '@utils/helpers';

import styles from './Timer.module.scss';

export type TimerProps = {
  endTime: Date;
};

export const Timer: React.FC<TimerProps> = ({ endTime }) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTimeRemaining(formatTimeRemaining(endTime));
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

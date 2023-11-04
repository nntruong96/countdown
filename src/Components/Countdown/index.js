import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ time = { seconds: 0 } }) => {
  const [seconds, setSeconds] = useState(time.seconds);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  useEffect(() => {
    setSeconds(Number(time.seconds));
  }, [time]);

  const formatTime = (time) => {
    if (typeof time !== 'number' || isNaN(time)) return '00:00:00';
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return <div>{formatTime(seconds)}</div>;
};

export default CountdownTimer;

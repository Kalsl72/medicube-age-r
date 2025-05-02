
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  hours: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours }) => {
  const calculateTimeLeft = () => {
    // Set end time 'hours' from now
    const now = new Date();
    const end = new Date(now);
    end.setHours(end.getHours() + hours);
    
    const difference = +end - +now;
    
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="flex items-center text-sm md:text-base">
      <span className="text-deepnavy font-semibold mr-2">Offer ends in:</span>
      <div className="flex items-center font-montserrat font-bold">
        <div className="bg-deepnavy text-white rounded px-2 py-1">{formatTime(timeLeft.hours)}</div>
        <span className="mx-1">:</span>
        <div className="bg-deepnavy text-white rounded px-2 py-1">{formatTime(timeLeft.minutes)}</div>
        <span className="mx-1">:</span>
        <div className="bg-deepnavy text-white rounded px-2 py-1">{formatTime(timeLeft.seconds)}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;

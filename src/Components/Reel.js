import { useState, useEffect } from 'react';

const Reel = ({ index }) => {
  const num_icons = 9;
  const time_per_icon = 100;
  const iconMap = [
    "banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"
  ];
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    roll(offset);
  }, [offset]);

  const roll = (offset) => {
    const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
    
    setTimeout(() => {
      setOffset(offset + 1);
    }, offset * 150);

    setTimeout(() => {
      setOffset(0);
    }, (8 + 1 * delta) * time_per_icon + offset * 150);
  };

  return (
    <div className="reel">
    {iconMap[index] && (
      <div className="icon">{iconMap[index]}</div>
    )}
  </div>
  );
};

export default Reel;

import React from 'react';
import { ProgressBar } from 'react-step-progress-bar';

interface DiscountProgressProps {
  eligibleItems: Number;
}

const DiscountProgress: React.FC<DiscountProgressProps> = ({ eligibleItems }) => {
  let percent = 0;
  let message = '';
  if (eligibleItems == 0) {
    percent = 0;
  } else if (eligibleItems == 1) {
    percent = 25;
    message = '1 ring away from 10% off!';
  } else if (eligibleItems == 2) {
    percent = 50;
    message = '10% off unlocked! Add another ring to unlock 15% off!';
  } else if (eligibleItems == 3) {
    percent = 100;
    message = 'Unlocked 15% off!';
  }
  return (
    <>
      <ProgressBar percent={percent} filledBackground="#01BEBE" />
      <p className="text-center mt-2 font-futura font-medium text-primary-2">{message}</p>
    </>
  );
};

export default DiscountProgress;

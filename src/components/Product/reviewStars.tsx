import React from 'react';
import { FaStar } from 'react-icons/fa';

interface ReviewStarsProps {
  average?: number;
  numberOfReviews?: number;
}

const ReviewStars: React.FC<ReviewStarsProps> = ({ average = 5, numberOfReviews }) => {
  const maxStars = 5;
  average = Math.min(5, average);
  const numOfWholeStars = Math.floor(average);
  let numOfHalfStars = 0;
  if (average.toString().includes('.') || maxStars > average) {
    numOfHalfStars = 5 - numOfWholeStars;
  }
  let stars = [];
  for (let i = 0; i < numOfWholeStars; i++) {
    stars.push(
      <span key={`whole-star-${i}`} className="opacity-100 text-black">
        <FaStar />
      </span>
    );
  }
  for (let i = 0; i < numOfHalfStars; i++) {
    stars.push(
      <span key={`half-star-${i}`} className="opacity-50 text-black">
        <FaStar />
      </span>
    );
  }
  return (
    <div className="flex space-x-3 items-center">
      <span className="flex space-x-1">{stars}</span>
      {numberOfReviews && <span className="text-sm">{numberOfReviews} Reviews</span>}
    </div>
  );
};

export default ReviewStars;

import React from 'react';

const Rating = ({ rating }) => {
  const maxRating = 5;

  // Create an array with the length of maxRating
  const stars = Array.from({ length: maxRating }, (_, index) => {
    // Determine whether the current star should be filled or not
    const isFilled = index < rating;
    // FF3754
    return (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 text-[#FF3754] ${isFilled ? 'fill-current' : 'fill-gray-300'}`}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 2l2.45 6.29L22 9l-5.09 4.36 1.55 6.19-6.45-4.64L7 15l-4 1 1-4 3.45-2.64z"
        />
      </svg>
    );
  });

  return <div className="flex justify-center items-center">{stars}</div>;
};
export default Rating;

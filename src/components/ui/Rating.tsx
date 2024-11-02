/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import { BiStar } from "react-icons/bi";

interface RatingProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  initialRating = 0,
  onChange,
  readonly = false,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleRatingChange = (newRating: number) => {
    if (!readonly) {
      setRating(newRating);
      onChange && onChange(newRating);
    }
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <BiStar
          key={star}
          className={`h-6 w-6 ${
            star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
          } ${!readonly && "cursor-pointer"}`}
          onClick={() => handleRatingChange(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(0)}
        />
      ))}
    </div>
  );
};

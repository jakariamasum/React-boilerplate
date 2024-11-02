import React from "react";

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = "w-full",
  height = "h-4",
  className = "",
}) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${width} ${height} ${className}`}
    ></div>
  );
};

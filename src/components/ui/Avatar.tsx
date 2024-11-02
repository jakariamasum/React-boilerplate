import React from "react";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  fallback,
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const getFallbackInitials = () => {
    return (
      fallback ||
      alt
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    );
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 flex items-center justify-center`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-600 font-medium">
          {getFallbackInitials()}
        </span>
      )}
    </div>
  );
};

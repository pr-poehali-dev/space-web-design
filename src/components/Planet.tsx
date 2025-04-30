import React from 'react';

interface PlanetProps {
  color: string;
  size: number;
  className?: string;
  orbitDuration?: number;
  hasRing?: boolean;
  ringColor?: string;
}

const Planet: React.FC<PlanetProps> = ({
  color,
  size,
  className = "",
  orbitDuration = 90,
  hasRing = false,
  ringColor = "#64748b"
}) => {
  return (
    <div className={`relative ${className}`}>
      <div 
        className={`rounded-full animate-pulse-slow shadow-lg`}
        style={{
          backgroundColor: color,
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {/* Surface details */}
        <div 
          className="absolute rounded-full opacity-30"
          style={{
            backgroundColor: "#fff",
            width: `${size * 0.2}px`,
            height: `${size * 0.2}px`,
            top: `${size * 0.2}px`,
            left: `${size * 0.2}px`,
          }}
        />
      </div>
      
      {hasRing && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 -z-10"
          style={{
            width: `${size * 1.5}px`,
            height: `${size * 0.5}px`,
            borderColor: ringColor,
            transform: "translate(-50%, -50%) rotateX(75deg)",
          }}
        />
      )}
    </div>
  );
};

export default Planet;

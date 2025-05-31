import Image from "next/image";
import React from "react";

export default function CircularProgress({
  percentage,
  size = 60,
  strokeWidth = 6,
  color = "var(--color-primary)",
  logo,
  icon,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size}>
        <circle
          stroke="var(--color-border)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <div
        className={`absolute w-[85%] h-[85%] bg-card rounded-full flex items-center justify-center overflow-hidden p-1`}
      >
        {logo ? (
          <Image
            src={logo}
            width={size * 0.85}
            height={size * 0.85}
            className="rounded-full object-contain"
            alt=""
          />
        ) : icon ? (
          React.cloneElement(icon, {
            className: `${icon.props.className} w-[70%] h-[70%]`,
          })
        ) : (
          <span className="text-sm text-foreground">{percentage}%</span>
        )}
      </div>
    </div>
  );
}

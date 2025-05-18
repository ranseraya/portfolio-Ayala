import Image from "next/image";

export default function CircularProgress({ percentage, size = 60, strokeWidth = 6, color = '#4ade80', logo }) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size}>
                <circle
                    stroke="#2c2c2c"
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
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
            </svg>
            <div className={`absolute w-[85%] h-[85%] bg-neutral-800 rounded-full flex justify-between items-center`}>
                <Image src={logo} width={size} height={size} className="rounded-full object-contain" alt="" />
            </div>
        </div>
    );
};
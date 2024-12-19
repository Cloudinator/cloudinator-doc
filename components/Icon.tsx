import React from 'react';

interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}

export const StartArrow: React.FC<IconProps> = ({ width = 24, height = 24, color = 'currentColor' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-down-right"
    >
        <path d="M7 7l10 10M17 7v10H7" />
    </svg>
);
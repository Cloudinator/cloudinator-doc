"use client";
import React, { useEffect, useState } from "react";

interface HeartProps {
  color?: string;
  count?: number;
  speed?: [number, number];
  wind?: [number, number];
}

const LeafFall: React.FC<HeartProps> = ({
  color = "#ff6b6b",
  count = 50,
  speed = [1, 3],
  wind = [-0.5, 0.5],
}) => {
  const [hearts, setHearts] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    const createHeart = () => {
      const newHearts = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10,
        size: Math.random() * (30 - 15) + 15,
        speedY: Math.random() * (speed[1] - speed[0]) + speed[0],
        speedX: Math.random() * (wind[1] - wind[0]) + wind[0],
        opacity: Math.random() * (1 - 0.4) + 0.4,
      }));
      setHearts(newHearts);
    };

    createHeart();
    const interval = setInterval(() => {
      setHearts((prevHearts) =>
        prevHearts.map((heart) => ({
          ...heart,
          y: heart.y + heart.speedY,
          x: heart.x + heart.speedX,
          ...(heart.y > 100 && {
            y: -10,
            x: Math.random() * 100,
          }),
        })),
      );
    }, 50);

    return () => clearInterval(interval);
  }, [count, speed, wind]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          style={{
            position: "absolute",
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            transform: "translate(-50%, -50%)",
            color: color,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            transition: "left 0.05s linear, top 0.05s linear",
          }}
        >
          🌿
        </div>
      ))}
    </div>
  );
};

export default LeafFall;

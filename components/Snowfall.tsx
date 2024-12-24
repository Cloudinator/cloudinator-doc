"use client";

import React from "react";
import ReactSnowfall from "react-snowfall";

interface SnowfallProps {
  color?: string;
  snowflakeCount?: number;
  speed?: [number, number];
  wind?: [number, number];
}

const Snowfall: React.FC<SnowfallProps> = ({
  color = "#fff",
  snowflakeCount = 200,
  speed = [0.5, 3],
  wind = [-0.5, 2],
}) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <ReactSnowfall
        color={color}
        snowflakeCount={snowflakeCount}
        speed={speed}
        wind={wind}
      />
    </div>
  );
};

export default Snowfall;

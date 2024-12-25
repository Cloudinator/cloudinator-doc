import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Snowflake, X, Leaf } from "lucide-react";
import ReactSnowfall from "react-snowfall";

interface BaseTheme {
  name: string;
  type: "snow" | "leaf";
  speed: [number, number];
  wind: [number, number];
}

interface SnowTheme extends BaseTheme {
  type: "snow";
  color: string;
  snowflakeCount: number;
}

interface LeafTheme extends BaseTheme {
  type: "leaf";
  color: string;
  count: number;
}

type Theme = SnowTheme | LeafTheme;

interface ThemeToggleProps {
  themes?: Theme[];
}

const LeafFall: React.FC<LeafTheme> = ({ color, count, speed, wind }) => {
  const [leaves, setLeaves] = useState<
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
    const createLeaves = () => {
      const newLeaves = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10,
        size: Math.random() * (30 - 15) + 15,
        speedY: Math.random() * (speed[1] - speed[0]) + speed[0],
        speedX: Math.random() * (wind[1] - wind[0]) + wind[0],
        opacity: Math.random() * (1 - 0.4) + 0.4,
      }));
      setLeaves(newLeaves);
    };

    createLeaves();
    const interval = setInterval(() => {
      setLeaves((prev) =>
        prev.map((leaf) => ({
          ...leaf,
          y: leaf.y + leaf.speedY,
          x: leaf.x + leaf.speedX,
          ...(leaf.y > 100 && {
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
        position: "fixed",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          style={{
            position: "absolute",
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            transform: "translate(-50%, -50%)",
            color: color,
            fontSize: `${leaf.size}px`,
            opacity: leaf.opacity,
            transition: "left 0.2s linear, top 0.2s linear",
            willChange: "left, top",
          }}
        >
          <Leaf />
        </div>
      ))}
    </div>
  );
};

const defaultThemes: Theme[] = [
  {
    name: "Snow Falling",
    type: "snow",
    color: "#fff",
    snowflakeCount: 160,
    speed: [0.5, 2],
    wind: [-0.5, 2],
  },
  {
    name: "Spring Leaves",
    type: "leaf",
    color: "#22c55e",
    count: 15,
    speed: [1, 2],
    wind: [-0.5, 0.5],
  },
];

const ThemeToggleButton: React.FC<ThemeToggleProps> = ({
  themes = defaultThemes,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      setSelectedTheme(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    if (selectedTheme) {
      localStorage.setItem("selectedTheme", JSON.stringify(selectedTheme));
    } else {
      localStorage.removeItem("selectedTheme");
    }
  }, [selectedTheme]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-20 right-6 p-2 text-white bg-purple-500 dark:bg-purple-700 hover:bg-purple-700 dark:hover:bg-purple-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            aria-label="Choose theme"
          >
            {selectedTheme?.type === "leaf" ? (
              <Leaf className="w-6 h-6" />
            ) : (
              <Snowflake className="w-6 h-6" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold dark:text-white">
                  Choose Theme
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                {themes.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => {
                      setSelectedTheme(
                        selectedTheme?.name === theme.name ? null : theme,
                      );
                      setIsModalOpen(false);
                    }}
                    className={`w-full p-4 rounded-lg text-left transition-colors ${
                      selectedTheme?.name === theme.name
                        ? "bg-purple-100 dark:bg-purple-900 border-2 border-purple-500"
                        : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-transparent"
                    }`}
                  >
                    <div className="font-medium dark:text-white">
                      {theme.name}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {selectedTheme && (
        <div className="fixed inset-0 pointer-events-none">
          {selectedTheme.type === "snow" ? (
            <ReactSnowfall
              color={selectedTheme.color}
              snowflakeCount={selectedTheme.snowflakeCount}
              speed={selectedTheme.speed}
              wind={selectedTheme.wind}
            />
          ) : (
            <LeafFall
              color={selectedTheme.color}
              count={selectedTheme.count}
              speed={selectedTheme.speed}
              wind={selectedTheme.wind}
              type={"leaf"}
              name={""}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ThemeToggleButton;

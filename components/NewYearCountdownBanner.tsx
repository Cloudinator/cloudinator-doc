import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";

interface TimeLeft {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function NewYearCountdownBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>({});
  const [isCountdownOver, setIsCountdownOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if ((newTimeLeft as TimeLeft).total <= 0) {
        clearInterval(timer);
        setIsCountdownOver(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): TimeLeft | {} {
    const difference = +new Date("2025-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference,
      };
    }

    return timeLeft;
  }

  const fireworkVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: {
      scale: [0, 1.2, 1],
      opacity: [1, 1, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
    >
      <div className="max-w-7xl mx-auto py-3 px-4 sm:py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-white" />
            <p className="font-medium text-white">
              {isCountdownOver ? (
                "Happy New Year 2025! 🎉"
              ) : (
                <>
                  Countdown to 2025: {(timeLeft as TimeLeft).days}d{" "}
                  {(timeLeft as TimeLeft).hours}h{" "}
                  {(timeLeft as TimeLeft).minutes}m{" "}
                  {(timeLeft as TimeLeft).seconds}s
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isCountdownOver && (
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            initial="initial"
            animate="animate"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                variants={fireworkVariants}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

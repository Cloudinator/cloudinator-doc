"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function InteractiveComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const launchDate = new Date("2024-12-22T11:59:59"); // Set your launch date here
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your server
    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full"
      >
        <motion.h1
          className="text-4xl font-bold text-center text-purple-600 mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Coming Soon
        </motion.h1>
        <p className="text-gray-600 text-center mb-6">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          {Object.entries(countdown).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-2xl font-bold text-purple-600">{value}</div>
              <div className="text-sm text-gray-500">{unit}</div>
            </div>
          ))}
        </div>
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300"
              type="submit"
            >
              Notify Me
            </motion.button>
          </form>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-center"
          >
            Thanks for subscribing! We'll keep you updated.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

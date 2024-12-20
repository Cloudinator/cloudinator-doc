"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";

export default function MaintenanceBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Placeholder for any logic to determine if the banner should be shown
    // For example, fetching maintenance status from an API
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-yellow-50 border-b border-yellow-200"
        >
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertCircle
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-3 font-medium text-yellow-700 text-center">
                  Our website is currently in beta. We’d love to hear your
                  feedback!
                </p>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-4">
              <button
                type="button"
                className="flex p-2 rounded-md hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 ease-in-out"
                onClick={handleClose}
                aria-label="Close maintenance notification"
              >
                <X className="h-6 w-6 text-yellow-500" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 animate-pulse opacity-10"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

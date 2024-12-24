"use client";

import { useState } from "react";
import { Cloud, Heart, ExternalLink } from "lucide-react";

export default function FooterBanner() {
  const [feedback, setFeedback] = useState({ show: false, type: null });

  const handleFeedback = (type: any) => {
    setFeedback({ show: true, type });
    setTimeout(() => setFeedback({ show: false, type: null }), 3000);
  };

  return (
    <div className="bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium">Powered by Cloudinator</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleFeedback("helpful")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Helpful"
              >
                <Heart className="h-4 w-4" />
              </button>

              <a
                href="https://cloudinator-ui.cloudinator.cloud/"
                className="text-sm text-blue-500 hover:text-blue-600 flex items-center"
              >
                Cloudinator Website
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {feedback.show && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
              Thank you for your feedback!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

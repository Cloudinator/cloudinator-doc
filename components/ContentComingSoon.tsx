"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContentComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-4 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md border border-purple-100 dark:border-gray-700"
    >
      <h2 className="text-xl font-bold text-center text-gray-800 dark:text-gray-100 mb-3">
        Coming Soon!
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">
        Stay tuned for updates!
      </p>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "20%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-4">
        Progress: 20%
      </p>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter email for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full text-sm"
          />
          <Button type="submit" className="w-full text-sm">
            Get Notified
          </Button>
        </form>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-green-600 dark:text-green-400 text-sm"
        >
          Thanks for signing up!
        </motion.p>
      )}
    </motion.div>
  );
}

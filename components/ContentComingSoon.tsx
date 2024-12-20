"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Send } from "lucide-react";
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
      className="my-8 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-purple-100 dark:border-gray-700"
    >
      <div className="flex items-center justify-center mb-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <BookOpen className="w-12 h-12 text-purple-600 dark:text-purple-400" />
        </motion.div>
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
        Exciting Content Coming Soon!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
        We're working hard to bring you amazing content. Stay tuned for updates!
      </p>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "20%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
        Content completion: 20%
      </p>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" /> Get Notified
          </Button>
        </form>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-green-600 dark:text-green-400"
        >
          Thanks for signing up! We'll keep you posted.
        </motion.p>
      )}
    </motion.div>
  );
}

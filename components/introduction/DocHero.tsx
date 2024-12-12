"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedHeroText from "./AnimatedHeroText";

interface DocHeroProps {
  title: string;
  description: string;
  getStartedHref?: string;
  githubHref?: string;
}

const DocHero: React.FC<DocHeroProps> = ({
  title,
  description,
  getStartedHref = "/getting-started",
  githubHref = "/installation",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: ["-10%", "10%"],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/20 to-background dark:from-primary/10 dark:to-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" />
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent dark:from-primary/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <motion.div
        className="relative pt-16 pb-20 sm:pt-24 sm:pb-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center">
          <motion.h1
            className="text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.div variants={itemVariants}>
            <AnimatedHeroText />
          </motion.div>
          <motion.p
            className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div
            className="absolute left-0 bottom-1/2 transform -translate-y-1/2 hidden lg:block"
            animate={floatingAnimation}
          >
            <Image
              src="/images/cloud.svg"
              alt="Decorative image"
              width={100}
              height={100}
              className="opacity-50 dark:opacity-30"
            />
          </motion.div>
          <motion.div
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-6"
            variants={itemVariants}
          >
            <motion.div
              className="rounded-md shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={getStartedHref} passHref>
                <Button
                  className="bg-purple-500 text-white hover:bg-purple-700 text-xl p-6 rounded-lg w-full sm:w-auto"
                  size="lg"
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="mt-3 rounded-md shadow sm:mt-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={githubHref} passHref>
                <Button
                  className="bg-purple-500 text-white hover:bg-purple-700 text-xl p-6 rounded-lg w-full sm:w-auto"
                  size="lg"
                >
                  Installation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
          animate={floatingAnimation}
        >
          <Image
            src="/images/cloud.svg"
            alt="Decorative image"
            width={100}
            height={100}
            className="opacity-50 dark:opacity-30"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DocHero;

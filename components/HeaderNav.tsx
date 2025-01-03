"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";

export default function HeaderNav() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resources = [
    {
      title: "Documentation",
      href: "/",
      description: "Learn how to use Cloudinator effectively",
    },
    {
      title: "Learning Resources",
      href: "/resource/spring-microservice/introduction",
      description: "Detailed API documentation and examples",
    },
    {
      title: "Tutorials",
      href: "/tutorial",
      description: "Step-by-step guides for common tasks",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="container flex h-16 items-center justify-between">
        <div className="px-16 mr-4 flex items-center space-x-2">
          <Image
            src="/images/cloudinator-v2.1.png"
            alt="Cloudinator Logo"
            width={60}
            height={60}
          />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Cloudinator
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-96 gap-3 md:w-[400px] bg-white dark:bg-gray-800 rounded-md shadow-lg hover:text-purple-500">
                    <li className="row-span-3 bg-white dark:bg-gray-700 rounded-lg hover:text-purple-600 dark:hover:text-purple-400">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-lg p-6 no-underline outline-none focus:shadow-md transition-colors hover:bg-gray-100 dark:hover:bg-purple-900"
                          href="https://cloudinator.istad.co"
                          target="_blank"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-gray-800 dark:text-white">
                            Cloudinator Platform
                          </div>
                          <p className="text-sm leading-tight text-gray-600 dark:text-gray-300">
                            IaC Advanced platform for developers to deploy
                            services.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-96 md:w-[400px] bg-white dark:bg-gray-800 rounded-md shadow-lg">
                    {resources.map((resource) => (
                      <li key={resource.title}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-lg p-6 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-purple-900"
                            href={resource.href}
                          >
                            <div className="text-sm font-medium leading-none text-gray-800 dark:text-white">
                              {resource.title}
                            </div>
                            <p className="text-sm leading-snug text-gray-500 dark:text-gray-400">
                              {resource.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400`}
                >
                  <a href="/about">About</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

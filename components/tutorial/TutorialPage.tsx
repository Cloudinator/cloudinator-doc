"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Play,
  Clock,
  BookOpen,
  Filter,
  Search,
  BookMarked,
  Star,
  MoreVertical,
  Share2,
} from "lucide-react";
import { VideoModal } from "./VideoModal";
import { useToast } from "@/hooks/use-toast";
import { EmptyState } from "./EmptyState";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: string;
  level: string;
  instructor: string;
  rating: number;
  progress: number;
  thumbnail: string;
  videoUrl: string;
}

interface Category {
  id: string;
  name: string;
}

const TutorialPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const { toast } = useToast();

  // Sample course data
  const courses: Course[] = [
    {
      id: 1,
      title: "How to deploy HTML website",
      description: "Learn the basics of deployment with cloudinator of HTML",
      duration: "2 mins",
      category: "frontend",
      level: "beginner",
      instructor: "Sarah Johnson",
      rating: 5.0,
      progress: 45,
      thumbnail:
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/3HXWjxX-dyKecNxVJyGXcOACqBWEugXowOX274.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "How to deploy React website",
      description:
        "Learn the basics of deployment with cloudinator of React.js",
      duration: "3 mins",
      category: "frontend",
      level: "advanced",
      instructor: "Mike Chen",
      rating: 4.9,
      progress: 0,
      thumbnail:
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/cloudinator/coming-soon-Eu8z6EjkoLEWmby2BjtlbsRxobRoYF.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    },
    {
      id: 3,
      title: "How to deploy Spring Microservice",
      description:
        "Learn the basics of deployment with cloudinator of Spring Microservice",
      duration: "4 mins",
      category: "spring",
      level: "intermediate",
      instructor: "Alex Kumar",
      rating: 4.7,
      progress: 0,
      thumbnail:
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/cloudinator/coming-soon-Eu8z6EjkoLEWmby2BjtlbsRxobRoYF.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    },
    // Add more courses as needed
  ];

  const categories: Category[] = [
    { id: "all", name: "All Videos" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "api", name: "API" },
    { id: "spring", name: "Spring Microservice" },
  ];

  const getLevelBadgeColor = (level: string): string => {
    const colors: { [key: string]: string } = {
      beginner: "bg-green-100 text-green-800",
      intermediate: "bg-blue-100 text-blue-800",
      advanced: "bg-purple-100 text-purple-800",
    };
    return colors[level] || "bg-gray-100 text-gray-800";
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Cloudinator Guide</h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search tutorials..."
              className="pl-9 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Categories Tabs */}
      <Tabs
        defaultValue="all"
        className="w-full"
        onValueChange={setSelectedCategory}
      >
        <ScrollArea className="w-full">
          <TabsList className="inline-flex w-full md:w-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
              >
                <span className="data-[state=active]:text-white">
                  {category.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>

        {/* Guide Grid */}
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full h-48 object-cover rounded-t-xl"
                        />
                        {course.progress > 0 && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 grid place-content-center">
                            <Progress value={course.progress} className="h-1" />
                            <p className="text-white text-xs mt-1">
                              New Video!
                            </p>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getLevelBadgeColor(course.level)}>
                          {course.level}
                        </Badge>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm">{course.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {course.title}
                      </CardTitle>
                      <CardDescription className="mb-4">
                        {course.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <Button
                        className="flex-1 mr-2"
                        onClick={() => {
                          toast({
                            title: "Coming Soon!",
                            description:
                              "This video content will be available soon.",
                          });
                          // setCurrentVideoUrl(course.videoUrl);
                          // setIsVideoModalOpen(true);
                        }}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <EmptyState
                message={`No tutorials found for ${category.name === "all" ? "any category" : category.name}. Check back later for new content!`}
              />
            )}
          </TabsContent>
        ))}
      </Tabs>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={currentVideoUrl}
      />
    </div>
  );
};

export default TutorialPage;

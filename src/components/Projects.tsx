"use client";

import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';

const defaultProjects = [
    { id: 5, title: 'Resume Builder', description: 'An intuitive web application that helps users create professional and modern resumes with ease. Features customizable templates and a user-friendly interface.', imgSrc: 'https://i.ibb.co/p95QcnV/Screenshot-2025-08-07-233900.png', tags: ["React", "Next.js", "Vercel", "Web App"], liveUrl: "https://resume-builder-hassan.vercel.app/", githubUrl: "https://github.com/hassanzubair99/resume-builder-hassan", imgHint: "resume builder app" },
    { id: 6, title: 'BANDAGE - E-COMMERCE', description: "Welcome to Bandage, where fashion meets thoughtful design and user-friendly experience. Our Summer 2020 drop highlights standout collections for Men, Women, Accessories, and Kids, each built around a fusion of bold Graphic Design and refined aesthetics. Discover our Editor's Picks and Bestseller Products, curated to inspire confidence and timeless style.", imgSrc: 'https://i.ibb.co/rGb7ScP7/Screenshot-2025-08-07-211807.png', tags: ["E-commerce", "React", "Next.js"], liveUrl: "https://e-commerce-hack-hassan-1uyq.vercel.app/", githubUrl: "https://github.com/hassanzubair99/e-commerce-hack-hassan", imgHint: "ecommerce fashion" },
    { id: 7, title: 'Crimson Stream', description: 'A feature-rich video streaming platform offering a seamless viewing experience. Browse and watch a diverse library of content with a modern and intuitive user interface.', imgSrc: 'https://i.ibb.co/kV0ptXhV/Screenshot-2025-08-08-022936.png', tags: ["Next.js", "Streaming", "Vercel"], liveUrl: "https://crimson-stream.vercel.app/", githubUrl: "https://github.com/hassanzubair99/crimson-stream", imgHint: "video streaming platform" },
    { id: 8, title: 'Guardian Angle', description: 'A modern landing page with a clean and professional design, showcasing key features and user testimonials in a visually appealing layout.', imgSrc: 'https://i.ibb.co/93b9PdYy/Screenshot-2025-08-08-150238.png', tags: ["Landing Page", "Next.js", "Vercel"], liveUrl: "https://gurdian-angle.vercel.app/", githubUrl: "https://github.com/hassanzubair99/gurdian-angle", imgHint: "guardian angle landing page" },
    { id: 9, title: 'TaskCraft 3D', description: 'TaskCraft 3D brings your to-do list to life with an immersive, animated interface. Experience the next dimension of productivity with interactive visuals and a gamified approach to task management.', imgSrc: 'https://i.ibb.co/mFh4CjKB/Screenshot-2025-08-28-180916.png', tags: ["Productivity", "3D", "Next.js"], liveUrl: "https://todolist-animated.vercel.app/", githubUrl: "https://github.com/hassanzubair99/TODOLIST-ANIMATED", imgHint: "productivity app" },
];

export function Projects() {
  const [projects, setProjects] = useState(defaultProjects);
  const isMobile = useIsMobile();

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      try {
        const parsedProjects = JSON.parse(storedProjects);
        if (Array.isArray(parsedProjects)) {
            setProjects(parsedProjects);
        }
      } catch (error) {
        console.error("Failed to parse projects from localStorage", error);
      }
    }
  }, []);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">My Creative Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one was a unique challenge and a learning experience.
          </p>
        </div>
        {isMobile ? (
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-sm mx-auto"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                     <ProjectCard {...project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex"/>
            <CarouselNext  className="hidden sm:flex"/>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

    
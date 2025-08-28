"use client";

import React, { useState, useEffect } from 'react';
import CardSwap, { Card } from './CardSwap';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const defaultProjects = [
    { id: 5, title: 'Resume Builder', description: 'An intuitive web application that helps users create professional and modern resumes with ease. Features customizable templates and a user-friendly interface.', imgSrc: 'https://i.ibb.co/p95QcnV/Screenshot-2025-08-07-233900.png', tags: ["React", "Next.js", "Vercel", "Web App"], liveUrl: "https://resume-builder-hassan.vercel.app/", githubUrl: "https://github.com/hassanzubair99/resume-builder-hassan", imgHint: "resume builder app" },
    { id: 6, title: 'BANDAGE - E-COMMERCE', description: "Welcome to Bandage, where fashion meets thoughtful design and user-friendly experience. Our Summer 2020 drop highlights standout collections for Men, Women, Accessories, and Kids, each built around a fusion of bold Graphic Design and refined aesthetics. Discover our Editor's Picks and Bestseller Products, curated to inspire confidence and timeless style.", imgSrc: 'https://i.ibb.co/rGb7ScP7/Screenshot-2025-08-07-211807.png', tags: ["E-commerce", "React", "Next.js"], liveUrl: "https://e-commerce-hack-hassan-1uyq.vercel.app/", githubUrl: "https://github.com/hassanzubair99/e-commerce-hack-hassan", imgHint: "ecommerce fashion" },
    { id: 7, title: 'Crimson Stream', description: 'A feature-rich video streaming platform offering a seamless viewing experience. Browse and watch a diverse library of content with a modern and intuitive user interface.', imgSrc: 'https://i.ibb.co/kV0ptXhV/Screenshot-2025-08-08-022936.png', tags: ["Next.js", "Streaming", "Vercel"], liveUrl: "https://crimson-stream.vercel.app/", githubUrl: "https://github.com/hassanzubair99/crimson-stream", imgHint: "video streaming platform" },
    { id: 8, title: 'Guardian Angle', description: 'A modern landing page with a clean and professional design, showcasing key features and user testimonials in a visually appealing layout.', imgSrc: 'https://i.ibb.co/93b9PdYy/Screenshot-2025-08-08-150238.png', tags: ["Landing Page", "Next.js", "Vercel"], liveUrl: "https://gurdian-angle.vercel.app/", githubUrl: "https://github.com/hassanzubair99/gurdian-angle", imgHint: "guardian angle landing page" },
    { id: 9, title: 'TaskCraft 3D', description: 'TaskCraft 3D brings your to-do list to life with an immersive, animated interface. Experience the next dimension of productivity with interactive visuals and a gamified approach to task management.', imgSrc: 'https://i.ibb.co/M5P7DvH/Screenshot-2025-08-28-180916.png', tags: ["Productivity", "3D", "Next.js"], liveUrl: "https://todolist-animated.vercel.app/", githubUrl: "https://github.com/hassanzubair99/TODOLIST-ANIMATED", imgHint: "productivity app" },
];

export function Projects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

        {isClient ? (
          <div style={{ height: '600px', position: 'relative' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
            >
              {projects.map((project) => (
                <Card key={project.id}>
                    <div className="flex flex-col h-full">
                        <div className="relative aspect-video mb-4 rounded-t-md overflow-hidden -mt-6 -mx-6">
                            <Image
                                src={project.imgSrc}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint={project.imgHint}
                                quality={100}
                            />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                        </div>
                         <div className="flex gap-4 mt-auto pt-4 w-full">
                            {project.liveUrl && (
                                <Button asChild className="flex-1 bg-primary hover:bg-primary/80 transition-transform hover:scale-105">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                    </a>
                                </Button>
                            )}
                            {project.githubUrl && (
                                <Button asChild variant="outline" className="flex-1 transition-transform hover:scale-105">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" /> Source
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        ) : (
          <div className="text-center">Loading projects...</div>
        )}
      </div>
    </section>
  );
}

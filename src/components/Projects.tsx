"use client";

import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';

const defaultProjects = [
  {
    title: "Resume Builder",
    description: "An intuitive web application that helps users create professional and modern resumes with ease. Features customizable templates and a user-friendly interface.",
    imgSrc: "https://i.ibb.co/p95QcnV/Screenshot-2025-08-07-233900.png",
    imgHint: "resume builder app",
    tags: ["React", "Next.js", "Vercel", "Web App"],
    liveUrl: "https://resume-builder-hassan.vercel.app/",
    githubUrl: "https://github.com/hassanzubair99/resume-builder-hassan",
  },
  {
    title: "BANDAGE - E-COMMERCE",
    description: "Welcome to Bandage, where fashion meets thoughtful design and user-friendly experience. Our Summer 2020 drop highlights standout collections for Men, Women, Accessories, and Kids, each built around a fusion of bold Graphic Design and refined aesthetics. Discover our Editor's Picks and Bestseller Products, curated to inspire confidence and timeless style.",
    imgSrc: "https://i.ibb.co/rGb7ScP7/Screenshot-2025-08-07-211807.png",
    imgHint: "ecommerce fashion",
    tags: ["E-commerce", "React", "Next.js"],
    liveUrl: "https://e-commerce-hack-hassan-1uyq.vercel.app/",
    githubUrl: "https://github.com/hassanzubair99/e-commerce-hack-hassan",
  },
  {
    title: "Crimson Stream",
    description: "A feature-rich video streaming platform offering a seamless viewing experience. Browse and watch a diverse library of content with a modern and intuitive user interface.",
    imgSrc: "https://i.ibb.co/kV0ptXhV/Screenshot-2025-08-08-022936.png",
    imgHint: "video streaming platform",
    tags: ["Next.js", "Streaming", "Vercel"],
    liveUrl: "https://crimson-stream.vercel.app/",
    githubUrl: "https://github.com/hassanzubair99/crimson-stream",
  },
];

export function Projects() {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

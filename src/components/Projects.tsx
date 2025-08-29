"use client";

import React, { useState, useEffect } from 'react';
import { ChromaGrid } from './ChromaGrid';

const defaultProjects = [
    { id: 5, title: 'Resume Builder', description: 'An intuitive web application that helps users create professional and modern resumes with ease. Features customizable templates and a user-friendly interface.', image: 'https://i.ibb.co/p95QcnV/Screenshot-2025-08-07-233900.png', subtitle: "Web App", liveUrl: "https://resume-builder-hassan.vercel.app/", githubUrl: "https://github.com/hassanzubair99/resume-builder-hassan" },
    { id: 6, title: 'BANDAGE - E-COMMERCE', description: "Welcome to Bandage, where fashion meets thoughtful design and user-friendly experience.", image: 'https://i.ibb.co/rGb7ScP7/Screenshot-2025-08-07-211807.png', subtitle: "E-commerce", liveUrl: "https://e-commerce-hack-hassan-1uyq.vercel.app/", githubUrl: "https://github.com/hassanzubair99/e-commerce-hack-hassan" },
    { id: 7, title: 'Crimson Stream', description: 'A feature-rich video streaming platform offering a seamless viewing experience. Browse and watch a diverse library of content with a modern and intuitive user interface.', image: 'https://i.ibb.co/kV0ptXhV/Screenshot-2025-08-08-022936.png', subtitle: "Streaming", liveUrl: "https://crimson-stream.vercel.app/", githubUrl: "https://github.com/hassanzubair99/crimson-stream" },
    { id: 8, title: 'Guardian Angle', description: 'A modern landing page with a clean and professional design, showcasing key features and user testimonials in a visually appealing layout.', image: 'https://i.ibb.co/93b9PdYy/Screenshot-2025-08-08-150238.png', subtitle: "Landing Page", liveUrl: "https://gurdian-angle.vercel.app/", githubUrl: "https://github.com/hassanzubair99/gurdian-angle" },
    { id: 9, title: 'TaskCraft 3D', description: 'TaskCraft 3D brings your to-do list to life with an immersive, animated interface. Experience the next dimension of productivity.', image: 'https://i.ibb.co/M5P7DvHh/Screenshot-2025-08-28-180916.png', subtitle: "Productivity App", liveUrl: "https://todolist-animated.vercel.app/", githubUrl: "https://github.com/hassanzubair99/TODOLIST-ANIMATED" },
    { id: 10, title: 'Culinaria', description: 'Culinaria is an inviting, animated recipe discovery platform that offers a visually immersive way to explore culinary delights. Leveraging vivid imagery and a clean, intuitive layout, the app makes browsing and selecting recipes a seamless—and delightful—experience. \n\nUI Highlights: \n\nA minimalist, elegant design that puts stunning food imagery front and center. \n\nClear, typographic hierarchy: bold headings like “Savor the Flavor” and streamlined recipe previews. \n\nDynamic visuals with featured recipes above a broader gallery—making navigation both functional and stylish. \n\nUX Highlights: \n\nEasy navigation: Prominent categories (Recipes, Favorites) and intuitive menu access. \n\nEngaging user flow: Highlighted recipes draw attention, while the ‘Explore All Recipes’ section invites deeper browsing. \n\nMood-setting tone: With messaging like “Your next culinary adventure starts here,” the interface feels welcoming and inspiring. \n\nGoal:\nTo make discovering new recipes both effortless and delightful—combining visual charm with intuitive browsing to spark users’ culinary creativity.', image: 'https://i.ibb.co/Hpk2fDDv/Screenshot-2025-08-28-190508.png', subtitle: "Recipe App", liveUrl: "https://recipies-jade.vercel.app/", githubUrl: "https://github.com/hassanzubair99/RECIPIES" },
    { id: 11, title: 'Kidz Knowledge', description: 'An engaging and educational platform for kids, designed to make learning fun and interactive.', image: 'https://i.ibb.co/SDgj43Dj/Screenshot-2025-08-28-190805.png', subtitle: "Kids Learning", liveUrl: "https://kidz-knowledge.vercel.app/", githubUrl: "https://github.com/hassanzubair99/kid-knowledge" },
    { id: 12, title: 'E-commerce Platform', description: 'A fully functional e-commerce platform with a modern design, product browsing, and a seamless checkout experience.', image: 'https://i.ibb.co/0RgdNqmf/Screenshot-2025-08-29-175921.png', subtitle: "E-commerce", liveUrl: "https://e-commerce-zeta-one-62.vercel.app/" },
    { id: 13, title: 'Net Speed Checker', description: 'A simple and effective tool to quickly check your internet connection speed, providing real-time download and upload measurements.', image: 'https://i.ibb.co/r2L0rdBj/Screenshot-2025-08-29-180144.png', subtitle: 'Tool', liveUrl: 'https://net-speed-checker.vercel.app/' },
    { id: 14, title: 'Spotify Clone', description: 'A functional clone of the Spotify web player, built to showcase expertise in creating complex user interfaces and handling media playback.', image: 'https://i.ibb.co/d4wcyKfG/Screenshot-2025-08-29-180414.png', subtitle: 'Web App', liveUrl: 'https://spotify-clone-hteg.vercel.app/home' },
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
            // Map stored projects to ChromaItem format
            const formattedProjects = parsedProjects.map(p => ({
                ...p,
                image: p.imgSrc,
                subtitle: p.tags.join(', ') || 'Project'
            }));
            setProjects(formattedProjects);
        }
      } catch (error) {
        console.error("Failed to parse projects from localStorage", error);
      }
    }
  }, []);

  const chromaItems = projects.map(p => ({
    image: p.image || p.imgSrc,
    title: p.title,
    subtitle: p.subtitle,
    url: p.liveUrl,
    borderColor: '#BF40BF',
    gradient: `linear-gradient(145deg, hsl(var(--accent) / 0.5), hsl(var(--background)))`
  }));

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
          <div style={{ height: 'auto', position: 'relative' }}>
             <ChromaGrid 
                items={chromaItems}
                radius={400}
                damping={0.5}
                fadeOut={0.7}
                ease="power3.out"
             />
          </div>
        ) : (
          <div className="text-center">Loading projects...</div>
        )}
      </div>
    </section>
  );
}

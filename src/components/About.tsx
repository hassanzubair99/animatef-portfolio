"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Figma', 'Docker'
];

const defaultAboutMe = "I am Hassan Zubair, an ambitious IT Developer and AI Website Maker based in Karachi, Pakistan. With a passion for building modern, responsive, and animated websites, I specialize in technologies like React.js, Next.js, and Tailwind CSS. I also develop and customize websites using Odoo for small businesses. My skill set includes AI tool integration and website automation, allowing me to create smart, user-centric digital experiences. I’ve received recognition for both leadership and communication, highlighting my ability to work effectively in teams and deliver exceptional results.";
const defaultProfilePic = "https://i.ibb.co/TqcxYPNT/EQYG2889.jpg";

export function About() {
  const [aboutMeText, setAboutMeText] = useState(defaultAboutMe);
  const [profilePicUrl, setProfilePicUrl] = useState(defaultProfilePic);

  useEffect(() => {
    const storedAboutMe = localStorage.getItem('aboutMeText');
    const storedProfilePic = localStorage.getItem('profilePicUrl');
    
    if (storedAboutMe) {
      setAboutMeText(storedAboutMe);
    }
    if (storedProfilePic) {
      setProfilePicUrl(storedProfilePic);
    }
  }, []);

  return (
    <section id="about" className="py-24 sm:py-32 bg-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative aspect-square rounded-full overflow-hidden w-4/5 lg:w-full mx-auto shadow-2xl">
              <Image
                src={profilePicUrl || defaultProfilePic}
                alt="Portrait"
                layout="fill"
                objectFit="cover"
                data-ai-hint="professional portrait"
                className="scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="lg:col-span-3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {aboutMeText}
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {skills.map(skill => (
                  <Badge key={skill} className="text-sm px-4 py-2 bg-card hover:bg-card/80 border-primary transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

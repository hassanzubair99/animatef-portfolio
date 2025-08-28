"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

// Define the type for a project
interface Project {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  imgHint: string;
}

const defaultProjects: Project[] = [
    { id: 5, title: 'Resume Builder', description: 'An intuitive web application that helps users create professional and modern resumes with ease. Features customizable templates and a user-friendly interface.', imgSrc: 'https://i.ibb.co/p95QcnV/Screenshot-2025-08-07-233900.png', tags: ["React", "Next.js", "Vercel", "Web App"], liveUrl: "https://resume-builder-hassan.vercel.app/", githubUrl: "https://github.com/hassanzubair99/resume-builder-hassan", imgHint: "resume builder app" },
    { id: 6, title: 'BANDAGE - E-COMMERCE', description: "Welcome to Bandage, where fashion meets thoughtful design and user-friendly experience. Our Summer 2020 drop highlights standout collections for Men, Women, Accessories, and Kids, each built around a fusion of bold Graphic Design and refined aesthetics. Discover our Editor's Picks and Bestseller Products, curated to inspire confidence and timeless style.", imgSrc: 'https://i.ibb.co/rGb7ScP7/Screenshot-2025-08-07-211807.png', tags: ["E-commerce", "React", "Next.js"], liveUrl: "https://e-commerce-hack-hassan-1uyq.vercel.app/", githubUrl: "https://github.com/hassanzubair99/e-commerce-hack-hassan", imgHint: "ecommerce fashion" },
    { id: 7, title: 'Crimson Stream', description: 'A feature-rich video streaming platform offering a seamless viewing experience. Browse and watch a diverse library of content with a modern and intuitive user interface.', imgSrc: 'https://i.ibb.co/kV0ptXhV/Screenshot-2025-08-08-022936.png', tags: ["Next.js", "Streaming", "Vercel"], liveUrl: "https://crimson-stream.vercel.app/", githubUrl: "https://github.com/hassanzubair99/crimson-stream", imgHint: "video streaming platform" },
    { id: 8, title: 'Guardian Angle', description: 'A modern landing page with a clean and professional design, showcasing key features and user testimonials in a visually appealing layout.', imgSrc: 'https://i.ibb.co/93b9PdYy/Screenshot-2025-08-08-150238.png', tags: ["Landing Page", "Next.js", "Vercel"], liveUrl: "https://gurdian-angle.vercel.app/", githubUrl: "https://github.com/hassanzubair99/gurdian-angle", imgHint: "guardian angle landing page" },
    { id: 9, title: 'TaskCraft 3D', description: 'TaskCraft 3D brings your to-do list to life with an immersive, animated interface. Experience the next dimension of productivity with interactive visuals and a gamified approach to task management.', imgSrc: 'https://i.ibb.co/M5P7DvHh/Screenshot-2025-08-28-180916.png', tags: ["Productivity", "3D", "Next.js"], liveUrl: "https://todolist-animated.vercel.app/", githubUrl: "https://github.com/hassanzubair99/TODOLIST-ANIMATED", imgHint: "productivity app" },
];

const defaultAboutMe = "I am Hassan Zubair, an ambitious IT Developer and AI Website Maker based in Karachi, Pakistan. With a passion for building modern, responsive, and animated websites, I specialize in technologies like React.js, Next.js, and Tailwind CSS. I also develop and customize websites using Odoo for small businesses. My skill set includes AI tool integration and website automation, allowing me to create smart, user-centric digital experiences. I’ve received recognition for both leadership and communication, highlighting my ability to work effectively in teams and deliver exceptional results.";
const defaultProfilePic = "https://i.ibb.co/fGtmrx7g/EQYG2889-1.png";

export default function AdminPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // About Me state
  const [aboutMeText, setAboutMeText] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState('');

  // Project state
  const [projects, setProjects] = useState<Project[]>([]);

  // State for the new/edit project form
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [projectImgUrl, setProjectImgUrl] = useState('');


  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAdminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      // Load data from localStorage
      const storedAboutMe = localStorage.getItem('aboutMeText');
      const storedProfilePic = localStorage.getItem('profilePicUrl');
      const storedProjects = localStorage.getItem('projects');
      
      setAboutMeText(storedAboutMe || defaultAboutMe);
      setProfilePicUrl(storedProfilePic || defaultProfilePic);
      setProjects(storedProjects ? JSON.parse(storedProjects) : defaultProjects);

    } else {
      router.push('/admin/login');
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    router.push('/admin/login');
  };

  const handleAboutMeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('aboutMeText', aboutMeText);
    localStorage.setItem('profilePicUrl', profilePicUrl);
    toast({
        title: 'About Me Updated!',
        description: 'Your changes have been saved.',
    });
  };
  
  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitle || !projectDesc) {
        toast({
            variant: 'destructive',
            title: 'Missing Fields',
            description: 'Please fill out all project fields.',
        });
        return;
    }
    
    let updatedProjects;

    if (editingProject) {
        // Update existing project
        updatedProjects = projects.map(p => p.id === editingProject.id ? { ...p, title: projectTitle, description: projectDesc, imgSrc: projectImgUrl } : p);
        toast({
            title: 'Project Updated!',
            description: `"${projectTitle}" has been successfully updated.`,
        });
    } else {
        // Add new project
        const newProject: Project = {
            id: Date.now(), // Use timestamp for unique ID
            title: projectTitle,
            description: projectDesc,
            imgSrc: projectImgUrl || 'https://placehold.co/600x400.png',
            tags: [], // Default empty tags
            imgHint: 'custom project'
        };
        updatedProjects = [...projects, newProject];
        toast({
            title: 'Project Added!',
            description: `"${projectTitle}" has been added to your projects.`,
        });
    }
    
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    
    // Reset form
    setEditingProject(null);
    setProjectTitle('');
    setProjectDesc('');
    setProjectImgUrl('');
  };

  const handleEditClick = (project: Project) => {
    setEditingProject(project);
    setProjectTitle(project.title);
    setProjectDesc(project.description);
    setProjectImgUrl(project.imgSrc);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  
  const handleDeleteClick = (projectId: number, projectTitle: string) => {
    const updatedProjects = projects.filter(p => p.id !== projectId);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    toast({
        variant: 'destructive',
        title: 'Project Deleted!',
        description: `"${projectTitle}" has been removed.`,
    });
  };
  
  const handleCancelEdit = () => {
    setEditingProject(null);
    setProjectTitle('');
    setProjectDesc('');
    setProjectImgUrl('');
  }

  if (loading || !isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/40 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <Button onClick={handleLogout} variant="destructive">Logout</Button>
        </div>

        {/* About Me Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Edit 'About Me' Section</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAboutMeSubmit} className="space-y-6">
              <div>
                <Label htmlFor="about-text">About Me Content</Label>
                <Textarea 
                  id="about-text"
                  value={aboutMeText}
                  onChange={(e) => setAboutMeText(e.target.value)}
                  rows={6}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="profile-pic-url">Profile Picture URL</Label>
                <Input 
                  id="profile-pic-url"
                  type="text"
                  placeholder="https://example.com/image.png"
                  value={profilePicUrl}
                  onChange={(e) => setProfilePicUrl(e.target.value)}
                  className="mt-2"
                />
              </div>
              <Button type="submit">Save About Me</Button>
            </form>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card>
          <CardHeader>
            <CardTitle>Manage Projects</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-lg">Existing Projects</h3>
              {projects.length > 0 ? projects.map(p => (
                <div key={p.id} className="flex items-center justify-between p-3 bg-card rounded-md border">
                  <span>{p.title}</span>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditClick(p)}>Edit</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteClick(p.id, p.title)}>Delete</Button>
                  </div>
                </div>
              )) : <p className="text-muted-foreground">No projects yet.</p>}
            </div>
            <form onSubmit={handleProjectSubmit} className="space-y-6 pt-6 border-t">
               <h3 className="font-semibold text-lg">{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
               <div>
                  <Label htmlFor="project-title">Project Title</Label>
                  <Input id="project-title" placeholder="My Awesome Project" className="mt-2" value={projectTitle} onChange={e => setProjectTitle(e.target.value)} />
               </div>
               <div>
                  <Label htmlFor="project-desc">Description</Label>
                  <Textarea id="project-desc" placeholder="A short description..." rows={4} className="mt-2" value={projectDesc} onChange={e => setProjectDesc(e.target.value)} />
               </div>
               <div>
                  <Label htmlFor="project-img-url">Project Image URL</Label>
                  <Input id="project-img-url" type="text" placeholder="https://example.com/project-image.png" className="mt-2" value={projectImgUrl} onChange={e => setProjectImgUrl(e.target.value)} />
               </div>
              <div className="flex gap-4">
                 <Button type="submit">{editingProject ? 'Update Project' : 'Add Project'}</Button>
                 {editingProject && <Button type="button" variant="ghost" onClick={handleCancelEdit}>Cancel</Button>}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

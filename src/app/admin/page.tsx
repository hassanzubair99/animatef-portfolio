"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // About Me state
  const [aboutMeText, setAboutMeText] = useState("I'm a passionate and creative full-stack developer with a love for building beautiful, intuitive, and performant web applications. With a background in design, I bridge the gap between aesthetics and functionality. My goal is to create digital experiences that are not only user-friendly but also memorable.");
  const [profilePic, setProfilePic] = useState<File | null>(null);

  // Project state
  const [projects, setProjects] = useState([
    { id: 1, title: 'QuantumLeap CRM', description: 'A futuristic CRM platform designed to manage customer relations with predictive analytics and AI-powered insights.', imgSrc: '/placeholder-1.png' },
    { id: 2, title: 'NebulaStream', description: 'A decentralized video streaming service offering high-quality, buffer-free content delivery over a peer-to-peer network.', imgSrc: '/placeholder-2.png' },
    { id: 3, title: 'Aether E-commerce', description: 'An elegant and minimalist e-commerce store with a focus on user experience and seamless checkout process.', imgSrc: '/placeholder-3.png' },
    { id: 4, title: 'CodeScribe AI', description: 'An AI-powered documentation generator that automatically creates developer-friendly guides from your codebase.', imgSrc: '/placeholder-4.png' },
  ]);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAdminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
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
    // In a real app, you'd send this to your backend
    console.log('Updating About Me:', { aboutMeText, profilePic });
    alert('About Me section updated! (Frontend only)');
  };
  
  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    alert('Project added! (Frontend only)');
  };


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
                <Label htmlFor="profile-pic">Change Profile Picture</Label>
                <Input 
                  id="profile-pic"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProfilePic(e.target.files ? e.target.files[0] : null)}
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
              {projects.map(p => (
                <div key={p.id} className="flex items-center justify-between p-3 bg-card rounded-md border">
                  <span>{p.title}</span>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleProjectSubmit} className="space-y-6 pt-6 border-t">
               <h3 className="font-semibold text-lg">Add New Project</h3>
               <div>
                  <Label htmlFor="project-title">Project Title</Label>
                  <Input id="project-title" placeholder="My Awesome Project" className="mt-2" />
               </div>
               <div>
                  <Label htmlFor="project-desc">Description</Label>
                  <Textarea id="project-desc" placeholder="A short description..." rows={4} className="mt-2" />
               </div>
               <div>
                  <Label htmlFor="project-img">Project Image</Label>
                  <Input id="project-img" type="file" accept="image/*" className="mt-2" />
               </div>
              <Button type="submit">Add Project</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password === 'hassanno2') {
      toast({
        title: 'Login Successful',
        description: 'Redirecting to admin panel...',
      });
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      router.push('/admin');
    } else {
      setError('Invalid password. Please try again.');
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Invalid password. Please try again.',
      });
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm animate-fade-in-up">
        <form onSubmit={handleLogin}>
          <CardHeader>
            <CardTitle>Admin Access</CardTitle>
            <CardDescription>Enter the password to manage your portfolio.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="focus:ring-accent focus:border-accent"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/80 transition-transform duration-300 hover:scale-105">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

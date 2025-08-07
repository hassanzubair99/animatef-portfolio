import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  imgSrc: string;
  imgHint: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export function ProjectCard({ title, description, imgSrc, imgHint, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
        <div className="absolute -inset-1 bg-gradient-to-br from-accent to-purple-600 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition duration-500"></div>
        <Card className="relative bg-card border-2 border-primary hover:border-accent/50 transition-colors duration-300 h-full flex flex-col">
            <CardHeader>
                <div className="aspect-video relative rounded-t-md overflow-hidden -mt-6 -mx-6">
                    <Image
                        src={imgSrc}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={imgHint}
                        quality={100}
                        className="transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <div className="flex gap-4 mt-auto pt-4 w-full">
                    {liveUrl && (
                        <Button asChild className="flex-1 bg-primary hover:bg-primary/80 transition-transform hover:scale-105">
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </a>
                        </Button>
                    )}
                    {githubUrl && (
                        <Button asChild variant="outline" className="flex-1 transition-transform hover:scale-105">
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" /> Source
                            </a>
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    </div>
  );
}

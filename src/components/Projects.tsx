import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "QuantumLeap CRM",
    description: "A futuristic CRM platform designed to manage customer relations with predictive analytics and AI-powered insights.",
    imgSrc: "https://placehold.co/600x400.png",
    imgHint: "abstract tech",
    tags: ["Next.js", "TailwindCSS", "Prisma", "AI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "NebulaStream",
    description: "A decentralized video streaming service offering high-quality, buffer-free content delivery over a peer-to-peer network.",
    imgSrc: "https://placehold.co/600x400.png",
    imgHint: "galaxy stream",
    tags: ["React", "Web3", "IPFS", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Aether E-commerce",
    description: "An elegant and minimalist e-commerce store with a focus on user experience and seamless checkout process.",
    imgSrc: "https://placehold.co/600x400.png",
    imgHint: "minimalist shopping",
    tags: ["Shopify", "Liquid", "Animations", "UX"],
    liveUrl: "#",
    githubUrl: "#",
  },
    {
    title: "CodeScribe AI",
    description: "An AI-powered documentation generator that automatically creates developer-friendly guides from your codebase.",
    imgSrc: "https://placehold.co/600x400.png",
    imgHint: "code documentation",
    tags: ["Python", "NLP", "React", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">My Creative Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one was a unique challenge and a learning experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

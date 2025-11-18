import { useParams, Link } from "react-router-dom";
import { useProjects } from "@/hooks/useProjects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { projects } = useProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Project not found
        </h1>
        <div className="text-center">
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        {project.languages && project.languages.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.languages.map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        )}
      </div>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      {project.video && (
        <iframe
          src={project.video}
          className="w-full h-64 rounded mb-4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <a
        href={project.github}
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
}


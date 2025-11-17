import { Link } from "react-router-dom";
import { useProjects } from "@/hooks/useProjects";

export default function Projects() {
  const { projects } = useProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      {projects.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No projects yet. Check back soon!
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              {project.languages && project.languages.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
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
              <p className="text-muted-foreground mb-4">
                {project.description.length > 150
                  ? project.description.slice(0, 150) + "..."
                  : project.description}
              </p>
              <Link
                to={`/projects/${project.id}`}
                className="text-primary hover:underline"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

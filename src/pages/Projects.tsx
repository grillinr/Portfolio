import { useProjects } from "@/hooks/useProjects"

export default function Projects() {
  const { projects } = useProjects()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
            )}
            {project.video && (
              <video src={project.video} controls className="w-full rounded mb-4" />
            )}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <a href={project.github} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
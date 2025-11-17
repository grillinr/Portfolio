import { useState } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  github: string;
  image?: string;
  video?: string;
  languages?: string[];
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const stored = localStorage.getItem('portfolio-projects')
    if (stored) {
      return JSON.parse(stored)
    } else {
      return []
    }
  })

  const addProject = (project: Omit<Project, "id">) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
    };
    const updated = [newProject, ...projects];
    setProjects(updated);
    localStorage.setItem('portfolio-projects', JSON.stringify(updated))
  };

  const deleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    localStorage.setItem('portfolio-projects', JSON.stringify(updated))
  };

  const editProject = (id: string, updatedProject: Omit<Project, "id">) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, ...updatedProject } : p,
    );
    setProjects(updated);
    localStorage.setItem('portfolio-projects', JSON.stringify(updated))
  };

  return { projects, addProject, deleteProject, editProject };
}


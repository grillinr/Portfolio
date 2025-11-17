import { useState, useEffect } from 'react'

export interface Project {
  id: string
  title: string
  description: string
  github: string
  image?: string
  video?: string
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-projects')
    if (stored) {
      setProjects(JSON.parse(stored))
    } else {
      // Initialize with default projects
      const defaultProjects: Project[] = [
        {
          id: '1',
          title: 'DevBits',
          description: 'Create an X and LinkedIn crossover for posting real content about your projects, semi-formally.',
          github: 'https://github.com/yourusername/devbits'
        },
        {
          id: '2',
          title: 'Resume2Web',
          description: 'Resume2Web is a web application using Flask and React as infrastructure that extracts key information from a resume file (in formats like PDF or text) and automatically generates an interactive, customizable website showcasing the parsed data.',
          github: 'https://github.com/yourusername/resume2web'
        },
        {
          id: '3',
          title: 'Manage Me',
          description: 'A task management web app built with Python, HTML, CSS, and JavaScript, designed to boost productivity, created during Revolution UC Hackathon.',
          github: 'https://github.com/yourusername/manage-me'
        },
        {
          id: '4',
          title: 'Poli-Search',
          description: 'A collaborative web app for political candidate research, developed at Make UC Hackathon using Python, HTML, and CSS.',
          github: 'https://github.com/yourusername/poli-search'
        }
      ]
      setProjects(defaultProjects)
      localStorage.setItem('portfolio-projects', JSON.stringify(defaultProjects))
    }
  }, [])

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString()
    }
    const updated = [newProject, ...projects]
    setProjects(updated)
    localStorage.setItem('portfolio-projects', JSON.stringify(updated))
  }

  const deleteProject = (id: string) => {
    const updated = projects.filter(p => p.id !== id)
    setProjects(updated)
    localStorage.setItem('portfolio-projects', JSON.stringify(updated))
  }

  return { projects, addProject, deleteProject }
}
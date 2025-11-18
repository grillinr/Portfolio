import { useState, useEffect } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  github: string;
  image?: string;
  video?: string;
  languages?: string[];
  slug: string;
}

function parseFrontmatter(content: string): { data: Record<string, string>, body: string } {
  const lines = content.split('\n')
  if (lines[0] !== '---') return { data: {}, body: content }

  const endIndex = lines.indexOf('---', 1)
  if (endIndex === -1) return { data: {}, body: content }

  const frontmatter = lines.slice(1, endIndex).join('\n')
  const body = lines.slice(endIndex + 1).join('\n')

  const data: Record<string, string> = {}
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length) {
      data[key.trim()] = valueParts.join(':').trim()
    }
  })

  return { data, body }
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const loadProjects = async () => {
      const projectModules = import.meta.glob('../content/projects/*.md', { as: 'raw' })
      const loadedProjects: Project[] = []

      for (const path in projectModules) {
        const rawContent = await projectModules[path]()
        const { data, body } = parseFrontmatter(rawContent)
        const slug = path.split('/').pop()?.replace('.md', '') || ''
        const languages = data.languages ? data.languages.split(',').map((l: string) => l.trim()) : undefined
        const project: Project = {
          id: slug,
          title: data.title || 'Untitled',
          description: data.description || body.trim() || '',
          github: data.github || '',
          image: data.image,
          video: data.video,
          languages,
          slug
        }
        loadedProjects.push(project)
      }

      setProjects(loadedProjects)
    }

    loadProjects()
  }, [])

  return { projects }
}


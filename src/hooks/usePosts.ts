import { useState, useEffect } from 'react'

export interface Post {
  id: string
  title: string
  content: string
  date: string
  slug: string
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

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const loadPosts = async () => {
      const postModules = import.meta.glob('../content/posts/*.md', { as: 'raw' })
      const loadedPosts: Post[] = []

      for (const path in postModules) {
        const rawContent = await postModules[path]()
        const { data, body } = parseFrontmatter(rawContent)
        const slug = path.split('/').pop()?.replace('.md', '') || ''
        const post: Post = {
          id: slug,
          title: data.title || 'Untitled',
          content: body.trim(),
          date: data.date || '',
          slug
        }
        loadedPosts.push(post)
      }

      // Sort by date descending
      loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      setPosts(loadedPosts)
    }

    loadPosts()
  }, [])

  return { posts }
}
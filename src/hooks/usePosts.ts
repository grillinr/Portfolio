import { useState } from 'react'

export interface Post {
  id: string
  title: string
  content: string
  date: string
  slug: string
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>(() => {
    const stored = localStorage.getItem('portfolio-posts')
    if (stored) {
      return JSON.parse(stored)
    } else {
      // Add sample post for testing
      const samplePost: Post = {
        id: 'sample-1',
        title: 'Welcome to My Portfolio Blog',
        content: `# Welcome to My Portfolio Blog

This is a sample blog post to demonstrate the markdown functionality.

## Features

- **Bold text** and *italic text*
- [Links](https://example.com)
- Code blocks:

\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

- Lists:
  - Item 1
  - Item 2
  - Item 3

### Tables

| Feature | Status |
|---------|--------|
| Markdown | ✅ |
| Tables | ✅ |
| Code | ✅ |

> This is a blockquote

Enjoy reading my blog posts!`,
        date: new Date().toISOString().split('T')[0],
        slug: 'welcome-to-my-portfolio-blog'
      }
      const initialPosts = [samplePost]
      localStorage.setItem('portfolio-posts', JSON.stringify(initialPosts))
      return initialPosts
    }
  })

  const addPost = (post: Omit<Post, 'id' | 'date' | 'slug'>) => {
    const newPost: Post = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      slug: post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    }
    const updated = [newPost, ...posts]
    setPosts(updated)
    localStorage.setItem('portfolio-posts', JSON.stringify(updated))
  }

  const deletePost = (id: string) => {
    const updated = posts.filter(p => p.id !== id)
    setPosts(updated)
    localStorage.setItem('portfolio-posts', JSON.stringify(updated))
  }

  const editPost = (id: string, updatedPost: Omit<Post, 'id' | 'date' | 'slug'>) => {
    const updated = posts.map(p =>
      p.id === id
        ? { ...p, ...updatedPost, slug: updatedPost.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') }
        : p
    )
    setPosts(updated)
    localStorage.setItem('portfolio-posts', JSON.stringify(updated))
  }

  return { posts, addPost, deletePost, editPost }
}
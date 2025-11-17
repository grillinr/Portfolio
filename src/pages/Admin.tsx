import { useState } from "react"
import { Button } from "@/components/ui/button"
import { usePosts } from "@/hooks/usePosts"
import { useProjects } from "@/hooks/useProjects"
import type { Post } from "@/hooks/usePosts"
import type { Project } from "@/hooks/useProjects"

const ADMIN_PASSWORD = "portfolio2025" // Change this to your desired password

export default function Admin() {
  const { posts, addPost, deletePost, editPost } = usePosts()
  const { projects, addProject, deleteProject, editProject } = useProjects()

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const authStatus = localStorage.getItem('admin-auth')
    return authStatus === 'true'
  })
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const [postTitle, setPostTitle] = useState("")
  const [postContent, setPostContent] = useState("")
  const [editingPostId, setEditingPostId] = useState<string | null>(null)

  const [projectTitle, setProjectTitle] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [projectGithub, setProjectGithub] = useState("")
  const [projectImage, setProjectImage] = useState("")
  const [projectVideo, setProjectVideo] = useState("")
  const [projectLanguages, setProjectLanguages] = useState("")
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('admin-auth', 'true')
      setError("")
    } else {
      setError("Incorrect password")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin-auth')
  }

  const handleAddPost = () => {
    if (postTitle && postContent) {
      if (editingPostId) {
        editPost(editingPostId, { title: postTitle, content: postContent })
        setEditingPostId(null)
      } else {
        addPost({ title: postTitle, content: postContent })
      }
      setPostTitle("")
      setPostContent("")
    }
  }

  const handleAddProject = () => {
    if (projectTitle && projectDescription && projectGithub) {
      const languages = projectLanguages ? projectLanguages.split(',').map(l => l.trim()).filter(l => l) : undefined
      if (editingProjectId) {
        editProject(editingProjectId, {
          title: projectTitle,
          description: projectDescription,
          github: projectGithub,
          image: projectImage || undefined,
          video: projectVideo || undefined,
          languages
        })
        setEditingProjectId(null)
      } else {
        addProject({
          title: projectTitle,
          description: projectDescription,
          github: projectGithub,
          image: projectImage || undefined,
          video: projectVideo || undefined,
          languages
        })
      }
      setProjectTitle("")
      setProjectDescription("")
      setProjectGithub("")
      setProjectImage("")
      setProjectVideo("")
      setProjectLanguages("")
    }
  }

  const startEditingPost = (post: Post) => {
    setPostTitle(post.title)
    setPostContent(post.content)
    setEditingPostId(post.id)
  }

  const startEditingProject = (project: Project) => {
    setProjectTitle(project.title)
    setProjectDescription(project.description)
    setProjectGithub(project.github)
    setProjectImage(project.image || "")
    setProjectVideo(project.video || "")
    setProjectLanguages(project.languages ? project.languages.join(', ') : "")
    setEditingProjectId(project.id)
  }

  const cancelEditing = () => {
    setEditingPostId(null)
    setEditingProjectId(null)
    setPostTitle("")
    setPostContent("")
    setProjectTitle("")
    setProjectDescription("")
    setProjectGithub("")
    setProjectImage("")
    setProjectVideo("")
    setProjectLanguages("")
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-input bg-background rounded-md"
              placeholder="Enter admin password"
              required
            />
          </div>
          {error && (
            <p className="text-destructive text-sm">{error}</p>
          )}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Posts Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Manage Blog Posts</h2>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Post Title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Post Content (Markdown)"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              rows={10}
              className="w-full p-2 border rounded"
            />
             <div className="flex gap-2">
               <Button onClick={handleAddPost}>{editingPostId ? 'Update Post' : 'Add Post'}</Button>
               {editingPostId && <Button onClick={cancelEditing} variant="outline">Cancel</Button>}
             </div>
          </div>
           <div className="space-y-2">
             <h3 className="font-medium">Existing Posts</h3>
             {posts.map((post) => (
               <div key={post.id} className="flex justify-between items-center border rounded p-2">
                 <span>{post.title}</span>
                 <div className="flex gap-2">
                   <Button variant="outline" size="sm" onClick={() => startEditingPost(post)}>
                     Edit
                   </Button>
                   <Button variant="destructive" size="sm" onClick={() => deletePost(post.id)}>
                     Delete
                   </Button>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Manage Projects</h2>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Project Title"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Project Description"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              rows={3}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="GitHub URL"
              value={projectGithub}
              onChange={(e) => setProjectGithub(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Image URL (optional)"
              value={projectImage}
              onChange={(e) => setProjectImage(e.target.value)}
              className="w-full p-2 border rounded"
            />
             <input
               type="text"
               placeholder="YouTube Embed URL (optional)"
               value={projectVideo}
               onChange={(e) => setProjectVideo(e.target.value)}
               className="w-full p-2 border rounded"
             />
             <input
               type="text"
               placeholder="Languages (comma-separated, optional)"
               value={projectLanguages}
               onChange={(e) => setProjectLanguages(e.target.value)}
               className="w-full p-2 border rounded"
             />
              <div className="flex gap-2">
                <Button onClick={handleAddProject}>{editingProjectId ? 'Update Project' : 'Add Project'}</Button>
                {editingProjectId && <Button onClick={cancelEditing} variant="outline">Cancel</Button>}
              </div>
          </div>
           <div className="space-y-2">
             <h3 className="font-medium">Existing Projects</h3>
             {projects.map((project) => (
               <div key={project.id} className="flex justify-between items-center border rounded p-2">
                 <span>{project.title}</span>
                 <div className="flex gap-2">
                   <Button variant="outline" size="sm" onClick={() => startEditingProject(project)}>
                     Edit
                   </Button>
                   <Button variant="destructive" size="sm" onClick={() => deleteProject(project.id)}>
                     Delete
                   </Button>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  )
}
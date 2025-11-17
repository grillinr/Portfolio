import { useState } from "react"
import { Button } from "@/components/ui/button"
import { usePosts } from "@/hooks/usePosts"
import { useProjects } from "@/hooks/useProjects"

export default function Admin() {
  const { posts, addPost, deletePost } = usePosts()
  const { projects, addProject, deleteProject } = useProjects()

  const [postTitle, setPostTitle] = useState("")
  const [postContent, setPostContent] = useState("")

  const [projectTitle, setProjectTitle] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [projectGithub, setProjectGithub] = useState("")
  const [projectImage, setProjectImage] = useState("")
  const [projectVideo, setProjectVideo] = useState("")

  const handleAddPost = () => {
    if (postTitle && postContent) {
      addPost({ title: postTitle, content: postContent })
      setPostTitle("")
      setPostContent("")
    }
  }

  const handleAddProject = () => {
    if (projectTitle && projectDescription && projectGithub) {
      addProject({
        title: projectTitle,
        description: projectDescription,
        github: projectGithub,
        image: projectImage || undefined,
        video: projectVideo || undefined
      })
      setProjectTitle("")
      setProjectDescription("")
      setProjectGithub("")
      setProjectImage("")
      setProjectVideo("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Panel</h1>

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
            <Button onClick={handleAddPost}>Add Post</Button>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Existing Posts</h3>
            {posts.map((post) => (
              <div key={post.id} className="flex justify-between items-center border rounded p-2">
                <span>{post.title}</span>
                <Button variant="destructive" size="sm" onClick={() => deletePost(post.id)}>
                  Delete
                </Button>
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
              placeholder="Video URL (optional)"
              value={projectVideo}
              onChange={(e) => setProjectVideo(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <Button onClick={handleAddProject}>Add Project</Button>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Existing Projects</h3>
            {projects.map((project) => (
              <div key={project.id} className="flex justify-between items-center border rounded p-2">
                <span>{project.title}</span>
                <Button variant="destructive" size="sm" onClick={() => deleteProject(project.id)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
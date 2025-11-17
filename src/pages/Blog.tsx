import { Link } from "react-router-dom"
import { usePosts } from "@/hooks/usePosts"

export default function Blog() {
  const { posts } = usePosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">No posts yet. Check back soon!</p>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground text-sm mb-2">{post.date}</p>
              <p className="text-muted-foreground mb-4">
                {post.content.split('\n').slice(0, 3).join('\n')}...
              </p>
              <Link to={`/blog/${post.slug}`} className="text-primary hover:underline">Read more</Link>
            </article>
          ))
        )}
      </div>
    </div>
  )
}
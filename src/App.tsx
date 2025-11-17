import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Admin from './pages/Admin'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/projects" element={<Projects />} />
             <Route path="/projects/:id" element={<ProjectDetail />} />
             <Route path="/blog" element={<Blog />} />
             <Route path="/blog/:slug" element={<BlogPost />} />
             <Route path="/admin" element={<Admin />} />
           </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

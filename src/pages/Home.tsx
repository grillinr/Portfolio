import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Nathan Grilliot</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Computer Science student at the University of Cincinnati with a minor in Software Engineering
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills & Technologies</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Languages</h3>
              <p className="text-muted-foreground">Python, SQL, C++, HTML, CSS, JavaScript, R</p>
            </div>
            <div>
              <h3 className="font-medium">Frameworks & Tools</h3>
              <p className="text-muted-foreground">Flask, AWS, Docker, Power BI, Git, LabVIEW, MATLAB, Quarto</p>
            </div>
            <div>
              <h3 className="font-medium">Database Management</h3>
              <p className="text-muted-foreground">SQL, Flask-SQLAlchemy, SQLite</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Medpace</h3>
              <p className="text-muted-foreground">Developed interactive data visualizations and dashboards for clinical trials, collaborating with global teams.</p>
            </div>
            <div>
              <h3 className="font-medium">ElectraMet</h3>
              <p className="text-muted-foreground">Built an internal product configuration tool, deploying updates with Docker and AWS EC2, and analyzing customer data with Pandas and SciKit Learn.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <Button asChild>
          <a href="/resume.pdf" download>Download Resume</a>
        </Button>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">GitHub Stats</h2>
        <div className="flex justify-center space-x-4">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=grillinr&langs_count=8&layout=compact&size_weight=0.5&count_weight=0.5&theme=dark&hide_border=true" alt="Top Languages" />
          <img src="https://github-readme-stats.vercel.app/api?username=grillinr&show_icons=true&hide=stars&count_private=true&hide_rank=true&theme=dark&hide_border=true" alt="Nathan's GitHub Stats" />
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-muted-foreground">📫 Let's connect!</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/nathan-grilliot" className="text-primary hover:underline">LinkedIn</a>
          <a href="mailto:your.email@example.com" className="text-primary hover:underline">Email</a>
        </div>
      </div>
    </div>
  )
}
import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  Server,
  Wrench,
  Github,
  Linkedin,
  Briefcase,
} from "lucide-react";

export default function Home() {
  const medpaceLanguages = ["C#", "SQL", "TypeScript", "Angular"];
  const electrametLanguages = [
    "Python",
    "AWS",
    "Docker",
    "Pandas",
    "SciKit Learn",
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-3xl text-center mb-8">
        <div className="mb-4 font-bold">Nathan Grilliot</div>
        <p className="text-xl text-muted-foreground mb-6">
          Computer Science student at the University of Cincinnati
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Wrench className="h-6 w-6" />
            Skills & Technologies
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium flex items-center gap-2 mb-3">
                <Code className="h-4 w-4" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Go
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Rust
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  C#
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  SQL
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  C++
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  HTML
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  CSS
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  R
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-medium flex items-center gap-2 mb-3">
                <Server className="h-4 w-4" />
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Angular
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Flask
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  AWS
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Docker
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Power BI
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Git
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-medium flex items-center gap-2 mb-3">
                <Database className="h-4 w-4" />
                Database Management
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  SQL
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Microsoft SQL Server
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  neo4j
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">
                <a href="https://medpace.com" target="_blank">
                  Medpace
                </a>
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {medpaceLanguages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">
                Maintain complex web applications to manage quotes, proposals,
                and costs for internal business teams.
              </p>
            </div>
            <div>
              <h3 className="font-medium">
                <a href="https://electramet.com" target="_blank">
                  ElectraMet
                </a>
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {electrametLanguages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">
                Built an internal product configuration tool, deploying updates
                with Docker and AWS EC2, and analyzing customer data with Pandas
                and SciKit Learn.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <Button asChild>
          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </Button>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">GitHub Contributions</h2>
        <div className="flex justify-center space-x-4">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=grillinr&langs_count=8&layout=compact&hide=Astro,HTML,CSS,SCSS,JavaScript,Jupyter%20Notebook&size_weight=0.5&count_weight=0.5&theme=transparent&hide_border=true"
            alt="Top Languages"
          />
          <img
            src="https://github-readme-stats.vercel.app/api?username=grillinr&show_icons=true&hide=stars&count_private=true&hide_rank=true&theme=transparent&hide_border=true"
            alt="Nathan's GitHub Stats"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/nathan-grilliot"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href="mailto:me@nathangrilliot.com"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Email
          </a>
          <a
            href="https://github.com/grillinr"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

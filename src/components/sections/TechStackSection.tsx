import { Button } from "@/components/ui/button";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiSvelte, SiTailwindcss, SiBootstrap, SiMui,
  SiFlutter, SiSwift, SiKotlin, SiAndroidstudio, SiXcode,
  SiNodedotjs, SiExpress, SiNestjs, SiPython, SiDjango, SiFlask, SiGo, SiRust, SiSpringboot, SiPhp, SiLaravel, SiRuby, SiRubyonrails,
  SiGraphql, SiPostgresql, SiMysql, SiMongodb, SiSqlite, SiRedis, SiFirebase, SiSupabase, SiOracle,
  SiLinux, SiUbuntu, SiCentos, SiDocker, SiKubernetes, SiHelm, SiTerraform, SiAnsible, SiAmazon, SiGooglecloud, SiVercel, SiNetlify,
  SiGit, SiGithub, SiGitlab, SiJenkins, SiJest, SiCypress, SiSelenium, SiPostman, SiSwagger, SiSlack, SiSalesforce, SiZendesk
} from "react-icons/si";
import { FaJava, FaAws, FaMicrosoft } from "react-icons/fa";


const allTechs = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Angular", icon: SiAngular },
  { name: "Svelte", icon: SiSvelte },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Material UI", icon: SiMui },
  { name: "React Native", icon: SiReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "Swift", icon: SiSwift },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Android Studio", icon: SiAndroidstudio },
  { name: "Xcode", icon: SiXcode },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "Go", icon: SiGo },
  { name: "Rust", icon: SiRust },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "Ruby", icon: SiRuby },
  { name: "Ruby on Rails", icon: SiRubyonrails },
  { name: "GraphQL", icon: SiGraphql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQLite", icon: SiSqlite },
  { name: "Redis", icon: SiRedis },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  { name: "Oracle", icon: SiOracle },
  { name: "Linux", icon: SiLinux },
  { name: "Ubuntu", icon: SiUbuntu },
  { name: "CentOS", icon: SiCentos },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Helm", icon: SiHelm },
  { name: "Terraform", icon: SiTerraform },
  { name: "Ansible", icon: SiAnsible },
  { name: "AWS", icon: FaAws },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Azure", icon: FaMicrosoft },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "Jenkins", icon: SiJenkins },
  { name: "Jest", icon: SiJest },
  { name: "Cypress", icon: SiCypress },
  { name: "Selenium", icon: SiSelenium },
  { name: "Postman", icon: SiPostman },
  { name: "Swagger", icon: SiSwagger },
  { name: "Slack", icon: SiSlack },
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Zendesk", icon: SiZendesk },
];

const rows = Array.from({ length: 6 }, (_, i) => {
  const start = Math.floor((i * allTechs.length) / 6);
  const end = Math.floor(((i + 1) * allTechs.length) / 6);
  return allTechs.slice(start, end);
});

export function TechStackSection() {
  const renderRow = (techs: typeof allTechs, direction: "left" | "right") => (
    <div className="relative flex">
      <div className={`flex ${direction === "left" ? "animate-scroll" : "animate-scroll-reverse"} whitespace-nowrap`}>
        {[...techs, ...techs].map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="mx-3 flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/100 border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-sm"
          >
            <tech.icon className="w-5 h-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="text-sm font-bold text-foreground/80">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tech-stack" className="py-16 md:py-24  overflow-hidden">
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Our Expertise Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            A comprehensive overview of the modern technology spectrum we master.
          </p>
        </div>

        <div className="space-y-6">
          {rows.map((row, i) => (
            <div key={i}>
              {renderRow(row, i % 2 === 0 ? "left" : "right")}
            </div>
          ))}
        </div>

        {/* <div className="mt-24 text-center p-12 rounded-3xl bg-muted/30 border border-border/50 max-w-4xl mx-auto">
          <p className="text-xl font-medium text-foreground mb-6">
            Looking for something specific that's not listed?
          </p>
          <Button size="lg" className="px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            Tell us about your needs
          </Button>
        </div> */}
      </div>
    </section>
  );
}




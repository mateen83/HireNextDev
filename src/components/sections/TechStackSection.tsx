import { Button } from "@/components/ui/button";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "Redux",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "React Native",
  "Vue.js",
  "Angular",
  "Python",
  "Go",
  "Rust",
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies we specialize in
          </h2>
          <p className="text-lg text-muted-foreground">
            Our developers are experts in the modern tech stack
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-muted border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors text-sm font-medium cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Missing your tech stack?
          </p>
          <Button variant="outline" className="font-medium">
            Let us know what you need
          </Button>
        </div>
      </div>
    </section>
  );
}

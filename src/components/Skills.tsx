import { motion } from "framer-motion";
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Server, 
  Shield, 
  Terminal,
  Database,
  Workflow
} from "lucide-react";

const skills = [
  {
    category: "Container Orchestration",
    icon: Container,
    color: "text-docker",
    items: ["Docker", "Kubernetes", "Helm", "Podman"],
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    color: "text-kubernetes",
    items: ["AWS", "Azure", "GCP", "DigitalOcean"],
  },
  {
    category: "CI/CD Pipelines",
    icon: Workflow,
    color: "text-primary",
    items: ["GitLab CI", "GitHub Actions", "Jenkins", "ArgoCD"],
  },
  {
    category: "Infrastructure as Code",
    icon: Server,
    color: "text-secondary",
    items: ["Terraform", "Ansible", "Pulumi", "CloudFormation"],
  },
  {
    category: "Monitoring & Logging",
    icon: Database,
    color: "text-aws",
    items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  },
  {
    category: "Security",
    icon: Shield,
    color: "text-accent",
    items: ["Vault", "SOPS", "Trivy", "Falco"],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    color: "text-primary",
    items: ["Git", "GitOps", "Trunk-based Dev", "Monorepos"],
  },
  {
    category: "Scripting",
    icon: Terminal,
    color: "text-foreground",
    items: ["Bash", "Python", "Go", "PowerShell"],
  },
];

export function Skills() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-primary mb-4">$ cat skills.yml</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools I use to keep your infrastructure running while you sleep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary"
            >
              <skill.icon className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`} size={32} />
              <h3 className="font-semibold text-lg mb-3">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

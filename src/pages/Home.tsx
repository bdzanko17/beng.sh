import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Terminal, Server, Container, GitBranch, Cloud, Cpu, Shield, Database, Bot, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingIcon = ({ 
  icon: Icon, 
  delay, 
  x, 
  y,
  color 
}: { 
  icon: React.ElementType; 
  delay: number; 
  x: string; 
  y: string;
  color: string;
}) => (
  <motion.div
    className={`absolute ${color} opacity-60 hidden md:block`}
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      scale: 1,
      y: [0, -15, 0]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatType: "loop"
    }}
  >
    <Icon size={32} />
  </motion.div>
);

const skills = [
  {
    category: "Container Orchestration",
    icon: Container,
    items: ["Docker", "Kubernetes", "Helm", "Podman"],
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "Azure", "GCP", "DigitalOcean"],
  },
  {
    category: "CI/CD Pipelines",
    icon: GitBranch,
    items: ["GitLab CI", "GitHub Actions", "Jenkins", "ArgoCD"],
  },
  {
    category: "Infrastructure as Code",
    icon: Server,
    items: ["Terraform", "Ansible", "Pulumi", "CloudFormation"],
  },
  {
    category: "Monitoring & Observability",
    icon: Cpu,
    items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  },
  {
    category: "Security & Secrets",
    icon: Shield,
    items: ["Vault", "SOPS", "Trivy", "Falco"],
  },
  {
    category: "AI & MCP",
    icon: Cpu,
    items: ["MCP Servers", "AI Agents", "LLM Ops", "RAG Pipelines", "Prompt Engineering", "Tool Use & Function Calling"],
  },
];

const stats = [
  { label: "Years Experience", value: "7+" },
  { label: "Containers Deployed", value: "∞" },
  { label: "Coffee Consumed", value: "☕ 9999" },
  { label: "Sleep", value: "404" },
];

export default function Home() {
  return (
    <>
      <SEOHead 
        title="Benjamin Dzanko - Senior DevOps Engineer"
        description="Senior DevOps Engineer based in Vienna with 7+ years of experience in cloud infrastructure, Kubernetes, and CI/CD automation."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Animated grid background */}
          <div className="absolute inset-0 grid-pattern" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          
          {/* Floating DevOps icons */}
          <FloatingIcon icon={Container} delay={0} x="10%" y="20%" color="text-docker" />
          <FloatingIcon icon={Server} delay={0.5} x="85%" y="15%" color="text-primary" />
          <FloatingIcon icon={Cloud} delay={1} x="80%" y="70%" color="text-kubernetes" />
          <FloatingIcon icon={GitBranch} delay={1.5} x="15%" y="75%" color="text-secondary" />
          <FloatingIcon icon={Cpu} delay={2} x="5%" y="50%" color="text-aws" />
          <FloatingIcon icon={Terminal} delay={2.5} x="90%" y="45%" color="text-primary" />

          <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
            {/* Terminal-style intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 font-mono text-sm">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 text-muted-foreground">benjamin@devops:~$</span>
                <span className="text-primary">whoami</span>
                <span className="w-2 h-5 bg-primary terminal-cursor" />
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-foreground">{photographerInfo.name.split(' ')[0]}</span>
              <br />
              <span className="text-gradient">{photographerInfo.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 mb-12"
            >
              <p className="text-2xl md:text-3xl font-mono text-primary">
                {photographerInfo.tagline}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {photographerInfo.heroIntroduction}
                <br />
                <span className="text-primary">{photographerInfo.location}</span> • 30 years old
              </p>
            </motion.div>

            {/* Fun DevOps tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-6 max-w-xl mx-auto font-mono text-left text-sm md:text-base">
                <div className="text-muted-foreground text-xs mb-2"># My daily routine:</div>
                <div className="space-y-1">
                  <p><span className="text-secondary">if</span> <span className="text-primary">[</span> $PRODUCTION == "on_fire" <span className="text-primary">]</span>; <span className="text-secondary">then</span></p>
                  <p className="pl-4"><span className="text-accent">echo</span> "It works on my container 🐳"</p>
                  <p className="pl-4"><span className="text-accent">kubectl</span> rollback --please</p>
                  <p><span className="text-secondary">fi</span></p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-mono">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="font-mono text-primary mb-4">$ cat skills.yml</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Tech Stack
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tools I use to keep your infrastructure running while you sleep.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.category} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary h-full"
                  >
                    <skill.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="font-semibold text-lg mb-3 text-foreground">{skill.category}</h3>
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI & MCP Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="font-mono text-primary mb-4">$ cat ai-mcp.md</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  AI Agents & MCP
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The next evolution of DevOps—AI-powered automation and the Model Context Protocol.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:glow-primary h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Bot className="text-primary group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="font-semibold text-xl text-foreground">AI Agents</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AI Agents are autonomous systems that use LLMs to reason, plan, and execute multi-step tasks. 
                    Unlike simple chatbots, agents can use tools, access APIs, browse the web, write and run code—making 
                    them powerful partners in DevOps workflows like incident response, infrastructure provisioning, and log analysis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Autonomous Reasoning", "Tool Use", "Multi-Step Planning", "Code Generation"].map((item) => (
                      <span key={item} className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:glow-primary h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Workflow className="text-primary group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="font-semibold text-xl text-foreground">MCP (Model Context Protocol)</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MCP is an open standard by Anthropic that provides a universal protocol for connecting AI models to 
                    external tools and data sources. Think of it as "USB-C for AI"—MCP servers expose capabilities 
                    (tools, resources, prompts) that any MCP-compatible AI client can discover and use.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Open Standard", "Tool Discovery", "Resource Access", "Universal Protocol"].map((item) => (
                      <span key={item} className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:glow-primary h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="text-primary group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="font-semibold text-xl text-foreground">RAG Pipelines</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Retrieval-Augmented Generation combines the power of LLMs with your own data. By embedding documents 
                    into vector databases and retrieving relevant context at query time, RAG pipelines let AI agents 
                    answer questions grounded in your infrastructure docs, runbooks, and knowledge bases.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Vector Databases", "Embeddings", "Context Retrieval", "Knowledge Grounding"].map((item) => (
                      <span key={item} className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:glow-primary h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="text-primary group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="font-semibold text-xl text-foreground">LLM Ops & DevOps + AI</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    LLM Ops brings DevOps principles to AI—CI/CD for models, monitoring for inference, and 
                    cost optimization for API calls. Combined with AI Agents and MCP, this enables 
                    self-healing infrastructure, intelligent alerting, and automated incident response.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Model Deployment", "Inference Monitoring", "Cost Optimization", "Self-Healing Infra"].map((item) => (
                      <span key={item} className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Code example */}
            <ScrollReveal delay={0.5}>
              <div className="mt-12 bg-card/80 backdrop-blur border border-border rounded-lg p-6 max-w-2xl mx-auto font-mono text-left text-sm md:text-base">
                <div className="text-muted-foreground text-xs mb-2"># MCP Server Example:</div>
                <div className="space-y-1">
                  <p><span className="text-secondary">server</span> = <span className="text-primary">MCPServer</span>(<span className="text-accent">"devops-tools"</span>)</p>
                  <p></p>
                  <p><span className="text-secondary">@server</span>.<span className="text-primary">tool</span>()</p>
                  <p><span className="text-secondary">def</span> <span className="text-primary">get_pod_status</span>(namespace: str):</p>
                  <p className="pl-4"><span className="text-muted-foreground"># AI agent can now check K8s pods</span></p>
                  <p className="pl-4"><span className="text-secondary">return</span> kubectl.get_pods(namespace)</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="font-mono text-primary mb-4">$ cat about.md</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                  About Me
                </h2>
                <div className="space-y-4 text-lg font-light leading-relaxed text-muted-foreground text-left">
                  <p>
                    {photographerInfo.biography.split('\n\n')[0]}
                  </p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-medium tracking-wide text-primary hover:text-primary/80 transition-colors group"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center px-6">
              <div className="font-mono text-primary mb-4">$ ssh benjamin@hire.me</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Whether you need infrastructure expertise or just want to discuss
                the best way to orchestrate your containers, I'm here to help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get In Touch
                <ArrowRight className="size-5" />
              </Link>
              <p className="text-muted-foreground text-sm mt-4 font-mono">
                Response time: {"<"} kubectl get pods 🚀
              </p>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}

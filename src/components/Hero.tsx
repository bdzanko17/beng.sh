import { motion } from "framer-motion";
import { Terminal, Server, Container, GitBranch, Cloud, Cpu } from "lucide-react";

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
    className={`absolute ${color} opacity-60`}
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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating DevOps icons */}
      <FloatingIcon icon={Container} delay={0} x="10%" y="20%" color="text-docker" />
      <FloatingIcon icon={Server} delay={0.5} x="85%" y="15%" color="text-primary" />
      <FloatingIcon icon={Cloud} delay={1} x="80%" y="70%" color="text-kubernetes" />
      <FloatingIcon icon={GitBranch} delay={1.5} x="15%" y="75%" color="text-secondary" />
      <FloatingIcon icon={Cpu} delay={2} x="5%" y="50%" color="text-aws" />
      <FloatingIcon icon={Terminal} delay={2.5} x="90%" y="45%" color="text-primary" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
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
          <span className="text-foreground">Benjamin</span>
          <br />
          <span className="text-gradient">Dzanko</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          <p className="text-2xl md:text-3xl font-mono text-primary">
            Senior DevOps Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            7+ years orchestrating chaos into infrastructure poetry.
            <br />
            Vienna, Austria 🇦🇹 • 30 years old
          </p>
        </motion.div>

        {/* Fun DevOps tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
        >
          <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-6 max-w-xl mx-auto font-mono text-left">
            <div className="text-muted-foreground text-sm mb-2"># My daily routine:</div>
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
          {[
            { label: "Years Experience", value: "7+" },
            { label: "Containers Deployed", value: "∞" },
            { label: "Coffee Consumed", value: "☕ 9999" },
            { label: "Sleep", value: "404" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior DevOps Engineer",
    company: "Enterprise Tech Co.",
    location: "Vienna, Austria",
    period: "2021 - Present",
    description: "Leading cloud infrastructure initiatives, implementing GitOps workflows, and mentoring junior engineers.",
    highlights: ["Reduced deployment time by 70%", "Zero-downtime migrations", "Cost optimization savings of €500K/year"],
  },
  {
    title: "DevOps Engineer",
    company: "Scale-Up Startup",
    location: "Vienna, Austria",
    period: "2019 - 2021",
    description: "Built CI/CD pipelines from scratch, containerized legacy applications, and implemented monitoring solutions.",
    highlights: ["Kubernetes migration", "Automated 90% of deployments", "Built internal developer platform"],
  },
  {
    title: "Systems Administrator",
    company: "IT Services GmbH",
    location: "Vienna, Austria",
    period: "2017 - 2019",
    description: "Managed on-premise infrastructure, initiated cloud adoption journey, and automated routine tasks.",
    highlights: ["First cloud migration", "Ansible automation", "24/7 on-call survivor"],
  },
];

export function Experience() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-primary mb-4">$ git log --oneline career</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">
            My journey from "it works on my machine" to "it works everywhere"
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
              } pl-8 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background left-0 md:left-auto ${
                index % 2 === 0 ? "md:-right-2" : "md:-left-2"
              } -translate-x-1/2 md:translate-x-0`} />

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className={`flex items-center gap-2 text-primary font-mono text-sm mb-2 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  <Calendar size={14} />
                  {exp.period}
                </div>
                
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                
                <div className={`flex items-center gap-4 text-muted-foreground text-sm mb-3 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

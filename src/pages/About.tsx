import { motion } from 'framer-motion';
import { Github, Linkedin, Award, Terminal, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page with DevOps-themed biography and certifications
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${photographerInfo.name}, ${photographerInfo.tagline}. ${photographerInfo.biography.split('\n\n')[0]}`}
        image={photographerInfo.portraitImage}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="font-mono text-primary mb-4">$ cat about.md</div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4">
                About Me
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-mono tracking-wide">
                {photographerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography - Split Layout */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Profile Card */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                  {/* Profile image */}
                  <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
                    <img
                      src={photographerInfo.portraitImage}
                      alt={photographerInfo.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Quick info */}
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>{photographerInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <GraduationCap size={16} className="text-primary" />
                      <span>{photographerInfo.education}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Briefcase size={16} className="text-primary" />
                      <span>7+ Years Experience</span>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-muted hover:border-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                    {photographerInfo.socialLinks.linkedin && (
                      <a
                        href={photographerInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-border rounded-lg hover:bg-muted hover:border-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="size-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Biography and Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {/* Name and Tagline */}
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
                    {photographerInfo.name}
                  </h2>
                  <p className="text-xl text-primary font-mono tracking-wide">
                    {photographerInfo.tagline}
                  </p>
                </div>

                <Separator className="bg-border" />

                {/* Biography */}
                <div className="space-y-4">
                  {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Approach */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal size={20} className="text-primary" />
                    <span className="font-mono text-primary">philosophy.sh</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {photographerInfo.approach.split('\n\n')[0]}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-card/50 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="font-mono text-primary mb-4">$ cat certifications.yml</div>
              <h2 className="text-3xl md:text-4xl font-bold">Certifications & Recognition</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {photographerInfo.awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <Award className="text-accent shrink-0" size={24} />
                  <span className="font-mono text-sm">{award}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack as Clients */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="font-mono text-primary mb-4">$ docker images</div>
              <h2 className="text-3xl md:text-4xl font-bold">Technologies I Work With</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {photographerInfo.clients.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-muted border border-border rounded-full px-6 py-3 font-mono text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

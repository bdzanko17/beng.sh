import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, Terminal, Clock } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { useState } from 'react';
import { toast } from 'sonner';

/**
 * Contact page with DevOps-themed design
 */
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(photographerInfo.email);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${photographerInfo.name} for DevOps consulting, infrastructure projects, and collaboration opportunities.`}
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
              <div className="font-mono text-primary mb-4">$ ssh benjamin@hire.me</div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4">
                Let's Connect
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                Whether you need infrastructure expertise or just want to discuss
                the best way to orchestrate your containers, I'm here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-card border border-border rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Terminal-style contact info */}
              <div className="font-mono space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">$</span>
                  <span className="text-secondary">echo</span>
                  <span className="text-foreground">$LOCATION</span>
                </div>
                <div className="flex items-center gap-2 text-primary pl-6">
                  <MapPin size={16} />
                  {photographerInfo.location}
                </div>
                
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-muted-foreground">$</span>
                  <span className="text-secondary">echo</span>
                  <span className="text-foreground">$STATUS</span>
                </div>
                <div className="text-accent pl-6 flex items-center gap-2">
                  <Clock size={16} />
                  {photographerInfo.availability} ✨
                </div>
              </div>

              <Separator className="my-8 bg-border" />

              {/* Contact options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-3 bg-muted hover:bg-muted/80 border border-border hover:border-primary rounded-lg p-4 transition-all group"
                >
                  <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  <span className="font-mono text-sm">{copied ? "Copied! ✓" : "Copy Email"}</span>
                </motion.button>

                <motion.a
                  href={photographerInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 bg-muted hover:bg-muted/80 border border-border hover:border-primary rounded-lg p-4 transition-all group"
                >
                  <Github className="text-foreground group-hover:scale-110 transition-transform" size={24} />
                  <span className="font-mono text-sm">GitHub</span>
                </motion.a>

                <motion.a
                  href={photographerInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 bg-muted hover:bg-muted/80 border border-border hover:border-primary rounded-lg p-4 transition-all group"
                >
                  <Linkedin className="text-kubernetes group-hover:scale-110 transition-transform" size={24} />
                  <span className="font-mono text-sm">LinkedIn</span>
                </motion.a>
              </div>

              {/* Fun CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center"
              >
                <motion.a
                  href={`mailto:${photographerInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send size={20} />
                  Send a Message
                </motion.a>
                <p className="text-muted-foreground text-sm mt-4 font-mono">
                  Response time: {"<"} kubectl get pods 🚀
                </p>
              </motion.div>
            </motion.div>

            {/* Additional info card */}
            <motion.div
              className="mt-8 bg-card/50 border border-border rounded-lg p-6 font-mono text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={16} className="text-primary" />
                <span className="text-muted-foreground">What I can help with:</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> Cloud Infrastructure Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> Kubernetes & Container Orchestration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> CI/CD Pipeline Implementation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> Infrastructure as Code
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> Monitoring & Observability
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span> DevOps Consulting & Mentoring
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-16" />
      </div>
    </>
  );
}

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("benjamin@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-primary mb-4">$ ssh benjamin@hire.me</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you need infrastructure expertise or just want to discuss
            the best way to orchestrate your containers, I'm here to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-8"
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
              Vienna, Austria 🇦🇹
            </div>
            
            <div className="flex items-center gap-3 mt-4">
              <span className="text-muted-foreground">$</span>
              <span className="text-secondary">echo</span>
              <span className="text-foreground">$STATUS</span>
            </div>
            <div className="text-accent pl-6">
              Open to opportunities ✨
            </div>
          </div>

          {/* Social links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-3 bg-muted hover:bg-muted/80 rounded-lg p-4 transition-colors group"
            >
              <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
              <span>{copied ? "Copied! ✓" : "Copy Email"}</span>
            </motion.button>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-muted hover:bg-muted/80 rounded-lg p-4 transition-colors group"
            >
              <Github className="text-foreground group-hover:scale-110 transition-transform" size={24} />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-muted hover:bg-muted/80 rounded-lg p-4 transition-colors group"
            >
              <Linkedin className="text-kubernetes group-hover:scale-110 transition-transform" size={24} />
              <span>LinkedIn</span>
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
              href="mailto:benjamin@example.com"
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
      </div>
    </section>
  );
}

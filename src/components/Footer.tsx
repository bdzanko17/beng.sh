import { motion } from "framer-motion";
import { Heart, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <div className="font-mono">
            © {new Date().getFullYear()} Benjamin Dzanko
          </div>
          
          <div className="flex items-center gap-1 font-mono">
            Made with <Heart size={14} className="text-destructive mx-1" /> and{" "}
            <Coffee size={14} className="text-aws mx-1" /> in Vienna
          </div>
          
          <div className="font-mono text-xs">
            <span className="text-primary">uptime:</span> 99.9% (except Mondays)
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

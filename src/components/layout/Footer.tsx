import { Github, Linkedin, Heart, Coffee } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';

/**
 * DevOps-themed footer component with social links and fun tagline
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono tracking-wide">
            © {currentYear} {photographerInfo.name}
          </p>

          {/* Fun tagline */}
          <div className="flex items-center gap-1 font-mono text-sm text-muted-foreground">
            Made with <Heart size={14} className="text-destructive mx-1" /> and{" "}
            <Coffee size={14} className="text-aws mx-1" /> in Vienna
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            {photographerInfo.socialLinks.linkedin && (
              <a
                href={photographerInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            )}
            <span className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">uptime:</span> 99.9%
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

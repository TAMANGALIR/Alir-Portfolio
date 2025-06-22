import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <small className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Alir.co. All rights reserved.
      </small>

      <a
        href="#hero"
        aria-label="Back to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

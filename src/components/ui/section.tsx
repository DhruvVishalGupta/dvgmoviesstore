import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "gradient";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, variant = "default" }, ref) => {
    const variants = {
      default: "py-16 px-4 sm:px-6 lg:px-8",
      muted: "py-16 px-4 sm:px-6 lg:px-8 bg-muted/30",
      gradient: "py-16 px-4 sm:px-6 lg:px-8 bg-section-gradient",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(variants[variant], className)}
      >
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
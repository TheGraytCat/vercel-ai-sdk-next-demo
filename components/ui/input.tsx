import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground/70 selection:bg-primary selection:text-primary-foreground",
        "flex h-10 w-full min-w-0 rounded-xl border border-border/50 bg-background/95 backdrop-blur-sm",
        "px-4 py-2 text-base shadow-lg shadow-black/5 dark:shadow-black/20",
        "transition-all duration-300 outline-none",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30",
        "focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }

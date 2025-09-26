import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground/70 focus-visible:border-primary/50 focus-visible:ring-primary/20",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "flex field-sizing-content min-h-16 w-full rounded-xl border border-border/50 bg-background/95 backdrop-blur-sm",
        "px-4 py-3 text-base shadow-lg shadow-black/5 dark:shadow-black/20",
        "transition-all duration-300 outline-none focus-visible:ring-2",
        "hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

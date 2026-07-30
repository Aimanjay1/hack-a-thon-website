import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-transparent px-4 py-1.5 text-xs font-medium tracking-[0.01em] whitespace-nowrap transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/90",
        outline: "border-md-outline/60 text-md-on-surface-variant [a]:hover:bg-primary/5",
        glass: "border-white/20 bg-white/15 text-white backdrop-blur-sm [a]:hover:bg-white/20",
        destructive: "bg-destructive/10 text-destructive [a]:hover:bg-destructive/20",
        pennant:
          "rounded-none border-none bg-md-primary py-2 pr-7 pl-4 font-heading text-xs tracking-wider text-white uppercase [clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

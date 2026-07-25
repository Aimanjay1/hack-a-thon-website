import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium tracking-[0.01em] whitespace-nowrap transition-all duration-200 ease-md outline-none select-none active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-destructive/20 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-none hover:bg-primary/90 hover:shadow-md-md active:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-md-sm active:bg-secondary/80",
        outline:
          "border border-md-outline bg-transparent text-primary hover:bg-primary/5 active:bg-primary/10",
        ghost: "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/5",
        destructive: "bg-destructive text-md-on-error hover:bg-destructive/90 active:bg-destructive/80",
        link: "text-primary underline-offset-4 hover:underline",
        fab: "rounded-[28px] bg-md-tertiary text-md-on-tertiary shadow-md-md hover:bg-md-tertiary/90 hover:shadow-md-xl active:bg-md-tertiary/80 active:shadow-md-md",
      },
      size: {
        default: "h-10 px-6 has-[>svg]:px-5",
        sm: "h-9 gap-1.5 px-4 has-[>svg]:px-3.5",
        lg: "h-12 px-8 text-base has-[>svg]:px-7",
        icon: "size-14 [&_svg:not([class*='size-'])]:size-5",
        "icon-sm": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

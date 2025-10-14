import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-pixel uppercase tracking-wider transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-4 border-primary hover:translate-y-[-4px] active:translate-y-0 shadow-[4px_4px_0_hsl(220,15%,5%)] hover:shadow-[6px_6px_0_hsl(220,15%,5%)] active:shadow-[4px_4px_0_hsl(220,15%,5%)]",
        destructive: "bg-destructive text-destructive-foreground border-4 border-destructive hover:translate-y-[-4px] active:translate-y-0 shadow-[4px_4px_0_hsl(220,15%,5%)] hover:shadow-[6px_6px_0_hsl(220,15%,5%)] active:shadow-[4px_4px_0_hsl(220,15%,5%)]",
        outline: "border-4 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background shadow-[4px_4px_0_hsl(220,15%,5%)] hover:shadow-[6px_6px_0_hsl(220,15%,5%)]",
        secondary: "bg-secondary text-secondary-foreground border-4 border-secondary hover:translate-y-[-4px] active:translate-y-0 shadow-[4px_4px_0_hsl(220,15%,5%)] hover:shadow-[6px_6px_0_hsl(220,15%,5%)] active:shadow-[4px_4px_0_hsl(220,15%,5%)]",
        ghost: "border-2 border-transparent hover:border-primary hover:bg-primary/10",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

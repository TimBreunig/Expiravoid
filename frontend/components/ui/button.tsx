import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-white hover:cursor-pointer transition-colors duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-primary-900 hover:bg-purple-500 hover:text-primary-900",
        light: "bg-primary-900 text-primary-500 hover:bg-purple-500 hover:text-primary-900",
        outline: "text-primary-500 border border-primary-500 hover:text-purple-500",
        outlineLight: "text-primary-900 border border-primary-900 hover:text-purple-500",
        icon: "",
      },
      size: {
        default: "px-7 py-3 font-semibold text-base tracking-wide",
        lg: "px-6 xl:px-8 py-4 xl:py-5 font-semibold text-xl xl:text-2xl",
        xl: "px-8 py-5 font-medium text-2xl xl:text-3xl",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2",
          variant === "outline" && "border border-input bg-background hover:bg-accent h-9 px-4 py-2",
          variant === "ghost" && "hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
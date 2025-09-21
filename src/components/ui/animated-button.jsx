import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"



const AnimatedButton = forwardRef(
  ({ className, glow = false, float = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "transition-all duration-300 hover:scale-105 active:scale-95",
          glow && "animate-glow",
          float && "animate-float",
          className,
        )}
        {...props}
      />
    )
  },
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }

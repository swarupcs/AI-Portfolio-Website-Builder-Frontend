import  React from "react"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"



const GlassCard = forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl",
        variant === "default" && "glass",
        variant === "strong" && "glass-strong",
        className,
      )}
      {...props}
    />
  )
})
GlassCard.displayName = "GlassCard"

export { GlassCard }

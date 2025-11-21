import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

export function LiquidCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number

    const updateCursor = (e: MouseEvent) => {
      // Smooth cursor movement mit requestAnimationFrame
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        setIsVisible(true)
      })

      // Prüfe ob über interaktiven Elementen
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.getAttribute("role") === "button" ||
        target.style.cursor === "pointer"

      setIsHovering(isInteractive)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <>
      {/* Custom Cursor mit Liquid Glass Effekt */}
      <div
        ref={cursorRef}
        className={cn(
          "fixed pointer-events-none z-[9999] transition-opacity duration-300",
          "will-change-transform",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Haupt-Cursor-Kreis mit Liquid Glass */}
        <div
          className={cn(
            "rounded-full transition-all duration-300",
            "backdrop-blur-2xl",
            "bg-gradient-to-br from-black/30 via-black/20 to-black/10 dark:from-white/30 dark:via-white/20 dark:to-white/10",
            "border border-black/40 dark:border-white/40",
            "shadow-2xl",
            "relative overflow-hidden",
            isHovering ? "w-12 h-12 scale-150" : "w-8 h-8"
          )}
        >
          {/* Animated Shimmer Effect */}
          <div
            className={cn(
              "absolute inset-0 rounded-full pointer-events-none",
              "bg-gradient-to-r from-transparent via-black/30 to-transparent dark:from-transparent dark:via-white/30 dark:to-transparent",
              "animate-shimmer opacity-60"
            )}
            style={{
              backgroundSize: "200% 100%",
            }}
          />
          
          {/* Inner Glow */}
          <div
            className={cn(
              "absolute inset-0 rounded-full pointer-events-none",
              "bg-gradient-to-br from-black/20 via-transparent to-transparent dark:from-white/20 dark:via-transparent dark:to-transparent"
            )}
          />
        </div>

        {/* Outer Ring - größerer Glow-Effekt */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
            "backdrop-blur-xl transition-all duration-300",
            "bg-gradient-to-br from-black/10 via-black/5 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent",
            "border border-black/20 dark:border-white/20",
            isHovering ? "w-20 h-20 opacity-80" : "w-16 h-16 opacity-60"
          )}
          style={{
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      </div>

    </>
  )
}


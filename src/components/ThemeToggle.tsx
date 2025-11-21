import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-14 h-14 rounded-full",
        "flex items-center justify-center",
        "bg-black/10 dark:bg-white/5 backdrop-blur-xl",
        "border border-black/20 dark:border-white/10",
        "text-gray-900 dark:text-white/90",
        "hover:bg-black/20 dark:hover:bg-white/10",
        "transition-all duration-200",
        "group overflow-hidden",
        "shadow-2xl hover:shadow-3xl",
        "hover:scale-110"
      )}
      aria-label={`Zu ${theme === "light" ? "Dark" : "Light"} Mode wechseln`}
    >
      {/* Liquid Glass Hintergrund-Effekt */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/20 via-black/5 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      
      {/* Icons mit Rotation */}
      <div className="relative z-10 flex items-center justify-center">
        <Sun
          className={cn(
            "w-6 h-6 absolute transition-all duration-300 text-gray-900 dark:text-white",
            theme === "light"
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          )}
        />
        <Moon
          className={cn(
            "w-6 h-6 absolute transition-all duration-300 text-gray-900 dark:text-white",
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
    </button>
  )
}


import { useState } from "react"
import { Home, Info, Menu, Lightbulb, Settings, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Philosophy", href: "#philosophy", icon: Lightbulb },
  { label: "Methodik", href: "#methodik", icon: Settings },
  { label: "Referenzen", href: "#referenzen", icon: Star },
  { label: "Über uns", href: "#about", icon: Info },
]

export function SidebarNav() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <aside
      id="sidebar-nav"
      className={cn(
        "fixed z-50 transition-all duration-500 ease-in-out",
        // Mobile: oben zentriert, Desktop: links vertikal zentriert
        "top-4 left-1/2 -translate-x-1/2 md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0",
        // macOS Dock Style: sehr abgerundete Ecken
        "rounded-2xl",
        // Höhe passt sich dem Inhalt an - WICHTIG: keine feste Höhe!
        "h-fit",
        // Liquid Glass Effect - verbesserte Transparenz und Blur
        // Mobile: horizontal, Desktop: vertikal
        isHovered 
          ? "w-auto max-w-[90vw] md:w-56 backdrop-blur-3xl bg-black/15 dark:bg-black/40 border border-black/20 dark:border-white/20" 
          : "w-auto md:w-16 backdrop-blur-2xl bg-black/12 dark:bg-black/30 border border-black/15 dark:border-white/10",
        // Relative für Overlay-Positionierung
        "relative overflow-hidden",
        // Liquid Glass Schatten-Effekt
        "shadow-2xl dark:shadow-black/50"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 300)}
      style={{
        position: 'fixed',
        boxShadow: isHovered 
          ? '0 8px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1) inset, 0 1px 0 rgba(0, 0, 0, 0.1) inset'
          : '0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05) inset, 0 1px 0 rgba(0, 0, 0, 0.05) inset'
      }}
    >
      {/* Liquid Glass Animated Gradient Overlay - durch gesamte Navbar */}
      <div 
        className={cn(
          "absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500",
          isHovered ? "opacity-100" : "opacity-70"
        )}
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.08) 15%, rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.02) 70%, rgba(0, 0, 0, 0.01) 85%, transparent 100%)',
        }}
      />
      
      {/* Animated Shimmer Effect für Liquid Glass */}
      <div 
        className={cn(
          "absolute inset-0 rounded-2xl pointer-events-none",
          "bg-gradient-to-r from-transparent via-black/20 to-transparent dark:from-transparent dark:via-white/20 dark:to-transparent",
          "animate-shimmer transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          backgroundSize: '200% 100%',
        }}
      />
      
      {/* Reflective Edge - Mobile: rechts, Desktop: unten - sehr subtil */}
      <div 
        className={cn(
          "absolute pointer-events-none transition-opacity duration-300",
          "right-0 top-0 bottom-0 w-1/4 rounded-r-2xl md:bottom-0 md:left-0 md:right-0 md:w-full md:h-1/4 md:rounded-b-2xl",
          isHovered ? "opacity-60" : "opacity-30"
        )}
        style={{
          background: 'linear-gradient(to left, rgba(0, 0, 0, 0.08) 0%, transparent 100%)',
        }}
      />
      

      <div className="flex flex-row md:flex-col items-center md:items-stretch relative z-10 w-full shrink-0">
        {/* Logo/Brand - kompakt wie Dock */}
        <div className="px-2 md:px-3 py-2 md:pt-3 md:pb-2 shrink-0 flex items-center">
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-xl bg-black/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-black/20 dark:border-white/10 hover:scale-110 transition-transform duration-200">
              <Menu className="w-5 h-5 text-gray-900 dark:text-white" />
            </div>
            {isHovered && (
              <span className="ml-2 md:ml-3 text-sm font-medium whitespace-nowrap opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards] text-gray-900 dark:text-white hidden md:inline">
                Haesler Marketing
              </span>
            )}
          </div>
        </div>

        {/* Navigation Items - Mobile: horizontal, Desktop: vertikal */}
        <nav className="px-1 md:px-2 shrink-0 flex items-center">
          <ul className="flex flex-row md:flex-col items-center md:items-stretch space-x-1 md:space-x-0 md:space-y-1.5 m-0 p-0 list-none">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center justify-center md:justify-start gap-2 md:gap-3 px-2 md:px-3 py-2 md:py-2.5 rounded-xl",
                      "text-gray-900/90 hover:text-gray-900 dark:text-white/90 dark:hover:text-white",
                      "hover:bg-black/10 dark:hover:bg-white/10 hover:backdrop-blur-sm",
                      "transition-all duration-200 group",
                      "relative overflow-visible",
                      "w-10 h-10 md:w-auto md:h-auto"
                    )}
                  >
                    <Icon className={cn(
                      "flex-shrink-0 transition-transform duration-200 text-gray-900 dark:text-white",
                      "group-hover:scale-125",
                      "w-5 h-5"
                    )} />
                    {isHovered && (
                      <span className="whitespace-nowrap opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards] text-gray-900 dark:text-white text-sm font-medium hidden md:inline">
                        {item.label}
                      </span>
                    )}
                    {!isHovered && (
                      <span className="absolute left-full md:left-16 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-auto ml-2 md:ml-0 px-2.5 py-1.5 rounded-lg bg-gray-900/90 dark:bg-black/80 backdrop-blur-md text-white text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-700/50 dark:border-white/20 z-50">
                        {item.label}
                      </span>
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

      </div>
    </aside>
  )
}


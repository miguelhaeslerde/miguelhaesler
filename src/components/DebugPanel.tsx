import { useEffect, useState } from "react"

interface NavItemDebug {
  label: string
  href: string
  iconFound: boolean
  iconVisible: boolean
  iconWidth: number
  iconHeight: number
  iconOpacity: string
  iconVisibility: string
  iconDisplay: string
  parentLinkVisible: boolean
  parentLinkWidth: number
  parentLinkHeight: number
}

interface DebugInfo {
  viewport: { width: number; height: number }
  sidebar: {
    left: number
    top: number
    width: number
    height: number
    right: number
    bottom: number
    zIndex: number
    isVisible: boolean
    inViewport: {
      fullyVisible: boolean
      partiallyVisible: boolean
      aboveViewport: boolean
      belowViewport: boolean
      leftOfViewport: boolean
      rightOfViewport: boolean
      topOffset: number
      bottomOffset: number
      leftOffset: number
      rightOffset: number
    }
    computedStyle: {
      position: string
      display: string
      opacity: string
      visibility: string
    }
  }
  content: {
    left: number
    top: number
    width: number
    height: number
    right: number
    bottom: number
    marginLeft: number
    isVisible: boolean
    inViewport: {
      fullyVisible: boolean
      partiallyVisible: boolean
      aboveViewport: boolean
      belowViewport: boolean
      leftOfViewport: boolean
      rightOfViewport: boolean
      topOffset: number
      bottomOffset: number
      leftOffset: number
      rightOffset: number
    }
    computedStyle: {
      display: string
      opacity: string
      visibility: string
      overflow: string
    }
  }
  overlap: {
    sidebarOverlapsContent: boolean
    overlapAmount: number
    contentHidden: boolean
  }
  navItems: NavItemDebug[]
  logoIcon: {
    found: boolean
    visible: boolean
    width: number
    height: number
    opacity: string
    visibility: string
  }
  errors: string[]
}

export function DebugPanel() {
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const updateDebugInfo = () => {
      const errors: string[] = []
      
      // Viewport Info
      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
      }

      // Helper function to check viewport visibility
      const checkViewportVisibility = (rect: DOMRect, viewportWidth: number, viewportHeight: number) => {
        const aboveViewport = rect.bottom < 0
        const belowViewport = rect.top > viewportHeight
        const leftOfViewport = rect.right < 0
        const rightOfViewport = rect.left > viewportWidth
        
        const topOffset = rect.top < 0 ? Math.abs(rect.top) : 0
        const bottomOffset = rect.bottom > viewportHeight ? rect.bottom - viewportHeight : 0
        const leftOffset = rect.left < 0 ? Math.abs(rect.left) : 0
        const rightOffset = rect.right > viewportWidth ? rect.right - viewportWidth : 0

        const fullyVisible = !aboveViewport && !belowViewport && !leftOfViewport && !rightOfViewport &&
                            rect.top >= 0 && rect.bottom <= viewportHeight &&
                            rect.left >= 0 && rect.right <= viewportWidth
        
        const partiallyVisible = !fullyVisible && 
                                !(aboveViewport || belowViewport || leftOfViewport || rightOfViewport) &&
                                ((rect.top >= 0 && rect.top < viewportHeight) || 
                                 (rect.bottom > 0 && rect.bottom <= viewportHeight) ||
                                 (rect.left >= 0 && rect.left < viewportWidth) ||
                                 (rect.right > 0 && rect.right <= viewportWidth))

        return {
          fullyVisible,
          partiallyVisible,
          aboveViewport,
          belowViewport,
          leftOfViewport,
          rightOfViewport,
          topOffset,
          bottomOffset,
          leftOffset,
          rightOffset
        }
      }

      // Sidebar Info - mehrere Selector-Strategien
      let sidebarEl = document.getElementById('sidebar-nav') as HTMLElement
      if (!sidebarEl) {
        sidebarEl = document.querySelector('aside[class*="fixed"]') as HTMLElement
      }
      if (!sidebarEl) {
        sidebarEl = document.querySelector('aside') as HTMLElement
      }
      if (!sidebarEl) {
        // Suche nach allen aside-Elementen
        const allAsides = document.querySelectorAll('aside')
        if (allAsides.length > 0) {
          sidebarEl = allAsides[0] as HTMLElement
        }
      }
      let sidebar = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        isVisible: false,
        inViewport: {
          fullyVisible: false,
          partiallyVisible: false,
          aboveViewport: false,
          belowViewport: false,
          leftOfViewport: false,
          rightOfViewport: false,
          topOffset: 0,
          bottomOffset: 0,
          leftOffset: 0,
          rightOffset: 0
        },
        computedStyle: {
          position: '',
          display: '',
          opacity: '',
          visibility: ''
        }
      }

      if (sidebarEl) {
        const rect = sidebarEl.getBoundingClientRect()
        const computed = window.getComputedStyle(sidebarEl)
        const viewportVisibility = checkViewportVisibility(rect, viewport.width, viewport.height)
        
        sidebar = {
          left: Math.round(rect.left),
          top: Math.round(rect.top),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          right: Math.round(rect.right),
          bottom: Math.round(rect.bottom),
          zIndex: parseInt(computed.zIndex) || 0,
          isVisible: rect.width > 0 && rect.height > 0 && computed.visibility !== 'hidden' && computed.opacity !== '0',
          inViewport: viewportVisibility,
          computedStyle: {
            position: computed.position,
            display: computed.display,
            opacity: computed.opacity,
            visibility: computed.visibility
          }
        }

        if (!sidebar.isVisible) {
          errors.push(`❌ SIDEBAR NICHT SICHTBAR! (width: ${sidebar.width}px, height: ${sidebar.height}px, opacity: ${sidebar.computedStyle.opacity}, visibility: ${sidebar.computedStyle.visibility})`)
        }

        // Viewport-Sichtbarkeits-Fehler
        if (sidebar.inViewport.aboveViewport) {
          errors.push(`❌ SIDEBAR GEHT ÜBER VIEWPORT NACH OBEN HINAUS! (${sidebar.inViewport.topOffset}px über dem Viewport)`)
        }
        if (sidebar.inViewport.belowViewport) {
          errors.push(`❌ SIDEBAR GEHT ÜBER VIEWPORT NACH UNTEN HINAUS! (${sidebar.inViewport.bottomOffset}px unter dem Viewport)`)
        }
        if (sidebar.inViewport.leftOfViewport) {
          errors.push(`❌ SIDEBAR GEHT ÜBER VIEWPORT NACH LINKS HINAUS! (${sidebar.inViewport.leftOffset}px links vom Viewport)`)
        }
        if (sidebar.inViewport.rightOfViewport) {
          errors.push(`❌ SIDEBAR GEHT ÜBER VIEWPORT NACH RECHTS HINAUS! (${sidebar.inViewport.rightOffset}px rechts vom Viewport)`)
        }
        if (!sidebar.inViewport.fullyVisible && !sidebar.inViewport.aboveViewport && !sidebar.inViewport.belowViewport && !sidebar.inViewport.leftOfViewport && !sidebar.inViewport.rightOfViewport) {
          errors.push(`⚠️ SIDEBAR IST NUR TEILWEISE SICHTBAR! (Top: ${sidebar.inViewport.topOffset}px, Bottom: ${sidebar.inViewport.bottomOffset}px, Left: ${sidebar.inViewport.leftOffset}px, Right: ${sidebar.inViewport.rightOffset}px außerhalb)`)
        }
      } else {
        errors.push('❌ SIDEBAR ELEMENT NICHT GEFUNDEN!')
        // Debug: Zeige alle gefundenen aside-Elemente
        const allAsides = document.querySelectorAll('aside')
        if (allAsides.length > 0) {
          errors.push(`⚠️ Gefunden: ${allAsides.length} aside-Element(e), aber keines passt`)
          allAsides.forEach((el, i) => {
            const computed = window.getComputedStyle(el)
            errors.push(`  Aside ${i + 1}: position=${computed.position}, display=${computed.display}, width=${el.getBoundingClientRect().width}px`)
          })
        } else {
          errors.push('⚠️ Keine aside-Elemente im DOM gefunden!')
        }
      }

      // Content Info
      const contentEl = document.querySelector('div[class*="ml-24"], div[class*="ml-28"]') as HTMLElement
      let content = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        right: 0,
        bottom: 0,
        marginLeft: 0,
        isVisible: false,
        inViewport: {
          fullyVisible: false,
          partiallyVisible: false,
          aboveViewport: false,
          belowViewport: false,
          leftOfViewport: false,
          rightOfViewport: false,
          topOffset: 0,
          bottomOffset: 0,
          leftOffset: 0,
          rightOffset: 0
        },
        computedStyle: {
          display: '',
          opacity: '',
          visibility: '',
          overflow: ''
        }
      }

      if (contentEl) {
        const rect = contentEl.getBoundingClientRect()
        const computed = window.getComputedStyle(contentEl)
        const marginLeft = parseInt(computed.marginLeft) || 0
        const viewportVisibility = checkViewportVisibility(rect, viewport.width, viewport.height)
        
        content = {
          left: Math.round(rect.left),
          top: Math.round(rect.top),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          right: Math.round(rect.right),
          bottom: Math.round(rect.bottom),
          marginLeft: marginLeft,
          isVisible: rect.width > 0 && rect.height > 0 && computed.visibility !== 'hidden' && computed.opacity !== '0',
          inViewport: viewportVisibility,
          computedStyle: {
            display: computed.display,
            opacity: computed.opacity,
            visibility: computed.visibility,
            overflow: computed.overflow
          }
        }

        if (!content.isVisible) {
          errors.push(`❌ CONTENT NICHT SICHTBAR! (width: ${content.width}px, height: ${content.height}px, opacity: ${content.computedStyle.opacity}, visibility: ${content.computedStyle.visibility})`)
        }

        if (content.width === 0) {
          errors.push('❌ CONTENT BREITE IST 0!')
        }

        if (content.left < sidebar.right && sidebar.right > 0) {
          errors.push(`⚠️ SIDEBAR ÜBERLAPPT CONTENT! Sidebar rechts: ${sidebar.right}px, Content links: ${content.left}px`)
        }

        // Viewport-Sichtbarkeits-Fehler für Content
        if (content.inViewport.aboveViewport) {
          errors.push(`❌ CONTENT GEHT ÜBER VIEWPORT NACH OBEN HINAUS! (${content.inViewport.topOffset}px über dem Viewport)`)
        }
        if (content.inViewport.belowViewport) {
          errors.push(`❌ CONTENT GEHT ÜBER VIEWPORT NACH UNTEN HINAUS! (${content.inViewport.bottomOffset}px unter dem Viewport)`)
        }
        if (content.inViewport.leftOfViewport) {
          errors.push(`❌ CONTENT GEHT ÜBER VIEWPORT NACH LINKS HINAUS! (${content.inViewport.leftOffset}px links vom Viewport)`)
        }
        if (content.inViewport.rightOfViewport) {
          errors.push(`❌ CONTENT GEHT ÜBER VIEWPORT NACH RECHTS HINAUS! (${content.inViewport.rightOffset}px rechts vom Viewport)`)
        }
        if (!content.inViewport.fullyVisible && !content.inViewport.aboveViewport && !content.inViewport.belowViewport && !content.inViewport.leftOfViewport && !content.inViewport.rightOfViewport) {
          errors.push(`⚠️ CONTENT IST NUR TEILWEISE SICHTBAR! (Top: ${content.inViewport.topOffset}px, Bottom: ${content.inViewport.bottomOffset}px, Left: ${content.inViewport.leftOffset}px, Right: ${content.inViewport.rightOffset}px außerhalb)`)
        }
      } else {
        errors.push('❌ CONTENT ELEMENT NICHT GEFUNDEN!')
      }

      // Overlap Detection
      const overlap = {
        sidebarOverlapsContent: sidebar.right > content.left && sidebar.right > 0 && content.left > 0,
        overlapAmount: sidebar.right > content.left ? Math.round(sidebar.right - content.left) : 0,
        contentHidden: content.width === 0 || !content.isVisible || (sidebar.right > content.left && sidebar.right > 0)
      }

      if (overlap.contentHidden) {
        errors.push(`❌ CONTENT WIRD VERDECKT! Überlappung: ${overlap.overlapAmount}px`)
      }

      // Nav Items Debug
      const navItems: NavItemDebug[] = []
      const navItemLabels = ['Home', 'Über uns', 'Services', 'Kontakt']
      const navItemHrefs = ['#home', '#about', '#services', '#contact']

      navItemLabels.forEach((label, index) => {
        const href = navItemHrefs[index]
        let navItem: NavItemDebug = {
          label,
          href,
          iconFound: false,
          iconVisible: false,
          iconWidth: 0,
          iconHeight: 0,
          iconOpacity: '',
          iconVisibility: '',
          iconDisplay: '',
          parentLinkVisible: false,
          parentLinkWidth: 0,
          parentLinkHeight: 0
        }

        // Suche nach dem Link-Element
        const linkEl = sidebarEl ? sidebarEl.querySelector(`a[href="${href}"]`) as HTMLElement : null
        if (linkEl) {
          const linkRect = linkEl.getBoundingClientRect()
          navItem.parentLinkVisible = linkRect.width > 0 && linkRect.height > 0
          navItem.parentLinkWidth = Math.round(linkRect.width)
          navItem.parentLinkHeight = Math.round(linkRect.height)

          // Suche nach dem SVG-Icon (lucide-react Icons sind SVGs)
          const iconEl = linkEl.querySelector('svg') as SVGSVGElement
          if (iconEl) {
            navItem.iconFound = true
            const iconRect = iconEl.getBoundingClientRect()
            const iconComputed = window.getComputedStyle(iconEl)
            navItem.iconWidth = Math.round(iconRect.width)
            navItem.iconHeight = Math.round(iconRect.height)
            navItem.iconOpacity = iconComputed.opacity
            navItem.iconVisibility = iconComputed.visibility
            navItem.iconDisplay = iconComputed.display
            navItem.iconVisible = iconRect.width > 0 && iconRect.height > 0 && 
                                  iconComputed.visibility !== 'hidden' && 
                                  iconComputed.opacity !== '0' &&
                                  iconComputed.display !== 'none'

            if (!navItem.iconVisible) {
              errors.push(`❌ ICON "${label}" NICHT SICHTBAR! (width: ${navItem.iconWidth}px, height: ${navItem.iconHeight}px, opacity: ${navItem.iconOpacity}, visibility: ${navItem.iconVisibility}, display: ${navItem.iconDisplay})`)
            }
          } else {
            errors.push(`❌ ICON "${label}" NICHT GEFUNDEN! (Link gefunden, aber kein SVG-Icon)`)
          }

          if (!navItem.parentLinkVisible) {
            errors.push(`❌ LINK "${label}" NICHT SICHTBAR! (width: ${navItem.parentLinkWidth}px, height: ${navItem.parentLinkHeight}px)`)
          }
        } else {
          errors.push(`❌ NAV-ITEM "${label}" NICHT GEFUNDEN! (Link mit href="${href}" nicht gefunden)`)
        }

        navItems.push(navItem)
      })

      // Logo Icon Debug
      let logoIcon = {
        found: false,
        visible: false,
        width: 0,
        height: 0,
        opacity: '',
        visibility: ''
      }

      if (sidebarEl) {
        // Suche nach dem Logo-Icon (Menu-Icon)
        const logoContainer = sidebarEl.querySelector('div[class*="w-10"]') as HTMLElement
        if (logoContainer) {
          const logoSvg = logoContainer.querySelector('svg') as SVGSVGElement
          if (logoSvg) {
            logoIcon.found = true
            const logoRect = logoSvg.getBoundingClientRect()
            const logoComputed = window.getComputedStyle(logoSvg)
            logoIcon.width = Math.round(logoRect.width)
            logoIcon.height = Math.round(logoRect.height)
            logoIcon.opacity = logoComputed.opacity
            logoIcon.visibility = logoComputed.visibility
            logoIcon.visible = logoRect.width > 0 && logoRect.height > 0 && 
                              logoComputed.visibility !== 'hidden' && 
                              logoComputed.opacity !== '0'

            if (!logoIcon.visible) {
              errors.push(`❌ LOGO-ICON NICHT SICHTBAR! (width: ${logoIcon.width}px, height: ${logoIcon.height}px, opacity: ${logoIcon.opacity}, visibility: ${logoIcon.visibility})`)
            }
          } else {
            errors.push('❌ LOGO-ICON NICHT GEFUNDEN! (Logo-Container gefunden, aber kein SVG-Icon)')
          }
        } else {
          errors.push('❌ LOGO-CONTAINER NICHT GEFUNDEN!')
        }
      }

      const info = {
        viewport,
        sidebar,
        content,
        overlap,
        navItems,
        logoIcon,
        errors
      }

      // Console Logging für detaillierte Analyse
      if (errors.length > 0 || overlap.contentHidden || navItems.some(item => !item.iconVisible) || !logoIcon.visible) {
        console.group('🚨 DEBUG: PROBLEME ERKANNT')
        console.error('Fehler:', errors)
        console.error('Sidebar:', sidebar)
        console.error('Content:', content)
        console.error('Überlappung:', overlap)
        console.error('Logo Icon:', logoIcon)
        console.error('Nav Items:', navItems)
        console.groupEnd()
      } else {
        console.log('✅ DEBUG: Alles OK', {
          sidebar: { width: sidebar.width, right: sidebar.right },
          content: { width: content.width, left: content.left },
          overlap: overlap.overlapAmount,
          logoIcon: { visible: logoIcon.visible, size: `${logoIcon.width}x${logoIcon.height}` },
          navItems: navItems.map(item => ({
            label: item.label,
            iconVisible: item.iconVisible,
            size: `${item.iconWidth}x${item.iconHeight}`
          }))
        })
      }

      setDebugInfo(info)
    }

    updateDebugInfo()
    const interval = setInterval(updateDebugInfo, 500)
    window.addEventListener('resize', updateDebugInfo)
    window.addEventListener('scroll', updateDebugInfo)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', updateDebugInfo)
      window.removeEventListener('scroll', updateDebugInfo)
    }
  }, [])

  if (!debugInfo) return null

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-[9999]">
      {/* Visuelle Overlays für Sidebar */}
      {debugInfo && debugInfo.sidebar.width > 0 && (
        <div
          className="absolute border-2 border-purple-500 bg-purple-500/10 pointer-events-none"
          style={{
            left: `${debugInfo.sidebar.left}px`,
            top: `${debugInfo.sidebar.top}px`,
            width: `${debugInfo.sidebar.width}px`,
            height: `${debugInfo.sidebar.height}px`,
          }}
        >
          <div className="absolute -top-6 left-0 bg-purple-500 text-white text-xs px-2 py-1 rounded">
            Sidebar ({debugInfo.sidebar.width}x{debugInfo.sidebar.height}px)
          </div>
        </div>
      )}

      {/* Visuelle Overlays für Content */}
      {debugInfo && debugInfo.content.width > 0 && (
        <div
          className="absolute border-2 border-green-500 bg-green-500/10 pointer-events-none"
          style={{
            left: `${debugInfo.content.left}px`,
            top: `${debugInfo.content.top}px`,
            width: `${debugInfo.content.width}px`,
            height: `${debugInfo.content.height}px`,
          }}
        >
          <div className="absolute -top-6 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Content ({debugInfo.content.width}x{debugInfo.content.height}px)
          </div>
        </div>
      )}

      {/* Overlap-Warnung */}
      {debugInfo && debugInfo.overlap.sidebarOverlapsContent && (
        <div
          className="absolute border-4 border-red-500 bg-red-500/20 pointer-events-none animate-pulse"
          style={{
            left: `${debugInfo.content.left}px`,
            top: `${debugInfo.content.top}px`,
            width: `${debugInfo.overlap.overlapAmount}px`,
            height: `${Math.min(100, debugInfo.content.height)}px`,
          }}
        >
          <div className="absolute -top-8 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            ⚠️ ÜBERLAPPUNG: {debugInfo.overlap.overlapAmount}px
          </div>
        </div>
      )}

      {/* Viewport-Bereich markieren */}
      <div
        className="absolute border-2 border-dashed border-blue-400 bg-blue-400/5 pointer-events-none"
        style={{
          left: '0px',
          top: '0px',
          width: `${debugInfo?.viewport.width || 0}px`,
          height: `${debugInfo?.viewport.height || 0}px`,
        }}
      >
        <div className="absolute -top-6 left-0 bg-blue-400 text-white text-xs px-2 py-1 rounded">
          VIEWPORT ({debugInfo?.viewport.width || 0}x{debugInfo?.viewport.height || 0}px)
        </div>
      </div>

      {/* Content außerhalb Viewport oben */}
      {debugInfo && debugInfo.content.inViewport.aboveViewport && (
        <div
          className="absolute border-4 border-orange-500 bg-orange-500/30 pointer-events-none animate-pulse"
          style={{
            left: `${debugInfo.content.left}px`,
            top: `${debugInfo.content.top}px`,
            width: `${debugInfo.content.width}px`,
            height: `${Math.min(debugInfo.content.inViewport.topOffset, debugInfo.content.height)}px`,
          }}
        >
          <div className="absolute -top-8 left-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            ❌ CONTENT {debugInfo.content.inViewport.topOffset}px ÜBER VIEWPORT!
          </div>
        </div>
      )}

      {/* Content außerhalb Viewport unten */}
      {debugInfo && debugInfo.content.inViewport.belowViewport && (
        <div
          className="absolute border-4 border-orange-500 bg-orange-500/30 pointer-events-none animate-pulse"
          style={{
            left: `${debugInfo.content.left}px`,
            top: `${debugInfo.viewport.height}px`,
            width: `${debugInfo.content.width}px`,
            height: `${Math.min(debugInfo.content.inViewport.bottomOffset, debugInfo.content.height)}px`,
          }}
        >
          <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            ❌ CONTENT {debugInfo.content.inViewport.bottomOffset}px UNTER VIEWPORT!
          </div>
        </div>
      )}

      {/* Content außerhalb Viewport rechts */}
      {debugInfo && debugInfo.content.inViewport.rightOfViewport && (
        <div
          className="absolute border-4 border-orange-500 bg-orange-500/30 pointer-events-none animate-pulse"
          style={{
            left: `${debugInfo.viewport.width}px`,
            top: `${debugInfo.content.top}px`,
            width: `${Math.min(debugInfo.content.inViewport.rightOffset, debugInfo.content.width)}px`,
            height: `${debugInfo.content.height}px`,
          }}
        >
          <div className="absolute top-0 -left-20 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            ❌ CONTENT {debugInfo.content.inViewport.rightOffset}px RECHTS VOM VIEWPORT!
          </div>
        </div>
      )}

      {/* Sidebar außerhalb Viewport oben */}
      {debugInfo && debugInfo.sidebar.inViewport.aboveViewport && (
        <div
          className="absolute border-4 border-yellow-500 bg-yellow-500/30 pointer-events-none animate-pulse"
          style={{
            left: `${debugInfo.sidebar.left}px`,
            top: `${debugInfo.sidebar.top}px`,
            width: `${debugInfo.sidebar.width}px`,
            height: `${Math.min(debugInfo.sidebar.inViewport.topOffset, debugInfo.sidebar.height)}px`,
          }}
        >
          <div className="absolute -top-8 left-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
            ❌ SIDEBAR {debugInfo.sidebar.inViewport.topOffset}px ÜBER VIEWPORT!
          </div>
        </div>
      )}

      {/* Sidebar außerhalb Viewport unten */}
      {debugInfo && debugInfo.sidebar.inViewport.belowViewport && (
        <div
          className="absolute border-4 border-yellow-500 bg-yellow-500/30 pointer-events-none animate-pulse"
          style={{
            left: `${debugInfo.sidebar.left}px`,
            top: `${debugInfo.viewport.height}px`,
            width: `${debugInfo.sidebar.width}px`,
            height: `${Math.min(debugInfo.sidebar.inViewport.bottomOffset, debugInfo.sidebar.height)}px`,
          }}
        >
          <div className="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
            ❌ SIDEBAR {debugInfo.sidebar.inViewport.bottomOffset}px UNTER VIEWPORT!
          </div>
        </div>
      )}

      {/* Sichtbarkeits-Indikator (immer sichtbar) */}
      {debugInfo && (
        <div
          className={`fixed top-20 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg z-[9998] text-sm font-bold pointer-events-none ${
            debugInfo.content.isVisible && !debugInfo.overlap.contentHidden
              ? 'bg-green-500 text-white animate-pulse'
              : 'bg-red-500 text-white animate-bounce'
          }`}
        >
          {debugInfo.content.isVisible && !debugInfo.overlap.contentHidden
            ? '✅ CONTENT IST SICHTBAR'
            : '❌ CONTENT NICHT SICHTBAR!'}
        </div>
      )}

      {/* Debug Panel */}
      <div className="absolute top-4 right-4 bg-black/90 text-white text-xs p-4 rounded-lg max-w-md max-h-[90vh] overflow-y-auto pointer-events-auto border-2 border-red-500">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-sm text-red-400">🔍 DEBUG PANEL</h3>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-white hover:text-red-400"
          >
            {isVisible ? '▼' : '▲'}
          </button>
        </div>
        
        {isVisible && (
          <>
            {/* Errors */}
            {debugInfo.errors.length > 0 && (
              <div className="mb-4 p-2 bg-red-900/50 border border-red-500 rounded">
                <div className="font-bold text-red-400 mb-2">FEHLER ({debugInfo.errors.length}):</div>
                {debugInfo.errors.map((error, i) => (
                  <div key={i} className="text-red-300 mb-1">{error}</div>
                ))}
              </div>
            )}

            {/* Viewport */}
            <div className="mb-3 p-2 bg-blue-900/30 rounded">
              <div className="font-bold text-blue-400 mb-1">VIEWPORT:</div>
              <div>Width: {debugInfo.viewport.width}px</div>
              <div>Height: {debugInfo.viewport.height}px</div>
            </div>

            {/* Sidebar */}
            <div className="mb-3 p-2 bg-purple-900/30 rounded">
              <div className="font-bold text-purple-400 mb-1">SIDEBAR:</div>
              <div>Position: {debugInfo.sidebar.computedStyle.position}</div>
              <div>Left: {debugInfo.sidebar.left}px</div>
              <div>Top: {debugInfo.sidebar.top}px</div>
              <div>Width: {debugInfo.sidebar.width}px</div>
              <div>Height: {debugInfo.sidebar.height}px</div>
              <div>Right: {debugInfo.sidebar.right}px</div>
              <div>Bottom: {debugInfo.sidebar.bottom}px</div>
              <div>Z-Index: {debugInfo.sidebar.zIndex}</div>
              <div>Sichtbar: {debugInfo.sidebar.isVisible ? '✅' : '❌'}</div>
              <div className="mt-2 pt-2 border-t border-purple-700/30">
                <div className="font-semibold text-purple-300 mb-1">VIEWPORT-SICHTBARKEIT:</div>
                <div>Vollständig sichtbar: {debugInfo.sidebar.inViewport.fullyVisible ? '✅' : '❌'}</div>
                <div>Teilweise sichtbar: {debugInfo.sidebar.inViewport.partiallyVisible ? '⚠️' : '❌'}</div>
                <div>Über Viewport oben: {debugInfo.sidebar.inViewport.aboveViewport ? `❌ ${debugInfo.sidebar.inViewport.topOffset}px` : '✅'}</div>
                <div>Über Viewport unten: {debugInfo.sidebar.inViewport.belowViewport ? `❌ ${debugInfo.sidebar.inViewport.bottomOffset}px` : '✅'}</div>
                <div>Über Viewport links: {debugInfo.sidebar.inViewport.leftOfViewport ? `❌ ${debugInfo.sidebar.inViewport.leftOffset}px` : '✅'}</div>
                <div>Über Viewport rechts: {debugInfo.sidebar.inViewport.rightOfViewport ? `❌ ${debugInfo.sidebar.inViewport.rightOffset}px` : '✅'}</div>
              </div>
              <div>Display: {debugInfo.sidebar.computedStyle.display}</div>
              <div>Opacity: {debugInfo.sidebar.computedStyle.opacity}</div>
              <div>Visibility: {debugInfo.sidebar.computedStyle.visibility}</div>
            </div>

            {/* Content */}
            <div className="mb-3 p-2 bg-green-900/30 rounded">
              <div className="font-bold text-green-400 mb-1">CONTENT:</div>
              <div>Left: {debugInfo.content.left}px</div>
              <div>Top: {debugInfo.content.top}px</div>
              <div>Width: {debugInfo.content.width}px</div>
              <div>Height: {debugInfo.content.height}px</div>
              <div>Right: {debugInfo.content.right}px</div>
              <div>Bottom: {debugInfo.content.bottom}px</div>
              <div>Margin-Left: {debugInfo.content.marginLeft}px</div>
              <div>Sichtbar: {debugInfo.content.isVisible ? '✅' : '❌'}</div>
              <div className="mt-2 pt-2 border-t border-green-700/30">
                <div className="font-semibold text-green-300 mb-1">VIEWPORT-SICHTBARKEIT:</div>
                <div>Vollständig sichtbar: {debugInfo.content.inViewport.fullyVisible ? '✅' : '❌'}</div>
                <div>Teilweise sichtbar: {debugInfo.content.inViewport.partiallyVisible ? '⚠️' : '❌'}</div>
                <div>Über Viewport oben: {debugInfo.content.inViewport.aboveViewport ? `❌ ${debugInfo.content.inViewport.topOffset}px` : '✅'}</div>
                <div>Über Viewport unten: {debugInfo.content.inViewport.belowViewport ? `❌ ${debugInfo.content.inViewport.bottomOffset}px` : '✅'}</div>
                <div>Über Viewport links: {debugInfo.content.inViewport.leftOfViewport ? `❌ ${debugInfo.content.inViewport.leftOffset}px` : '✅'}</div>
                <div>Über Viewport rechts: {debugInfo.content.inViewport.rightOfViewport ? `❌ ${debugInfo.content.inViewport.rightOffset}px` : '✅'}</div>
              </div>
              <div>Display: {debugInfo.content.computedStyle.display}</div>
              <div>Opacity: {debugInfo.content.computedStyle.opacity}</div>
              <div>Visibility: {debugInfo.content.computedStyle.visibility}</div>
              <div>Overflow: {debugInfo.content.computedStyle.overflow}</div>
            </div>

            {/* Overlap */}
            <div className="mb-3 p-2 bg-yellow-900/30 rounded">
              <div className="font-bold text-yellow-400 mb-1">ÜBERLAPPUNG:</div>
              <div>Sidebar überlappt Content: {debugInfo.overlap.sidebarOverlapsContent ? '❌ JA' : '✅ NEIN'}</div>
              <div>Überlappungs-Menge: {debugInfo.overlap.overlapAmount}px</div>
              <div>Content verdeckt: {debugInfo.overlap.contentHidden ? '❌ JA' : '✅ NEIN'}</div>
            </div>

            {/* Logo Icon */}
            <div className="mb-3 p-2 bg-indigo-900/30 rounded">
              <div className="font-bold text-indigo-400 mb-1">LOGO-ICON:</div>
              <div>Gefunden: {debugInfo.logoIcon.found ? '✅' : '❌'}</div>
              <div>Sichtbar: {debugInfo.logoIcon.visible ? '✅' : '❌'}</div>
              {debugInfo.logoIcon.found && (
                <>
                  <div>Width: {debugInfo.logoIcon.width}px</div>
                  <div>Height: {debugInfo.logoIcon.height}px</div>
                  <div>Opacity: {debugInfo.logoIcon.opacity}</div>
                  <div>Visibility: {debugInfo.logoIcon.visibility}</div>
                </>
              )}
            </div>

            {/* Nav Items Icons */}
            <div className="mb-3 p-2 bg-cyan-900/30 rounded">
              <div className="font-bold text-cyan-400 mb-2">NAV-ITEMS ICONS:</div>
              {debugInfo.navItems.map((item, i) => (
                <div key={i} className="mb-2 p-2 bg-cyan-950/30 rounded border border-cyan-700/30">
                  <div className="font-semibold text-cyan-300 mb-1">{item.label} ({item.href}):</div>
                  <div className="text-xs">
                    <div>Icon gefunden: {item.iconFound ? '✅' : '❌'}</div>
                    <div>Icon sichtbar: {item.iconVisible ? '✅' : '❌'}</div>
                    {item.iconFound && (
                      <>
                        <div>Icon Size: {item.iconWidth}x{item.iconHeight}px</div>
                        <div>Icon Opacity: {item.iconOpacity}</div>
                        <div>Icon Visibility: {item.iconVisibility}</div>
                        <div>Icon Display: {item.iconDisplay}</div>
                      </>
                    )}
                    <div className="mt-1 pt-1 border-t border-cyan-700/30">
                      <div>Link sichtbar: {item.parentLinkVisible ? '✅' : '❌'}</div>
                      <div>Link Size: {item.parentLinkWidth}x{item.parentLinkHeight}px</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="p-2 bg-blue-900/30 rounded">
              <div className="font-bold text-blue-400 mb-1">EMPFEHLUNGEN:</div>
              {debugInfo.overlap.sidebarOverlapsContent && (
                <div className="text-yellow-300">
                  → Content Margin erhöhen auf: {Math.round(debugInfo.sidebar.right + 16)}px
                </div>
              )}
              {!debugInfo.content.isVisible && (
                <div className="text-red-300">
                  → Content ist nicht sichtbar! Prüfe CSS-Eigenschaften.
                </div>
              )}
              {debugInfo.content.width === 0 && (
                <div className="text-red-300">
                  → Content hat keine Breite! Prüfe Flexbox/Grid-Layout.
                </div>
              )}
              {debugInfo.navItems.some(item => !item.iconVisible) && (
                <div className="text-red-300">
                  → Einige Icons sind nicht sichtbar! Prüfe CSS-Eigenschaften der Icons.
                </div>
              )}
              {!debugInfo.logoIcon.visible && (
                <div className="text-red-300">
                  → Logo-Icon ist nicht sichtbar! Prüfe CSS-Eigenschaften.
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}


import { SidebarNav } from "@/components/SidebarNav"
import { ThemeToggle } from "@/components/ThemeToggle"
import { MessageSquare, Search, BarChart3, FileText, CheckCircle, ArrowDown } from "lucide-react"
import { Link } from "react-router-dom"

export function LandingPage() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar Navigation */}
      <SidebarNav />
      
      {/* Floating Theme Toggle - unten rechts */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div 
        id="main-content"
        className="flex-1 md:ml-24 flex flex-col w-full overflow-x-hidden pt-20 md:pt-0"
        style={{
          minWidth: 0, // Wichtig für Flexbox
        }}
      >
        {/* Hero Section - Großteil des Displays */}
        <section 
          id="home" 
          className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden"
        >
          {/* Hintergrund mit Liquid Glass Effekt und Farbakzenten */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Basis-Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 dark:from-background dark:via-background dark:to-muted/20" />
            
            {/* Animierte Farbakzente - Primary */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60 dark:opacity-40 animate-pulse" 
              style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60 dark:opacity-40 animate-pulse" 
              style={{ animationDuration: '5s', animationDelay: '1s' }} />
            
            {/* Zusätzliche Farbakzente - Blau/Cyan */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/15 dark:bg-cyan-500/10 rounded-full blur-3xl opacity-50 animate-pulse" 
              style={{ animationDuration: '6s', animationDelay: '0.5s' }} />
            <div className="absolute top-0 right-1/3 w-80 h-80 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-3xl opacity-40 animate-pulse" 
              style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
            
            {/* Zusätzliche Farbakzente - Orange/Amber */}
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-500/15 dark:bg-orange-500/10 rounded-full blur-3xl opacity-45 animate-pulse" 
              style={{ animationDuration: '5.5s', animationDelay: '2s' }} />
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
            
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />
          </div>

          {/* Hauptinhalt */}
          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
            {/* Brand Name */}
            <div className="mb-8">
              <span className="inline-block px-6 py-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-base font-semibold backdrop-blur-sm border border-primary/20">
                Haesler Marketing
              </span>
            </div>

            {/* Hauptüberschrift - mit Glow-Effekt */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight relative">
              <span 
                className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent relative z-10"
                style={{
                  textShadow: '0 0 40px rgba(120, 119, 198, 0.3), 0 0 80px rgba(120, 119, 198, 0.2)',
                  filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
                }}
              >
                Weil im Marketing nur wahre Expertise den Unterschied macht.
              </span>
              {/* Glow-Effekt Hintergrund */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 blur-2xl opacity-50 -z-10"
                aria-hidden="true"
              />
            </h1>

            {/* Untertitel */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Für professionelle Dienstleister und Unternehmen, die verstanden haben, dass neue Kampagnenstrukturen und Pixeloptimierungen, sowie leere Versprechen und KPI-Sheets von drittklassigen Marketing-Massenagenturen nicht mehr ausreichen, um Millionenumsätze zu erreichen.
            </p>

            {/* Call-to-Action Button mit Liquid Glass Effekt - Auffällig */}
            <div className="mb-12">
              <button
                onClick={() => {
                  const nextSection = document.getElementById('philosophy')
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="relative group px-10 py-5 rounded-2xl backdrop-blur-3xl bg-gradient-to-br from-orange-500/30 via-pink-500/25 to-yellow-500/20 dark:from-orange-400/40 dark:via-pink-400/35 dark:to-yellow-400/30 border border-orange-300/70 dark:border-orange-200/70 text-white font-bold text-xl md:text-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden cursor-pointer"
                style={{
                  boxShadow: '0 0 60px rgba(251, 146, 60, 0.5), 0 0 100px rgba(236, 72, 153, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 237, 213, 0.4) inset, 0 1px 0 rgba(255, 255, 255, 0.3) inset',
                }}
              >
                {/* Glow-Effekt Hintergrund - Orange zu Pink zu Gelb */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 -z-10" />
                
                {/* Liquid Glass Overlay - Hauptschicht - sehr intensiv */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-b from-orange-400/40 via-pink-400/30 to-yellow-400/25 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Liquid Glass Overlay - Reflektionsschicht */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-orange-300/30 via-transparent to-yellow-300/20 opacity-80" />
                
                {/* Liquid Glass Overlay - Highlight oben */}
                <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-2xl pointer-events-none bg-gradient-to-b from-orange-200/40 via-pink-200/20 to-transparent" />
                
                {/* Shimmer Effect - warme Töne - immer sichtbar */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent animate-shimmer opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                />
                
                {/* Zusätzlicher Glanz-Effekt */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-orange-300/20 via-pink-300/20 to-yellow-300/20 opacity-50" />
                
                {/* Button Text mit Glow */}
                <span 
                  className="relative z-10 text-white"
                  style={{
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  Wie würden wir miteinander arbeiten?
                </span>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
              <div className="w-1 h-3 rounded-full bg-foreground/50 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Philosophy Section - Warnungs-Banner und Motto */}
        <section id="philosophy" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden">
          {/* Hintergrund mit Farbakzenten */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20 dark:from-muted/20 dark:via-background dark:to-muted/10" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-50 dark:opacity-30 animate-pulse" 
              style={{ animationDuration: '5s' }} />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl opacity-50 dark:opacity-30 animate-pulse" 
              style={{ animationDuration: '6s', animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 container mx-auto px-4 max-w-5xl space-y-12">
            {/* Warnungs-Banner mit Liquid Glass Effekt - Auffällig */}
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-amber-500/20 via-amber-500/15 to-amber-500/10 dark:from-amber-400/25 dark:via-amber-400/20 dark:to-amber-400/15 border-2 border-amber-500/40 dark:border-amber-400/50 p-8 md:p-12 overflow-hidden"
                style={{
                  boxShadow: '0 20px 60px rgba(251, 191, 36, 0.3), 0 0 0 1px rgba(251, 191, 36, 0.2) inset, 0 1px 0 rgba(255, 255, 255, 0.2) inset',
                }}
              >
                {/* Liquid Glass Overlay - intensiv */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-b from-amber-400/30 via-amber-400/20 to-transparent dark:from-amber-300/25 dark:via-amber-300/15 dark:to-transparent" />
                
                {/* Shimmer Effect - immer sichtbar */}
                <div 
                  className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-transparent via-amber-400/20 to-transparent dark:from-transparent dark:via-amber-300/20 dark:to-transparent animate-shimmer opacity-70"
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                />
                
                {/* Warnungs-Icon und Text */}
                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl text-foreground/95 leading-relaxed flex-1 font-medium">
                    Wer direkte Pauschalpreise oder Lösungen erwartet, muss erst von anderen Agenturen enttäuscht werden. Jedes individuelle Produkt bedarf einer eigenständigen Standes-Analyse, sowie einer konkreten und transparenten Einordnung aller aktuellen Marketingstrukturen, sowie der benötigten Änderungen und langfristigen Management-Implementierungen, um konkrete Arbeitsaufwände und daraus resultierende Dienstleistungskosten evaluieren zu können.
                  </p>
                </div>
              </div>
            </div>

            {/* Motto/Sprichwort - Auffällig */}
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-foreground/10 via-foreground/8 to-foreground/5 dark:from-foreground/15 dark:via-foreground/12 dark:to-foreground/8 border-2 border-foreground/20 dark:border-foreground/30 p-10 md:p-16 overflow-hidden"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset',
                }}
              >
                {/* Decorative Quote Marks - größer */}
                <div className="absolute top-6 left-6 text-8xl font-serif text-foreground/15 dark:text-foreground/25 leading-none">"</div>
                <div className="absolute bottom-6 right-6 text-8xl font-serif text-foreground/15 dark:text-foreground/25 leading-none">"</div>
                
                {/* Liquid Glass Overlay - intensiv */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-b from-foreground/10 via-foreground/5 to-transparent dark:from-foreground/15 dark:via-foreground/8 dark:to-transparent" />
                
                {/* Shimmer Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-transparent via-foreground/10 to-transparent dark:from-transparent dark:via-foreground/15 dark:to-transparent animate-shimmer opacity-50"
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                />
                
                {/* Motto Text - größer und auffälliger */}
                <p className="relative z-10 text-center text-2xl md:text-3xl lg:text-4xl font-bold italic text-foreground dark:text-foreground leading-relaxed">
                  Wer nicht analysiert wird, wird halbherzig abgefrühstückt.
                </p>
              </div>
            </div>

            {/* CTA Button - So machen wir es stattdessen */}
            <div className="max-w-4xl mx-auto pt-8 flex justify-center">
              <button
                onClick={() => {
                  const methodikSection = document.getElementById('methodik')
                  if (methodikSection) {
                    methodikSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="relative group px-10 py-5 rounded-2xl backdrop-blur-3xl bg-gradient-to-br from-orange-500/30 via-pink-500/25 to-yellow-500/20 dark:from-orange-400/40 dark:via-pink-400/35 dark:to-yellow-400/30 border border-orange-300/70 dark:border-orange-200/70 text-white font-bold text-xl md:text-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden cursor-pointer"
                style={{
                  boxShadow: '0 0 60px rgba(251, 146, 60, 0.5), 0 0 100px rgba(236, 72, 153, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 237, 213, 0.4) inset, 0 1px 0 rgba(255, 255, 255, 0.3) inset',
                }}
              >
                {/* Glow-Effekt Hintergrund - Orange zu Pink zu Gelb */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 -z-10" />
                
                {/* Liquid Glass Overlay - Hauptschicht - sehr intensiv */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-b from-orange-400/40 via-pink-400/30 to-yellow-400/25 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Liquid Glass Overlay - Reflektionsschicht */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-orange-300/30 via-transparent to-yellow-300/20 opacity-80" />
                
                {/* Liquid Glass Overlay - Highlight oben */}
                <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-2xl pointer-events-none bg-gradient-to-b from-orange-200/40 via-pink-200/20 to-transparent" />
                
                {/* Shimmer Effect - warme Töne - immer sichtbar */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent animate-shimmer opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                />
                
                {/* Zusätzlicher Glanz-Effekt */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-orange-300/20 via-pink-300/20 to-yellow-300/20 opacity-50" />
                
                {/* Button Text mit Glow */}
                <span 
                  className="relative z-10 text-white"
                  style={{
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  So machen wir es stattdessen
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Methodik Section */}
        <section id="methodik" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden">
          {/* Hintergrund mit Farbakzenten */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 dark:from-background dark:via-background dark:to-muted/20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60 dark:opacity-40 animate-pulse" 
              style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60 dark:opacity-40 animate-pulse" 
              style={{ animationDuration: '5s', animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 container mx-auto px-4 max-w-6xl">
            {/* Überschrift */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Unsere Methodik
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ein transparenter, 5-stufiger Prozess – ohne FOMO, nur Expertise
              </p>
            </div>

            {/* Methodik Schritte */}
            <div className="space-y-6 md:space-y-8">
              {/* Schritt 1: Bewerbung */}
              <div className="relative md:ml-8 group">
                <div 
                  className="relative rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-background/70 via-background/50 to-background/40 dark:from-background/60 dark:via-background/40 dark:to-background/30 border-2 border-border/60 dark:border-border/40 p-8 md:p-10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset',
                  }}
                >
                  {/* Mehrschichtige Schatten für Tiefe */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  {/* Liquid Glass Overlay - Hauptschicht */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-b from-primary/15 via-primary/8 to-transparent dark:from-primary/20 dark:via-primary/12 dark:to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Reflektive Kante oben */}
                  <div className="absolute top-0 left-0 right-0 h-1/4 rounded-t-3xl pointer-events-none bg-gradient-to-b from-white/10 via-white/5 to-transparent dark:from-white/5 dark:via-white/2 dark:to-transparent" />
                  
                  {/* Shimmer Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                    {/* Schritt-Nummer mit Icon - mit 3D-Effekt */}
                    <div 
                      className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/40 via-pink-500/35 to-yellow-500/30 dark:from-orange-400/50 dark:via-pink-400/45 dark:to-yellow-400/40 border-2 border-orange-300/60 dark:border-orange-200/60 flex flex-col items-center justify-center text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-1"
                      style={{
                        boxShadow: '0 4px 12px rgba(251, 146, 60, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.2) inset',
                      }}
                    >
                      <MessageSquare className="w-6 h-6 mb-1" />
                      <span className="text-lg font-bold">1</span>
                    </div>
                    
                    {/* Inhalt */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Bewerbung</h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Du buchst dir ein persönliches 1 zu 1 Gespräch, in dem du Angaben zu deinem Angebot, Unternehmen, aktuellen Marketing-Kanälen und Budgets machst. Zudem teilst du direkte Bottlenecks, aktuelle Probleme und deine Ziele mit, die du durch unsere Zusammenarbeit erreichen möchtest.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Verbindungslinie mit Pfeil */}
                <div className="absolute left-10 md:left-10 top-full w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent hidden md:block" />
                <div className="absolute left-[38px] top-[calc(100%+24px)] hidden md:block">
                  <ArrowDown className="w-4 h-4 text-primary/40" />
                </div>
              </div>

              {/* Schritt 2: Standes-Analyse */}
              <div className="relative md:ml-8 group">
                <div 
                  className="relative rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-background/70 via-background/50 to-background/40 dark:from-background/60 dark:via-background/40 dark:to-background/30 border-2 border-border/60 dark:border-border/40 p-8 md:p-10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset',
                  }}
                >
                  {/* Mehrschichtige Schatten für Tiefe */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  {/* Liquid Glass Overlay - Hauptschicht */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-b from-primary/15 via-primary/8 to-transparent dark:from-primary/20 dark:via-primary/12 dark:to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Reflektive Kante oben */}
                  <div className="absolute top-0 left-0 right-0 h-1/4 rounded-t-3xl pointer-events-none bg-gradient-to-b from-white/10 via-white/5 to-transparent dark:from-white/5 dark:via-white/2 dark:to-transparent" />
                  
                  {/* Shimmer Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                    {/* Schritt-Nummer mit Icon - mit 3D-Effekt */}
                    <div 
                      className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/40 via-pink-500/35 to-yellow-500/30 dark:from-orange-400/50 dark:via-pink-400/45 dark:to-yellow-400/40 border-2 border-orange-300/60 dark:border-orange-200/60 flex flex-col items-center justify-center text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-1"
                      style={{
                        boxShadow: '0 4px 12px rgba(251, 146, 60, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.2) inset',
                      }}
                    >
                      <Search className="w-6 h-6 mb-1" />
                      <span className="text-lg font-bold">2</span>
                    </div>
                    
                    {/* Inhalt */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Standes-Analyse</h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Wir gehen gemeinsam alle Punkte aus dem Fragebogen durch, zu deinem Unternehmen, den Angeboten, der aktuellen Situation und deinen Zukunftsvorstellungen. Ziel ist es, dass ich alle Aspekte und Strukturen deines Unternehmens genau verstehe und mir bezüglich der präzisen Ziele im Klaren bin.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Verbindungslinie mit Pfeil */}
                <div className="absolute left-10 md:left-10 top-full w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent hidden md:block" />
                <div className="absolute left-[38px] top-[calc(100%+24px)] hidden md:block">
                  <ArrowDown className="w-4 h-4 text-primary/40" />
                </div>
              </div>

              {/* Schritt 3: Intern-Analyse */}
              <div className="relative md:ml-8 group">
                <div 
                  className="relative rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-background/70 via-background/50 to-background/40 dark:from-background/60 dark:via-background/40 dark:to-background/30 border-2 border-border/60 dark:border-border/40 p-8 md:p-10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset',
                  }}
                >
                  {/* Mehrschichtige Schatten für Tiefe */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  {/* Liquid Glass Overlay - Hauptschicht */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-b from-primary/15 via-primary/8 to-transparent dark:from-primary/20 dark:via-primary/12 dark:to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Reflektive Kante oben */}
                  <div className="absolute top-0 left-0 right-0 h-1/4 rounded-t-3xl pointer-events-none bg-gradient-to-b from-white/10 via-white/5 to-transparent dark:from-white/5 dark:via-white/2 dark:to-transparent" />
                  
                  {/* Shimmer Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                    {/* Schritt-Nummer mit Icon - mit 3D-Effekt */}
                    <div 
                      className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/40 via-pink-500/35 to-yellow-500/30 dark:from-orange-400/50 dark:via-pink-400/45 dark:to-yellow-400/40 border-2 border-orange-300/60 dark:border-orange-200/60 flex flex-col items-center justify-center text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-1"
                      style={{
                        boxShadow: '0 4px 12px rgba(251, 146, 60, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.2) inset',
                      }}
                    >
                      <BarChart3 className="w-6 h-6 mb-1" />
                      <span className="text-lg font-bold">3</span>
                    </div>
                    
                    {/* Inhalt */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Intern-Analyse</h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Auf Basis der Inhalte analysiere ich die internen Marketingstrukturen in den Ad-Managern und Funnels, um Defizite und Problemfaktoren zu erfassen. Darauf basierend erstelle ich einen direkten Marketing-Schritteplan, mit dem ich fortan unter meiner Leitung die Marketing-Kanäle übernehmen würde.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Verbindungslinie mit Pfeil */}
                <div className="absolute left-10 md:left-10 top-full w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent hidden md:block" />
                <div className="absolute left-[38px] top-[calc(100%+24px)] hidden md:block">
                  <ArrowDown className="w-4 h-4 text-primary/40" />
                </div>
              </div>

              {/* Schritt 4: Änderungs-Analyse */}
              <div className="relative md:ml-8 group">
                <div 
                  className="relative rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-background/70 via-background/50 to-background/40 dark:from-background/60 dark:via-background/40 dark:to-background/30 border-2 border-border/60 dark:border-border/40 p-8 md:p-10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset',
                  }}
                >
                  {/* Mehrschichtige Schatten für Tiefe */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  {/* Liquid Glass Overlay - Hauptschicht */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-b from-primary/15 via-primary/8 to-transparent dark:from-primary/20 dark:via-primary/12 dark:to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Reflektive Kante oben */}
                  <div className="absolute top-0 left-0 right-0 h-1/4 rounded-t-3xl pointer-events-none bg-gradient-to-b from-white/10 via-white/5 to-transparent dark:from-white/5 dark:via-white/2 dark:to-transparent" />
                  
                  {/* Shimmer Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                    {/* Schritt-Nummer mit Icon - mit 3D-Effekt */}
                    <div 
                      className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/40 via-pink-500/35 to-yellow-500/30 dark:from-orange-400/50 dark:via-pink-400/45 dark:to-yellow-400/40 border-2 border-orange-300/60 dark:border-orange-200/60 flex flex-col items-center justify-center text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-1"
                      style={{
                        boxShadow: '0 4px 12px rgba(251, 146, 60, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.2) inset',
                      }}
                    >
                      <FileText className="w-6 h-6 mb-1" />
                      <span className="text-lg font-bold">4</span>
                    </div>
                    
                    {/* Inhalt */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Änderungs-Analyse</h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Wir setzen uns erneut in ein gemeinsames 1 zu 1 Gespräch, in dem ich meine Vorschläge für Änderungen und konkrete Defizite anspreche. Ich erläutere, ob ich das Ziel für möglich befinde, ob ich mich dem Projekt anschließen würde, wie lange eine Zusammenarbeit mindestens aussehen müsste und zu welchen preislichen Konditionen auf Basis des benötigten Arbeitsaufwandes.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Verbindungslinie mit Pfeil */}
                <div className="absolute left-10 md:left-10 top-full w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent hidden md:block" />
                <div className="absolute left-[38px] top-[calc(100%+24px)] hidden md:block">
                  <ArrowDown className="w-4 h-4 text-primary/40" />
                </div>
              </div>

              {/* Schritt 5: Angebot */}
              <div className="relative md:ml-8 group">
                <div 
                  className="relative rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-background/70 via-background/50 to-background/40 dark:from-background/60 dark:via-background/40 dark:to-background/30 border-2 border-border/60 dark:border-border/40 p-8 md:p-10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset',
                  }}
                >
                  {/* Mehrschichtige Schatten für Tiefe */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  {/* Liquid Glass Overlay - Hauptschicht */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-b from-primary/15 via-primary/8 to-transparent dark:from-primary/20 dark:via-primary/12 dark:to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Reflektive Kante oben */}
                  <div className="absolute top-0 left-0 right-0 h-1/4 rounded-t-3xl pointer-events-none bg-gradient-to-b from-white/10 via-white/5 to-transparent dark:from-white/5 dark:via-white/2 dark:to-transparent" />
                  
                  {/* Shimmer Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                    {/* Schritt-Nummer mit Icon - mit 3D-Effekt */}
                    <div 
                      className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/40 via-pink-500/35 to-yellow-500/30 dark:from-orange-400/50 dark:via-pink-400/45 dark:to-yellow-400/40 border-2 border-orange-300/60 dark:border-orange-200/60 flex flex-col items-center justify-center text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-1"
                      style={{
                        boxShadow: '0 4px 12px rgba(251, 146, 60, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.2) inset',
                      }}
                    >
                      <CheckCircle className="w-6 h-6 mb-1" />
                      <span className="text-lg font-bold">5</span>
                    </div>
                    
                    {/* Inhalt */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Angebot</h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                        Du erhältst 2 bis 3 Tage Bedenkzeit, um dich mit deinem internen Team abzusprechen und die Ergebnisse und Vorschläge zu validieren. Anschließend gehen wir in ein finales Angebots-Gespräch, in dem wir uns auf eine Zusammenarbeit einigen oder entsprechend nicht.
                      </p>
                      <p className="text-base md:text-lg text-foreground/80 font-medium italic">
                        Kein FOMO, keine Vertriebler, nur Expertise und Transparenz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button - So sehen unsere Referenzen aus */}
              <div className="max-w-4xl mx-auto pt-12 flex justify-center">
                <button
                  onClick={() => {
                    const referenzenSection = document.getElementById('referenzen')
                    if (referenzenSection) {
                      referenzenSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="relative group px-10 py-5 rounded-2xl backdrop-blur-3xl bg-gradient-to-br from-orange-500/30 via-pink-500/25 to-yellow-500/20 dark:from-orange-400/40 dark:via-pink-400/35 dark:to-yellow-400/30 border border-orange-300/70 dark:border-orange-200/70 text-white font-bold text-xl md:text-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: '0 0 60px rgba(251, 146, 60, 0.5), 0 0 100px rgba(236, 72, 153, 0.3), 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 237, 213, 0.4) inset, 0 1px 0 rgba(255, 255, 255, 0.3) inset',
                  }}
                >
                  {/* Glow-Effekt Hintergrund - Orange zu Pink zu Gelb */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 -z-10" />
                  
                  {/* Liquid Glass Overlay - Hauptschicht - sehr intensiv */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-b from-orange-400/40 via-pink-400/30 to-yellow-400/25 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Liquid Glass Overlay - Reflektionsschicht */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-orange-300/30 via-transparent to-yellow-300/20 opacity-80" />
                  
                  {/* Liquid Glass Overlay - Highlight oben */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-2xl pointer-events-none bg-gradient-to-b from-orange-200/40 via-pink-200/20 to-transparent" />
                  
                  {/* Shimmer Effect - warme Töne - immer sichtbar */}
                  <div 
                    className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent animate-shimmer opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                  
                  {/* Zusätzlicher Glanz-Effekt */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-orange-300/20 via-pink-300/20 to-yellow-300/20 opacity-50" />
                  
                  {/* Button Text mit Glow */}
                  <span 
                    className="relative z-10 text-white"
                    style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    So sehen unsere Referenzen aus
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Referenzen Section */}
        <section id="referenzen" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden">
          {/* Hintergrund mit Farbakzenten */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 dark:from-background dark:via-background dark:to-muted/20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60 dark:opacity-40 animate-pulse" 
              style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60 dark:opacity-40 animate-pulse" 
              style={{ animationDuration: '5s', animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Referenzen
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Hier kommt der Inhalt für die Referenzen-Sektion.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Über uns</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Hier kommt der Inhalt für die Über-uns-Sektion.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8 px-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                &copy; 2025 Haesler Marketing. Alle Rechte vorbehalten.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                <Link 
                  to="/impressum" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Impressum
                </Link>
                <Link 
                  to="/datenschutz" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Datenschutzerklärung
                </Link>
                <Link 
                  to="/agb" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  AGBs
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}


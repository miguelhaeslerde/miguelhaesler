import { SidebarNav } from "@/components/SidebarNav"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Link } from "react-router-dom"

export function Impressum() {
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
          minWidth: 0,
        }}
      >
        <div className="container mx-auto px-4 md:px-8 py-20 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Impressum
            </span>
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                Haesler Marketing<br />
                [Ihr Name]<br />
                [Straße und Hausnummer]<br />
                [Postleitzahl] [Ort]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
              <p>
                Telefon: [Telefonnummer]<br />
                E-Mail: [E-Mail-Adresse]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [USt-IdNr.]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                [Ihr Name]<br />
                [Straße und Hausnummer]<br />
                [Postleitzahl] [Ort]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Haftung für Inhalte</h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link 
              to="/" 
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}



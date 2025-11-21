import { SidebarNav } from "@/components/SidebarNav"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Link } from "react-router-dom"

export function AGB() {
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
              Allgemeine Geschäftsbedingungen
            </span>
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Haesler Marketing (nachfolgend "Auftragnehmer") und seinen Kunden (nachfolgend "Auftraggeber") über die Erbringung von Marketingdienstleistungen.
              </p>
              <p>
                Abweichende, entgegenstehende oder ergänzende AGB des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Vertragsgegenstand</h2>
              <p>
                Der Auftragnehmer erbringt Marketingdienstleistungen nach Maßgabe der individuellen Vereinbarung mit dem Auftraggeber. Die konkreten Leistungen ergeben sich aus dem jeweiligen Angebot oder der Auftragsbestätigung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Angebot und Vertragsabschluss</h2>
              <p>
                Alle Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern nicht ausdrücklich etwas anderes vereinbart wurde.
              </p>
              <p>
                Der Vertrag kommt durch schriftliche Auftragsbestätigung des Auftragnehmers oder durch Beginn der Leistungserbringung zustande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Leistungserbringung</h2>
              <p>
                Der Auftragnehmer erbringt die vereinbarten Leistungen mit der gebotenen Sorgfalt nach den Regeln der Kunst und in Übereinstimmung mit den anerkannten fachlichen Standards.
              </p>
              <p>
                Der Auftraggeber verpflichtet sich, dem Auftragnehmer alle für die Leistungserbringung erforderlichen Informationen, Unterlagen und Zugänge rechtzeitig und vollständig zur Verfügung zu stellen.
              </p>
              <p>
                Änderungen und Ergänzungen des Auftrags bedürfen der schriftlichen Vereinbarung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Vergütung</h2>
              <p>
                Die Vergütung richtet sich nach der jeweiligen Vereinbarung. Sofern nichts anderes vereinbart wurde, sind alle Preise in Euro zuzüglich der gesetzlichen Mehrwertsteuer zu verstehen.
              </p>
              <p>
                Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Rechte an Arbeitsergebnissen</h2>
              <p>
                Alle Rechte an den vom Auftragnehmer erstellten Arbeitsergebnissen gehen auf den Auftraggeber über, sobald die vereinbarte Vergütung vollständig gezahlt wurde.
              </p>
              <p>
                Der Auftragnehmer behält sich das Recht vor, die erstellten Arbeiten für eigene Werbezwecke zu verwenden, es sei denn, dies wurde ausdrücklich ausgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Haftung</h2>
              <p>
                Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des Produkthaftungsgesetzes.
              </p>
              <p>
                Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung einer wesentlichen Vertragspflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf (Kardinalpflicht). In diesem Fall ist die Haftung auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.
              </p>
              <p>
                Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht eine Kardinalpflicht verletzt wurde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Kündigung</h2>
              <p>
                Beide Parteien können den Vertrag jederzeit aus wichtigem Grund ohne Einhaltung einer Kündigungsfrist kündigen.
              </p>
              <p>
                Ein wichtiger Grund liegt insbesondere vor, wenn eine Partei trotz Abmahnung mit angemessener Frist eine wesentliche Vertragspflicht verletzt oder wenn eine Partei in Zahlungsverzug gerät.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Datenschutz</h2>
              <p>
                Der Auftragnehmer verarbeitet personenbezogene Daten des Auftraggebers im Rahmen der gesetzlichen Bestimmungen. Nähere Informationen finden Sie in unserer Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Schlussbestimmungen</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Die unwirksame Bestimmung soll durch eine wirksame ersetzt werden, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
              </p>
              <p>
                Erfüllungsort und Gerichtsstand ist, soweit der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, der Sitz des Auftragnehmers.
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



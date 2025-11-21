import { SidebarNav } from "@/components/SidebarNav"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Link } from "react-router-dom"

export function Datenschutz() {
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
              Datenschutzerklärung
            </span>
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Hosting</h2>
              <p>
                Diese Website wird bei [Hosting-Anbieter] gehostet. Der Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>jeweils übertragene Datenmenge</li>
                <li>Website, von der die Anforderung kommt</li>
                <li>Browser</li>
                <li>Betriebssystem und dessen Oberfläche</li>
                <li>Sprache und Version der Browsersoftware</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                Haesler Marketing<br />
                [Ihr Name]<br />
                [Straße und Hausnummer]<br />
                [Postleitzahl] [Ort]<br /><br />
                Telefon: [Telefonnummer]<br />
                E-Mail: [E-Mail-Adresse]
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Berichtigung unrichtiger Daten zu verlangen</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                <li>Einschränkung der Datenverarbeitung zu verlangen, soweit wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns zu erheben</li>
                <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben</li>
              </ul>
              <p className="mt-4">
                Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
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



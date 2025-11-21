import { ThemeProvider } from "@/contexts/ThemeContext"
// Temporär auskommentiert für Wartungsmodus:
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { LandingPage } from "@/components/LandingPage"
// import { LiquidCursor } from "@/components/LiquidCursor"
// import { Impressum } from "@/pages/Impressum"
// import { Datenschutz } from "@/pages/Datenschutz"
// import { AGB } from "@/pages/AGB"

function MaintenancePage() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[99999]">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Wartungsarbeiten</h1>
        <p className="text-xl">Die Seite ist derzeit nicht verfügbar.</p>
      </div>
    </div>
  )
}

function App() {
  // Seite ist offline - zeige nur Wartungsseite
  return (
    <ThemeProvider>
      <MaintenancePage />
    </ThemeProvider>
  )
  
  // Original Code (auskommentiert für Wartung):
  // return (
  //   <ThemeProvider>
  //     <BrowserRouter>
  //       <LiquidCursor />
  //       <Routes>
  //         <Route path="/" element={<LandingPage />} />
  //         <Route path="/impressum" element={<Impressum />} />
  //         <Route path="/datenschutz" element={<Datenschutz />} />
  //         <Route path="/agb" element={<AGB />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </ThemeProvider>
  // )
}

export default App


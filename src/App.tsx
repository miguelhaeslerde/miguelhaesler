import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "@/components/LandingPage"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { LiquidCursor } from "@/components/LiquidCursor"
import { Impressum } from "@/pages/Impressum"
import { Datenschutz } from "@/pages/Datenschutz"
import { AGB } from "@/pages/AGB"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <LiquidCursor />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App


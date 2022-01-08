import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import theme from "./theme"
import { MainLayout } from "./layouts"
import CompanyRepresentationPage from "./pages/CompanyRepresentation"
import BlankPage from "./pages/Blank"
import NextPage from "./pages/Next"

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <Routes>
            <Route path='/' element={<CompanyRepresentationPage />} />
            <Route path='blank' element={<BlankPage />} />
            <Route path='next' element={<NextPage />} />
          </Routes>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

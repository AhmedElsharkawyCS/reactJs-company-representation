import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./theme"
import { MainLayout } from "./layouts"
import CompanyRepresentation from "./pages/CompanyRepresentation"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <CompanyRepresentation />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App

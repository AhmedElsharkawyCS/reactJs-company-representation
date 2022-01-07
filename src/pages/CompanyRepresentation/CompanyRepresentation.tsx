import React from "react"
import Box from "@mui/material/Box"
import ArrowBack from "./ArrowBack"
import CompanyTitle from "./CompanyTitle"
import CompanyQuestion from "./CompanyQuestion"
import CompanyButtons from "./CompanyButtons"
import CompanyForm from "./CompanyForm"
import { Container } from "../../components"

export default function CompanyRepresentation() {
  const [step, setStep] = React.useState<number>(1)
  const [formData, setFormData] = React.useState<any>()
  const handleFormSubmit = (data: any) => {
    alert(JSON.stringify(data))
  }
  const handleFormChange = (data: any) => {
    setFormData(data)
  }
  const handleStep = (number: number) => {
    setStep(number)
  }
  const handleOnBack = () => {
    if (step > 0 && step <= 3) {
      setStep(step - 1)
    }
    if (step === 2) alert(JSON.stringify(formData))
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pt: "30px", pb: "40px", height: "100%" }}>
      <ArrowBack onClick={handleOnBack} />
      <Container sx={{ pt: "20px", pb: "20px", flexGrow: 1, justifyContent: "flex-start" }}>
        <>
          <CompanyTitle />
          <CompanyQuestion />
          <CompanyButtons onNoClick={() => handleStep(2)} onYesClick={() => handleStep(3)} />
          {step === 2 && <CompanyForm onSubmit={handleFormSubmit} handleFormChange={handleFormChange} />}
        </>
      </Container>
    </Box>
  )
}

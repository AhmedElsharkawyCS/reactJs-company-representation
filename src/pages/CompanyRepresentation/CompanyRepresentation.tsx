import React from "react"
import Box from "@mui/material/Box"
import { useNavigate } from "react-router-dom"
import CompanyTitle from "./CompanyTitle"
import CompanyQuestion from "./CompanyQuestion"
import CompanyButtons from "./CompanyButtons"
import CompanyForm from "./CompanyForm"
import { Container, ArrowBack, Button } from "../../components"

export default function CompanyRepresentation() {
  const [step, setStep] = React.useState<number>(1)
  const navigate = useNavigate()
  const handleFormSubmit = (data: any) => {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4))
    navigate("/next")
  }
  const handleStep = (number: number) => {
    setStep(number)
  }
  const handleOnBack = () => {
    navigate("/blank")
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pt: "30px", pb: "40px", height: "100%" }}>
      <ArrowBack onClick={handleOnBack} />
      <Container sx={{ pt: "20px", pb: "20px", flexGrow: 1, justifyContent: "flex-start" }}>
        <>
          <CompanyTitle />
          <CompanyQuestion />
          <CompanyButtons
            NoButtonProps={{ onNoClick: () => handleStep(3), active: step === 3 }}
            YesButtonProps={{ onYesClick: () => handleStep(2), active: step === 2 }}
          />
          {step === 2 && <CompanyForm onSubmit={handleFormSubmit} />}
          {step === 3 && (
            <div style={{ display: "flex", flexGrow: 1, alignItems: "flex-end" }}>
              <Button sx={{ minWidth: "250px" }} size='medium' onClick={() => navigate("/next")} disableElevation disableRipple disableTouchRipple>
                Continue
              </Button>
            </div>
          )}
        </>
      </Container>
    </Box>
  )
}

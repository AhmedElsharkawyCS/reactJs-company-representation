import React from "react"
import Box from "@mui/material/Box"
import { useNavigate } from "react-router-dom"
import { Container, ArrowBack } from "../../components"

export default function Next() {
  const navigate = useNavigate()
  const handleOnBack = () => {
    navigate("/")
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pt: "30px", pb: "40px", height: "100%" }}>
      <ArrowBack onClick={handleOnBack} />
      <Container sx={{ flexGrow: 1 }}>
        <div>Fake Page</div>
      </Container>
    </Box>
  )
}

import React from "react"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import { Container, Text } from "../../components"

interface IProps {
  onClick?: React.MouseEventHandler<HTMLSpanElement>
}
export default function ArrowBack({ onClick }: IProps) {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "flex-start",
        bgcolor: "inherit",
        borderRadius: "unset",
        boxShadow: 0,
        color: "primary.main",
        paddingInlineStart: "10px !important",
      }}
    >
      <div onClick={onClick} style={{ display: "flex", cursor: "pointer" }}>
        <ArrowRightAltIcon sx={{ transform: "rotate(180deg)" }} /> <Text variant='body1'>Back</Text>
      </div>
    </Container>
  )
}

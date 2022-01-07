import * as React from "react"
import Button, { ButtonProps } from "@mui/material/Button"

interface IProps extends ButtonProps {}
export default function MUIButton({ children, sx = [], ...rest }: IProps) {
  return (
    <Button variant='contained' {...rest} sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}>
      {children}
    </Button>
  )
}

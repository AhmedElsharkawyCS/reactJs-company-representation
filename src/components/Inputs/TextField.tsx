import React from "react"
import TextField, { TextFieldProps } from "@mui/material/TextField"

export default function MUITextField({ sx = [], ...props }: TextFieldProps) {
  return <TextField label='text field' variant='standard' fullWidth focused {...props} sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]} />
}

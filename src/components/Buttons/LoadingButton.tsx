import * as React from "react"
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton"

interface IProps extends LoadingButtonProps {}
export default function MUILoadingButton({ children, sx = [], ...rest }: IProps) {
  return (
    <LoadingButton variant='outlined' {...rest} sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}>
      {children}
    </LoadingButton>
  )
}

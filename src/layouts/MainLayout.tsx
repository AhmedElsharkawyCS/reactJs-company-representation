import React from "react"
import Box, { BoxProps } from "@mui/material/Box"

interface IProps extends BoxProps {}
export default function MainLayout({ children, sx = [], ...rest }: IProps) {
  return (
    <Box
      {...rest}
      sx={[
        { display: "flex", height: "100vh", width: "100vw", bgcolor: "background.paper", minWidth: "600px", overflow: "auto" },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <div style={{ flexGrow: 1 }}>{children}</div>
    </Box>
  )
}

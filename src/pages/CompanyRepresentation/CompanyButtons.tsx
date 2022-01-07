import React from "react"
import Box from "@mui/material/Box"
import { Button } from "../../components"
interface IProps {
  onYesClick?: React.MouseEventHandler<HTMLButtonElement>
  onNoClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default function CompanyButtons({ onNoClick, onYesClick }: IProps) {
  return (
    <Box sx={{ display: "flex", mt: "15px" }}>
      <Button
        variant='outlined'
        // disabled
        disableFocusRipple
        disableTouchRipple
        // disableElevation
        onClick={onYesClick}
        sx={{ marginInlineEnd: "50px", minWidth: "150px" }}
      >
        Yes
      </Button>
      <Button
        variant='outlined'
        color='primary'
        // disabled
        disableFocusRipple
        disableTouchRipple
        // disableElevation
        onClick={onNoClick}
        sx={{ minWidth: "150px" }}
      >
        No
      </Button>
    </Box>
  )
}

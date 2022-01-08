import React from "react"
import Box from "@mui/material/Box"
import { Button } from "../../components"
interface IProps {
  YesButtonProps?: {
    onYesClick?: React.MouseEventHandler<HTMLButtonElement>
    disable?: boolean
    active?: boolean
  }
  NoButtonProps?: {
    onNoClick?: React.MouseEventHandler<HTMLButtonElement>
    disable?: boolean
    active?: boolean
  }
}

export default function CompanyButtons({ NoButtonProps, YesButtonProps }: IProps) {
  return (
    <Box sx={{ display: "flex", mt: "15px" }}>
      <Button
        key={1}
        variant='contained'
        disabled={YesButtonProps?.disable}
        disableFocusRipple
        disableTouchRipple
        disableElevation
        onClick={YesButtonProps?.onYesClick}
        sx={[
          {
            marginInlineEnd: "50px",
            minWidth: "150px",
            bgcolor: "background.paper",
            color: "common.black",
            typography: "body2",
            "&:hover": { bgcolor: "background.paper" },
          },
          !!YesButtonProps?.active && { color: "common.white", bgcolor: "#818488", "&:hover": { bgcolor: "#818488" } },
        ]}
      >
        Yes
      </Button>
      <Button
        key={2}
        variant='contained'
        disabled={NoButtonProps?.disable}
        disableFocusRipple
        disableTouchRipple
        disableElevation
        onClick={NoButtonProps?.onNoClick}
        sx={[
          {
            minWidth: "150px",
            bgcolor: "background.paper",
            color: "common.black",
            typography: "body2",
            "&:hover": { bgcolor: "background.paper" },
          },
          !!NoButtonProps?.active && { color: "common.white", bgcolor: "#818488", "&:hover": { bgcolor: "#818488" } },
        ]}
      >
        No
      </Button>
    </Box>
  )
}

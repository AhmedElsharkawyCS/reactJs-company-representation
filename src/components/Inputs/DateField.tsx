import React from "react"
import DateAdapter from "@mui/lab/AdapterMoment"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import DatePicker from "@mui/lab/DatePicker"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import TextField from "./TextField"

interface IProps {
  value: Date
  onChange: (date: any) => void
  label: string
  required?: boolean
  inputRef?: any
}

export default function DateField({ label, value, onChange, required, inputRef }: IProps) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
        label='date field'
        views={["day", "month", "year"]}
        mask='__/__/____'
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} label={label} required={required} size='small' />}
        components={{ OpenPickerIcon: KeyboardArrowDownIcon }}
      />
    </LocalizationProvider>
  )
}

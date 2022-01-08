import * as React from "react"
import debounce from "lodash.debounce"
import TextField from "./TextField"
import Autocomplete from "@mui/material/Autocomplete"
import CircularProgress from "@mui/material/CircularProgress"

interface IData {
  id: string
  value: string
  properties: any
}

interface IProps {
  options: readonly IData[]
  label: string
  onChange?: (e: any, options: any) => void
  onSearch?: (txt: string) => Promise<any>
  searchDelay?: number
}

export default function MUIAddressAutocomplete({ options, label, onChange, onSearch, searchDelay }: IProps) {
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [userQuery, setUserQuery] = React.useState("")
  const updateQuery = async () => {
    if (!userQuery) return
    setLoading(true)
    await onSearch?.(userQuery)
    setLoading(false)
  }
  //eslint-disable-next-line
  const delayedQuery = React.useCallback(debounce(updateQuery, searchDelay || 1000), [userQuery])
  const handleOnSearch = (e: any) => {
    setUserQuery(e.target.value)
  }
  React.useEffect(() => {
    delayedQuery()
    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel
  }, [userQuery, delayedQuery])

  return (
    <Autocomplete
      id='auto-complete'
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      options={options}
      loading={loading}
      getOptionLabel={(option: IData) => option.value}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          type='text'
          onChange={handleOnSearch}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  )
}

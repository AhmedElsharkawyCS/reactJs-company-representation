import React from "react"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import Grid from "@mui/material/Grid"
import AddIcon from "@mui/icons-material/AddBoxOutlined"
import { TextField, DateField, Button, Text } from "../../components"

interface IProps {
  onSubmit?: (data: any) => void
  handleFormChange?: (data: any) => void
}
export default function CompanyForm({ onSubmit, handleFormChange }: IProps) {
  const [fullName, setFullName] = React.useState<string>("")
  const [birthDate, setBirthDate] = React.useState<Date>(new Date())
  const [street, setStreet] = React.useState<string>("")
  const [city, setCity] = React.useState<string>("")
  const [apartment, setApartment] = React.useState<string>("")
  const [province, setProvince] = React.useState<string>("")
  const [postalCode, setPostalCode] = React.useState<string>("")

  //to track form inputs
  React.useEffect(() => {
    if (typeof handleFormChange === "function") {
      handleFormChange({ fullName, city, birthDate, street, province, postalCode, apartment })
    }
  }, [fullName, city, birthDate, street, province, postalCode, apartment])

  const handleOnSubmit = (ev: any) => {
    ev.preventDefault()
    onSubmit?.({
      fullName,
      city,
      birthDate,
      street,
      province,
      postalCode,
      apartment,
    })
  }
  //Call address api here to fill real location
  React.useEffect(() => {
    setStreet("123 test street")
    setCity("test city")
    setApartment("test province")
    setPostalCode("test postal code")
    setProvince("test province")
  }, [])

  return (
    <Box component='form' autoComplete='off' onSubmit={handleOnSubmit} sx={{ width: "600px", pt: "20px" }}>
      <FormControl>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name='fullName'
                  size='small'
                  value={fullName}
                  onChange={({ target }) => setFullName(target.value)}
                  type='text'
                  required
                  label='Beneficial owner full name'
                />
              </Grid>
              <Grid item xs={6}>
                <DateField value={birthDate} onChange={(date) => setBirthDate(date)} label='Beneficial owner date of birth' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ pt: "10px" }}>
              <Grid item xs={12}>
                <Text>Beneficial owner - home address (no P.O boxes)</Text>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='street'
                  value={street}
                  onChange={({ target }) => setStreet(target.value)}
                  size='small'
                  type='text'
                  required
                  label='Street'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='apartment'
                  value={apartment}
                  onChange={({ target }) => setApartment(target.value)}
                  size='small'
                  type='text'
                  required
                  label='Apartment/Suite'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField name='city' size='small' onChange={({ target }) => setCity(target.value)} value={city} type='text' required label='City' />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='province'
                  size='small'
                  onChange={({ target }) => setProvince(target.value)}
                  value={province}
                  type='text'
                  required
                  label='Province'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='postalCode'
                  size='small'
                  onChange={({ target }) => setPostalCode(target.value)}
                  type='text'
                  value={postalCode}
                  required
                  label='Postal Code'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} display='flex' justifyContent='center'>
                <AddIcon fontSize='small' sx={{ marginInlineEnd: "10px" }} />
                <Text variant='body2'>Add new director</Text>
              </Grid>
              <Grid item xs={12} display='flex' justifyContent='center'>
                <Button type='submit' sx={{ minWidth: "250px" }}>
                  Continue
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  )
}

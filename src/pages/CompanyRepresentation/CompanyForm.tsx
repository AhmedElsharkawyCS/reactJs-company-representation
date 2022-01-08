import React, { useState, Fragment } from "react"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import AddIcon from "@mui/icons-material/AddBoxOutlined"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { TextField, DateField, Button, Text, Autocomplete } from "../../components"
import { getLocationAddresses } from "../../api"

interface IProps {
  onSubmit?: (data: any) => void
}
const initialValues = {
  fullName: "",
  birthDate: new Date(),
  street: "",
  province: "",
  postalCode: "",
  apartment: "",
  city: "",
}

export default function CompanyMultiForm(props: IProps) {
  const [addressOptions, setAddressOptions] = useState([])
  const { control, handleSubmit } = useForm({
    defaultValues: {
      directors: [initialValues],
    },
  })
  const { fields, append, replace } = useFieldArray({
    control,
    name: "directors",
  })
  const onSubmit = (data: any) => {
    props.onSubmit?.(data)
  }
  const handleAddMore = async () => {
    if (fields.length < 4) {
      //   const address = await getLocationAddress()
      //   console.log(address)
      append({ ...initialValues })
      setAddressOptions([])
    }
  }
  const autoCompleteAddress = (idx: number, option: any) => {
    if (!option) return null
    const items = fields
    const { id } = option
    const addressItem: any = addressOptions.find((item: any) => item.id === id)
    if (!addressItem) return null
    const { properties } = addressItem
    items[idx] = { ...items[idx], ...properties }
    replace([...items])
  }
  const onSearch = async (txt: string) => {
    const data = await getLocationAddresses(txt || "")
    if (!data) return null
    const { features } = data
    const addresses = features.map(({ properties }: any) => {
      return {
        id: properties.place_id,
        value: properties.formatted,
        properties: {
          street: properties?.formatted || "",
          province: properties?.state || "",
          postalCode: properties?.postcode || "",
          apartment: properties?.address_line1 || "",
          city: properties?.city || "",
        },
      }
    })
    setAddressOptions(addresses)
  }
  return (
    <Box
      component='form'
      autoComplete='off'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: "700px",
        pt: "20px",
        "@media (max-width:750px)": {
          maxWidth: "90%",
        },
      }}
    >
      <FormControl>
        <Grid
          container
          spacing={3}
          sx={{
            "@media (max-width:500px)": {
              ml: "unset",
              mr: "unset",
              width: "auto",
            },
          }}
        >
          {fields.map((item, index) => {
            return (
              <Fragment key={item.id}>
                <Grid
                  item
                  xs={12}
                  key={item.id}
                  sx={{
                    "@media (max-width:500px)": {
                      pl: "0px !important",
                    },
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Controller
                            render={({ field: { ref, ...field } }) => (
                              <TextField {...field} inputRef={ref} size='small' type='text' label='Beneficial owner full name' />
                            )}
                            name={`directors.${index}.fullName` as never}
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Controller
                            render={({ field: { onChange, value, ref } }) => (
                              <DateField value={value} inputRef={ref} onChange={(date) => onChange(date)} label='Beneficial owner date of birth' />
                            )}
                            name={`directors.${index}.birthDate`}
                            control={control}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2} sx={{ pt: "10px" }}>
                        <Grid item xs={12}>
                          <Text>Beneficial owner - home address (no P.O boxes)</Text>
                        </Grid>
                        <Grid item xs={12}>
                          <Autocomplete
                            label='Address'
                            options={addressOptions}
                            onChange={(e, option) => {
                              autoCompleteAddress(index, option)
                            }}
                            onSearch={onSearch}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Controller
                            render={({ field: { ref, ...field } }) => (
                              <TextField {...field} inputRef={ref} size='small' type='text' label='Department/Suite' />
                            )}
                            name={`directors.${index}.apartment` as never}
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Controller
                            render={({ field: { ref, ...field } }) => <TextField {...field} inputRef={ref} size='small' type='text' label='City' />}
                            name={`directors.${index}.city` as never}
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Controller
                            render={({ field: { ref, ...field } }) => (
                              <TextField {...field} inputRef={ref} size='small' type='text' label='Province' />
                            )}
                            name={`directors.${index}.province` as never}
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Controller
                            render={({ field: { ref, ...field } }) => (
                              <TextField {...field} inputRef={ref} size='small' type='text' label='Postal Code' />
                            )}
                            name={`directors.${index}.postalCode` as never}
                            control={control}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {fields.length > 1 && index + 1 !== fields.length && (
                  <Grid item xs={12} key={100}>
                    <Divider />
                    <Divider />
                  </Grid>
                )}
              </Fragment>
            )
          })}
          <Grid
            item
            xs={12}
            key={200}
            sx={{
              "@media (max-width:500px)": {
                pl: "0px !important",
              },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} display='flex' justifyContent='center'>
                <AddIcon onClick={handleAddMore} fontSize='small' sx={{ marginInlineEnd: "10px", cursor: "pointer" }} />
                <Text variant='body2'>Add new director</Text>
              </Grid>
              <Grid item xs={12} display='flex' justifyContent='center'>
                <Button type='submit' size='medium' sx={{ minWidth: "250px" }} disableElevation disableRipple disableTouchRipple>
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

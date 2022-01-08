import React, { useEffect, Fragment } from "react"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import AddIcon from "@mui/icons-material/AddBoxOutlined"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { TextField, DateField, Button, Text } from "../../components"
// import { getLocationAddresses } from "../../api"

interface IProps {
  onSubmit?: (data: any) => void
}
const initialValues = {
  fullName: "",
  city: "",
  birthDate: new Date(),
  street: "",
  province: "",
  postalCode: "",
  apartment: "",
}

export default function CompanyMultiForm(props: IProps) {
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
      append({ ...initialValues, apartment: "apartment", postalCode: "postalCode", province: "province", city: "city", street: "street" })
    }
  }
  const fillAddress = (index: number) => {
    const object = fields.find((_, idx) => idx === index)
    if (!object) return null
    object.apartment = "apartment"
    object.postalCode = "postalCode"
    object.province = "province"
    object.city = "city"
    object.street = "street"
    const items = fields
    items[index] = object
    replace([...items])
  }

  useEffect(() => {
    fillAddress(0)
    // eslint-disable-next-line
  }, [])

  return (
    <Box component='form' autoComplete='off' onSubmit={handleSubmit(onSubmit)} sx={{ width: "600px", pt: "20px" }}>
      <FormControl>
        <Grid container spacing={3}>
          {fields.map((item, index) => {
            return (
              <Fragment key={item.id}>
                <Grid item xs={12} key={item.id}>
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
                          <Controller
                            render={({ field: { ref, ...field } }) => (
                              <TextField {...field} inputRef={ref} size='small' type='text' label='Beneficial owner full name' />
                            )}
                            name={`directors.${index}.street` as never}
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Controller
                            render={({ field: { ref, ...field } }) => (
                              <TextField {...field} inputRef={ref} size='small' type='text' label='Beneficial owner full name' />
                            )}
                            name={`directors.${index}.apartment` as never}
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Controller
                            render={({ field: { ref, ...field } }) => (
                              <TextField {...field} inputRef={ref} size='small' type='text' label='Beneficial owner full name' />
                            )}
                            name={`directors.${index}.city` as never}
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Controller
                            render={({ field: { ref, ...field } }) => (
                              <TextField {...field} inputRef={ref} size='small' type='text' label='Beneficial owner full name' />
                            )}
                            name={`directors.${index}.province` as never}
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Controller
                            render={({ field: { ref, ...field } }) => (
                              <TextField {...field} inputRef={ref} size='small' type='text' label='Beneficial owner full name' />
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
          <Grid item xs={12} key={200}>
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

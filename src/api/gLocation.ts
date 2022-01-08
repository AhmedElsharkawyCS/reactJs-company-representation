import axios from "./axios"
export const getLocationAddresses = async (text: string) => {
  try {
    const { data } = await axios.get(`/geocode/autocomplete?text=${text}&apiKey=81becfc18c594e1899acb65605e0ecee`)
    return data
  } catch (error: any) {
    alert("Get user location error: " + error?.message)
    return undefined
  }
}

import axios from "axios";

export const getCountries = async () =>
  await axios.get("https://restcountries.com/v2/all");

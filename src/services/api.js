import axios from "axios";
import { Config } from "../config/dev";

const countryInfoUrl = Config["country.api.url"];

export const countryInfo = async () => {
  const response = await axios.get(countryInfoUrl);

  return response;
};

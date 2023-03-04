import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const APIKey = "1c213b08";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

/*
! Sorry about they key, but you can paste yours)
*/
export const gitHubClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
  },
});

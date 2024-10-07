import axios from "axios";

export const api_key = "73a1b53387de651c848c138663debd84";

export const api = axios.create({
   baseURL: "https://api.themoviedb.org/3"
})
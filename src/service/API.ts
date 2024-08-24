import axios from "axios";
import { BASE_API_URL } from "../lib/config";

export const API = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
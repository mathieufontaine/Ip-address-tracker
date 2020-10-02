// require("dotenv").config();
import { injectInfo, injectMap } from "./injectData.js";

const API_KEY = process.env.IPIFY_KEY;

export const searchIP = async () => {
  const input = document.getElementById("input").value;
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${input}`
    );
    const data = await response.json();
    const coordinates = {
      ip: data.ip,
      lng: data.location.lng,
      lat: data.location.lat
    };
    const info = {
      ip: data.ip,
      city: data.location.city,
      postal: data.location.postalCode,
      country: data.location.country,
      timezone: data.location.timezone,
      isp: data.isp
    };
    console.log(coordinates, info);
    injectInfo(info);
    injectMap(coordinates);
  } catch (err) {
    console.log(err);
  }
};

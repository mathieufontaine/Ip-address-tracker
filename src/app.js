require("dotenv").config();

import { searchIP } from "./modules/searchIP.js";

// initialize Map

const MAPBOX_KEY = process.env.MAPBOX_KEY;

export const mymap = L.map("mapid").setView([48.856614, 2.3522219], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_KEY
  }
).addTo(mymap);

// Search IP

const button = document.querySelector(".btn");
button.addEventListener("click", searchIP);

window.onload = function() {
  searchIP();
};

// const app = async () => {
//   document.getElementById("header").innerHTML = Header();
//   document.getElementById("user").innerHTML = await User();
// };

// Init app
// app();

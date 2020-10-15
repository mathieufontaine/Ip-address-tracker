import { mymap } from "../app";

export const injectMap = coordinates => {
  const ip = coordinates.ip;
  const lng = coordinates.lng;
  const lat = coordinates.lat;

  mymap.fitBounds([[lat, lng]]);

  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='46' height='56'><path fill-rule='evenodd' d='M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z'/></svg>";
  const iconUrl = "data:image/svg+xml;base64," + btoa(svg);

  const icon = L.icon({
    iconUrl: iconUrl
  });

  // const marker = L.marker([lat, lng], { icon: icon }).addTo(mymap);
  const marker = new mapboxgl.Marker();
  marker
    .setLngLat([lat, lng])
    .addTo(mymap)
    .bindPopup(`<b>${ip}</b><br>latitute: ${lat}<br>longitute: ${lng}`)
    .openPopup();
};

export const injectInfo = info => {
  const ip = document.querySelector(".ip");
  const location = document.querySelector(".location");
  const timezone = document.querySelector(".timezone");
  const isp = document.querySelector(".isp");

  ip.innerText = info.ip;
  location.innerText = `${info.city}, ${info.postal}, ${info.country}`;
  timezone.innerText = `UTC ${info.timezone}`;
  isp.innerText = info.isp;
};

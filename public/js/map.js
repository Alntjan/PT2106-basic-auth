document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('map script loaded!');
    let mymap = L.map('mapid').setView([55.754093, 37.620407], 13);
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoiYWxudGphbiIsImEiOiJja3Q0dnFyOG0wMm9tMnZwZGk3ajNxNW9xIn0.dAZr3O5vFdiAf-BWZx9etg',
      }
    ).addTo(mymap);
    let marker = L.marker([55.754095, 37.620409]).addTo(mymap);
    marker.bindPopup("<a href='/bored-pokemon/154'>Russian Pokemon</a>");
  },
  false
);

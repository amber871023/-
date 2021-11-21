const mymap = L.map('map').setView([24.6840803,121.772185], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW1iZXJjeXQiLCJhIjoiY2t3NHExeG1nZW1xczJvcGdhZHl4ankzayJ9.zzynZZe72haux4VYvqCDeA' //'your.mapbox.access.token'
}).addTo(mymap);
let marker = L.marker([24.6840803,121.772185]).addTo(mymap);
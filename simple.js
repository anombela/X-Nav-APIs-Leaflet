// JavaScript for simple.html (Leaflet)

$(document).ready(function() {
    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map'); //.setView([40.2838, -3.8215], 15);
    map.locate({setView: true, maxZoom: 16});
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    //para localizarme
    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();

        L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    //si hay error
    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationerror', onLocationError);

    //circulo rojo
    var marker = L.marker([51.5, -0.09]).addTo(map);

    var circle = L.circle([51.508, -0.11], 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);

    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);




    //

    // add a marker in the given location, attach some popup content to it and open the popup
    /*L.marker([40.2838, -3.8215]).addTo(map)
	.bindPopup('<a href="http://www.etsit.urjc.es">ETSIT</a> (<a href="http://www.urjc.es">URJC</a>)')
	.openPopup();*/


    //muestra las coordenadas donde se hace click

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
});
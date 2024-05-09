// Deynner Alexander Sanabria Rojas 20212578064
var map = L.map('main_map').setView([-34.6012424, -58.3861497], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

$.ajax({
	dataType: "json",
	url: "api/bicicletas", success: function(result){
		console.log(result);
		result.bicicletas.forEach(function(bici){
			L.marker(bici.ubicacion,{title: bici.id}).addTo(map);
		})
	}
})
/*
var map = L.map('mainMap');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var zoom = 13;

        console.log("Su posicion: " + lat + ", " + lon);
        map.setView([lat, lon], zoom);

        // Dentro de la función de éxito de getCurrentPosition, realizamos la solicitud AJAX
        $.ajax({
            dataType: "json",
            url: '/api/bicyclesApi',
            success: function(result){
                console.log(result);
                result.bicycles.forEach(function(bicycle){
                    L.marker(bicycle.location, {title: bicycle.id}).addTo(map);
                });
            }
        });
    });
} else {
    console.log("Geolocation is not supported by this browser.");
}

// Autor: Andres Felipe Calderon Mancera */
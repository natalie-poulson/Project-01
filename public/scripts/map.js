// Map and Geolocation
var heritageIcon = L.icon({
    iconUrl: './images/heritage.png',
    iconSize: [40, 45],
})

var legacyIcon = L.icon({
    iconUrl: './images/legacy.png',
    iconSize: [40, 45]
})

var hereIcon = L.icon({
    iconUrl: './images/here.png',
    iconSize: [40, 45]
})

var map = L.map('map').setView([37.773972, -122.431297], 12);

var input = document.getElementById("pac-input");
var autocomplete = new google.maps.places.Autocomplete(input);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibmF0YWxpZXBsc24iLCJhIjoiY2psZm8ybnFnMHl4NDNwcG16eGFmMTdwaCJ9.2xYdBHCpcf5cdap8BvhVgQ'
    }).addTo(map);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    });

    function load_map() {
    map.locate({setView: true, maxZoom: 16});
    function onLocationFound(e) {
        var radius = e.accuracy / 2;
        L.marker(e.latlng, {icon: hereIcon}).addTo(map)
        .bindPopup("You are here").openPopup();
        }
    map.on('locationfound', onLocationFound);
    } 
} else {
    alert("Geolocation API is not supported in your browser.");
};

$('#legacyForm').on('submit', function (e) {
    e.preventDefault();

    var place = autocomplete.getPlace();
        document.getElementById('legacyName').value = place.name;
        document.getElementById('legacyAddress').value = place.vicinity;
        document.getElementById('legacyLat').value = place.geometry.location.lat();
        document.getElementById('legacyLng').value = place.geometry.location.lng();

    map.setView([place.geometry.location.lat(), place.geometry.location.lng()], 16);

    var newLegacy = {
        name: $('#legacyName').val(),
        address: $('#legacyAddress').val(),
        yearOpened: $('#legacyYear').val(),
        lat: $('#legacyLat').val(),
        lon: $('#legacyLng').val()
    }

    $.ajax({
        method: 'POST',
        url:'/api/legacy',
        data:newLegacy,
        success: newLegacySuccess,
        error: newLegacyError
    });
});

window.onload = load_map;

$.ajax({
    method: 'GET',
    url: '/api/heritage',
    success: handleHeritageSuccess,
    error: handleError
});

$.ajax({
    method: 'GET',
    url: '/api/legacy',
    success: handleLegacySuccess,
    error: handleError
});

function handleHeritageSuccess (json) {
    var heritageArray = json.data;
    $.each(heritageArray, function () {
        var popupContent = this.name;
        L.marker([this.coordinates[0], this.coordinates[1]], {icon: heritageIcon}).bindPopup(`<p>${this.name}<br>${this.address}<br>Est.${this.yearOpened}</p>`).openPopup().addTo(map);
    })
};

function handleLegacySuccess (json) {
    var legacyArray = json.data;
    $.each(legacyArray, function () {
        L.marker([this.coordinates[0], this.coordinates[1]], {icon: legacyIcon}).bindPopup(`<p>${this.name}<br>${this.address}<br> Est.${this.yearOpened}</p>`).openPopup().addTo(map);
    })
};

function newLegacySuccess (json) {
    $('#alreadyExists').fadeOut();
    setTimeout(function () {
        $('#exampleModalCenter').modal('toggle');}, 500);
        alert("thank you for adding a legacy to the map!")

    var legacy = json.legacy;
    console.log(legacy)
    L.marker([legacy.coordinates[0], legacy.coordinates[1]], {icon: legacyIcon}).bindPopup(`<p>${legacy.name}<br>${legacy.address}<br>${legacy.yearOpened}</p>`).addTo(map).openPopup()
};

function newLegacyError (json) {

    if (json.status === 401){
        $('#alreadyExists').fadeOut();
        $('#alreadyExists').fadeIn();
    }
}

function handleError(e) {
    console.log('error', e);
}

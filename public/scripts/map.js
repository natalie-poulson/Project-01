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
    navigator.geolocation.getCurrentPosition((position) => {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    });

    load_map = () => {
    map.locate({setView: true, maxZoom: 16});
    onLocationFound = (e) => {
        var radius = e.accuracy / 2;
        L.marker(e.latlng, {icon: hereIcon}).addTo(map)
        .bindPopup("You are here").openPopup();
        }
    map.on('locationfound', onLocationFound);
    } 
} else {
    alert("Geolocation API is not supported in your browser.");
};

$('#legacyForm').on('submit', (e) => {
    e.preventDefault();
    var place = autocomplete.getPlace();
    map.setView([place.geometry.location.lat(), place.geometry.location.lng()], 16);
    var newLegacy = {
        name: place.name,
        address: place.vicinity,
        yearOpened: $('#legacyYear').val(),
        website: place.website,
        lat: place.geometry.location.lat(),
        lon: place.geometry.location.lng()
    }

    $.ajax({
        method: 'POST',
        url:'/api/legacy',
        data:newLegacy,
        success: (json) => {
            $('#alreadyExists').fadeOut();
            $('#exampleModalCenter').modal('toggle');
            alert("thank you for adding a legacy to the map!")
        
            let place = json.legacy;
            L.marker([place.coordinates[0], place.coordinates[1]], {icon: legacyIcon}).bindPopup(`<p><a href="${place.website}" target="_blank">${place.name}</a><br>${place.address}<br>Est. ${place.yearOpened}</p>`).addTo(map).openPopup()
        },
        error:(json) => {
            if (json.status === 401){
                $('#alreadyExists').fadeOut();
                $('#alreadyExists').fadeIn();
            }
        }
    });
});


$.ajax({
    method: 'GET',
    url: '/api/heritage',
    success: (json) => {
        let heritageArray = json.data;

        heritageArray.forEach ((heritage) => {
            let popupContent =(`<p><a href="${heritage.website}" target="_blank">${heritage.name}</a></br>${heritage.address}</br>Est. ${heritage.yearOpened}</br></p>`)
            L.marker([heritage.coordinates[0], heritage.coordinates[1]], {icon: heritageIcon}).bindPopup(popupContent).openPopup().addTo(map);
        })
    },
    error: (e) => {
        console.log('error', e);
    }
});

$.ajax({
    method: 'GET',
    url: '/api/legacy',
    success: (json) => {
        let legacyArray = json.data;

        legacyArray.forEach((legacy) => {
            let legacyContent = (`<p><a href="${legacy.website}" target="_blank">${legacy.name}</a></br>${legacy.address}</br>Est. ${legacy.yearOpened}</br></p>`)
            L.marker([legacy.coordinates[0], legacy.coordinates[1]], {icon: legacyIcon}).bindPopup(legacyContent).openPopup().addTo(map);
        })
    },
    error: (e) => {
        console.log('error', e);
    }
});

$('#logout').on ('click', () => {
    window.location.pathname = '/'
})

window.onload = load_map;

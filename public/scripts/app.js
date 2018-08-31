// Map and Geolocation
if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    });

    var map = L.map('map').setView([37.773972, -122.431297], 12);

    function load_map() {
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibmF0YWxpZXBsc24iLCJhIjoiY2psZm8ybnFnMHl4NDNwcG16eGFmMTdwaCJ9.2xYdBHCpcf5cdap8BvhVgQ'
    }).addTo(map);

    map.locate({setView: true, maxZoom: 16});
    function onLocationFound(e) {
        var radius = e.accuracy / 2;
        L.marker(e.latlng).addTo(map)
        }

    map.on('locationfound', onLocationFound);
} 
} else {
    alert("Geolocation API is not supported in your browser. :(");
};

function addr_search() {
    var inp = document.getElementById("search");

    $.getJSON('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + inp.value, function(data) {
        var items = [];

        $.each(data, function(key, val) {
        items.push(
            "<li><a href='#' onclick='chooseAddr(" +
            val.lat + ", " + val.lon + ");return false;'>" + val.display_name +
            '</a></li>'
        ); 
        var lat = val.lat
        var lon = val.lon

// //create a legacy and add to map
    $('#legacyForm').on('submit', function (e) {
    e.preventDefault();

    var newLegacy = {
        name: $('#legacyName').val(),
        address: $('.my-new-list a').text(),
        yearOpened: $('#legacyYear').val(),
        lat: lat,
        lon: lon
    }
    $.ajax({
        method: 'POST',
        url:'/api/legacy',
        data:newLegacy,
        success: newLegacySuccess,
        error: handleError
    });
});
});

        $('#results').empty();
        if (items.length != 0) {
        $('<p>', { html: "Search results:" }).appendTo('#results');
        $('<ul/>', {
            'class': 'my-new-list',
            html: items.join('')
        }).appendTo('#results');
        } else {
        $('<p>', { html: "No results found" }).appendTo('#results');
        }
    });
}

    function chooseAddr(lat, lng, type) {
        var location = new L.LatLng(lat, lng);
        // console.log(location);
        map.panTo(location);

        if (type == 'city' || type == 'administrative') {
        map.setZoom(11);
        } else {
        map.setZoom(13);
        }
    } 

window.onload = load_map;

// Ajax
// Get all Heritages
$.ajax({
    method: 'GET',
    url: '/api/heritage',
    success: handleSuccess,
    error: handleError
});

function handleSuccess (json) {
    // add heritage restaurant markers to map
    var heritageArray = json.data;
    $.each(heritageArray, function () {
        var popupContent = this.name;
        L.marker([this.coordinates[0], this.coordinates[1]]).bindPopup(`<p>${this.name}<br>${this.address}<br>${this.yearOpened}</p>`).openPopup().addTo(map);
    })
};


function newLegacySuccess (json) {
    var heritage = json;
    // console.log(heritage)
    var popupContent = heritage.name;
    // console.log(popupContent);
    // console.log(heritage.coordinates[1])
    L.marker([heritage.coordinates[0], heritage.coordinates[1]]).bindPopup(`<p>${heritage.name}<br>${heritage.address}<br>${heritage.yearOpened}</p>`).openPopup().addTo(map);
}

///Error
function handleError(e) {
    console.log('error', e);
};

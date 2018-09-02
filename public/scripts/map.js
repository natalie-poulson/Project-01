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
        .bindPopup("You are here").openPopup();
        }

    map.on('locationfound', onLocationFound);
} 
} else {
    alert("Geolocation API is not supported in your browser. :(");
};

// Geocoding
function addr_search() {
    var inp = document.getElementById("search");

    $.getJSON('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + inp.value, function(data) {
        var items = [];

        $.each(data, function(key, val) {
            console.log(val)
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
        address: $('#legacyAddress').val(),
        yearOpened: $('#legacyYear').val(),
        lat: lat,
        lon: lon
    }
    console.log(newLegacy);
    $.ajax({
        method: 'POST',
        url:'/api/legacy',
        data:newLegacy,
        success: newLegacySuccess,
        error: handleError
    });
    $('#exampleModalCenter').modal('toggle'); //or  $('#IDModal').modal('hide');
    return false
});
});

        $('#results').empty();
        if (items.length != 0) {
            console.log(items);
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
        map.panTo(location) 
        L.marker(location).addTo(map);

        if (type == 'city' || type == 'administrative') {
        map.setZoom(13);
        } else {
        map.setZoom(18);
        }
    } 

    window.onload = load_map;

// Get all Heritages
$.ajax({
    method: 'GET',
    url: '/api/heritage',
    success: handleHeritageSuccess,
    error: handleError
});

//Get all legacies
$.ajax({
    method: 'GET',
    url: '/api/legacy',
    success: handleLegacySuccess,
    error: handleError
});

    function handleHeritageSuccess (json) {
        // add heritage restaurant markers to map
        var heritageArray = json.data;
        $.each(heritageArray, function () {
            var popupContent = this.name;
            L.marker([this.coordinates[0], this.coordinates[1]]).bindPopup(`<p>${this.name}<br>${this.address}<br>Est.${this.yearOpened}</p>`).openPopup().addTo(map);
        })
    };

    function handleLegacySuccess (json) {
        var legacyArray = json.data;
        $.each(legacyArray, function () {
            L.marker([this.coordinates[0], this.coordinates[1]]).bindPopup(`<p>${this.name}<br>${this.address}<br> Est.${this.yearOpened}</p>`).openPopup().addTo(map);
        })
    };
    
    function newLegacySuccess (json) {
        var legacy = json;
        var popupContent = legacy.name;
        L.marker([legacy.coordinates[0], legacy.coordinates[1]]).bindPopup(`<p>${legacy.name}<br>${legacy.address}<br>${legacy.yearOpened}</p>`).openPopup().addTo(map);
    }

///Error
function handleError(e) {
    console.log('error', e);
};

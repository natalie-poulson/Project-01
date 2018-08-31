// Map and Geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    });
    
    var map = L.map('map').setView([37.773972, -122.431297], 12);

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
} else {
    alert("Geolocation API is not supported in your browser. :(");
}

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

///Error
function handleError(e) {
    console.log('error', e);
};

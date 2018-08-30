console.log("hello");

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
          .bindPopup("You are here").openPopup();
      L.circle(e.latlng, radius).addTo(map);
    }
    map.on('locationfound', onLocationFound);
}else {
    alert("Geolocation API is not supported in your browser. :(");
}

// Ajax
///////////////Get all ///////
$.ajax({
    method: 'GET',
    url: '/api/legacy',
    success: handleSuccess,
    error: handleError
});
function handleSuccess (json) {
    var legacies = json.data
    legacies.forEach( legacy => {
        $('#legacyTarget').append(`<li><p id="name">${legacy.name}</p><p id="address">${legacy.address}<p><p id="year">opened ${legacy.yearOpened}</p><button type="update" value="update" class="update" data-id=${legacy._id}>Update</button> <button type="delete" value="delete" class="delete" data-id=${legacy._id}>Delete</button></li>`);
    });
};

///////////Error
function handleError(e) {
    console.log('error', e);
    $('#legacyTarget').text('Failed to laod books, is the server working?');
}

// Map and Geolocation
var map = L.map('map').setView([37.773972, -122.431297], 12);

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
    var hereIcon = L.icon({
        iconUrl: './images/here.png',
        iconSize: [40, 45],
        // iconAnchor: [55, 70]
    })

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

// geocoding google places api
// (function () {
//     L.GPlaceAutocomplete = {};

//     L.Control.GPlaceAutocomplete = L.Control.extend({
//         options: {
//             position: "topright",
//             prepend: true,
//             collapsed_mode: false,
//             autocomplete_options: {}
//         },

//         collapsedModeIsExpanded: true,

//         autocomplete: null,
//         icon: null,
//         searchBox: null,

//         initialize: function (options) {
//             if (options) {
//                 L.Util.setOptions(this, options);
//             }
//             if (!this.options.callback) {
//                 this.options.callback = this.onLocationComplete;
//             }
//             this._buildContainer();
//         },

//         _buildContainer: function () {

//             // build structure
//             this.container = L.DomUtil.create("div", "leaflet-gac-container leaflet-bar");
//             var searchWrapper = L.DomUtil.create("div", "leaflet-gac-wrapper");
//             this.searchBox = L.DomUtil.create("input", "leaflet-gac-control");
//             this.autocomplete = new google.maps.places.Autocomplete(this.searchBox, this.options.autocomplete_options);

//             // if collapse mode set - create icon and register events
//             if (this.options.collapsed_mode) {
//                 this.collapsedModeIsExpanded = false;

//                 this.icon = L.DomUtil.create("div", "leaflet-gac-search-btn");
//                 L.DomEvent
//                     .on(this.icon, "click", this._showSearchBar, this);

//                 this.icon.appendChild(
//                     L.DomUtil.create("div", "leaflet-gac-search-icon")
//                 );

//                 searchWrapper.appendChild(
//                     this.icon
//                 );
//                 L.DomUtil.addClass(this.searchBox, "leaflet-gac-hidden");
//             }

//             searchWrapper.appendChild(
//                 this.searchBox
//             );
//             // create and bind autocomplete
//             this.container.appendChild(
//                 searchWrapper
//             );

//         },

//         //***
//         // Collapse mode callbacks
//         //***

//         _showSearchBar: function () {
//             this._toggleSearch(true);
//         },

//         _hideSearchBar: function () {
//             // if element is expanded, we need to change expanded flag and call collapse handler
//             if (this.collapsedModeIsExpanded) {
//                 this._toggleSearch(false);
//             }
//         },

//         _toggleSearch: function (shouldDisplaySearch) {
//             if (shouldDisplaySearch) {
//                 L.DomUtil.removeClass(this.searchBox, "leaflet-gac-hidden");
//                 L.DomUtil.addClass(this.icon, "leaflet-gac-hidden");
//                 this.searchBox.focus();
//             } else {
//                 L.DomUtil.addClass(this.searchBox, "leaflet-gac-hidden");
//                 L.DomUtil.removeClass(this.icon, "leaflet-gac-hidden");
//             }
//             this.collapsedModeIsExpanded = shouldDisplaySearch;
//         },

//         //***
//         // Default success callback
//         //***

//         onLocationComplete: function (place, map) {
//             // default callback
//             if (!place.geometry) {
//                 alert("Location not found");
//                 return;
//             }
//             map.panTo([
//                 place.geometry.location.lat(),
//                 place.geometry.location.lng()
//             ]);

//         },

//         onAdd: function () {
//             // stop propagation of click events
//             L.DomEvent.addListener(this.container, 'click', L.DomEvent.stop);
//             L.DomEvent.disableClickPropagation(this.container);
//             if (this.options.collapsed_mode) {
//                 // if collapse mode - register handler
//                 this._map.on('dragstart click', this._hideSearchBar, this);
//             }
//             return this.container;
//         },

//         addTo: function (map) {
//             this._map = map;

//             var container = this._container = this.onAdd(map),
//                 pos = this.options.position,
//                 corner = map._controlCorners[pos];

//             L.DomUtil.addClass(container, 'leaflet-control');
//             if (this.options.prepend) {
//                 corner.insertBefore(container, corner.firstChild);
//             } else {
//                 corner.appendChild(container)
//             }

//             var callback = this.options.callback;
//             var _this = this;
//             google.maps.event.addListener(this.autocomplete, "place_changed", function () {
//                 callback(_this.autocomplete.getPlace(), map);
//             });

//             return this;
//         }
//     });
// })();


// new L.Control.GPlaceAutocomplete({
//     callback: function(place){
//         var loc = place.geometry.location;
//         map.panTo([loc.lat(), loc.lng()]);
//         map.setZoom(18);
//     }
// }).addTo(map);

// Geocoding w leaflet
// function addr_search() {
//     var inp = document.getElementById("search");

//     $.getJSON('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + inp.value, function(data) {
//         var items = [];

//         $.each(data, function(key, val) {
//             console.log(val)
//         items.push(
//             "<li><a href='#' onclick='chooseAddr(" +
//             val.lat + ", " + val.lon + ");return false;'>" + val.display_name +
//             '</a></li>'
//         ); 
//         var lat = val.lat
//         var lon = val.lon


    var input = document.getElementById("pac-input");
    var autocomplete = new google.maps.places.Autocomplete(input);



    // var autocomplete = new google.maps.places.Autocomplete(input, {types: [('cities')]})
    // google.maps.event.addListener(autocomplete, 'place_changed', 
    // function () {
    //     var place = autocomplete.getPlace();
    // });

// //create a legacy and add to map

    
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        document.getElementById('legacyName').value = place.name;
        document.getElementById('legacyAddress').value = place.vicinity;
        document.getElementById('legacyLat').value = place.geometry.location.lat();
        document.getElementById('legacyLng').value = place.geometry.location.lng();
    
        $('#legacyForm').on('submit', function (e) {
            e.preventDefault();
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
                success: handleLegacySuccess,
                error: newLegacyError
            });
            $('#exampleModalCenter').modal('toggle'); //or  $('#IDModal').modal('hide');
            return false
    });

//         $('#results').empty();
//         if (items.length != 0) {
//             console.log(items);
//         $('<p>', { html: "Search results:" }).appendTo('#results');
//         $('<ul/>', {
//             'class': 'my-new-list',
//             html: items.join('')
//         }).appendTo('#results');
//         } else {
//         $('<p>', { html: "No results found" }).appendTo('#results');
//         }
});

//         $('#results').empty();
//         if (items.length != 0) {
//             console.log(items);
//         $('<p>', { html: "Search results:" }).appendTo('#results');
//         $('<ul/>', {
//             'class': 'my-new-list',
//             html: items.join('')
//         }).appendTo('#results');
//         } else {
//         $('<p>', { html: "No results found" }).appendTo('#results');
//         }
//     });
// }

    // function chooseAddr(lat, lng, type) {
    //     var location = new L.LatLng(lat, lng);
    //     // console.log(location);
    //     map.panTo(location) 
    //     L.marker(location, {icon: legacyIcon}).addTo(map);

    //     if (type == 'city' || type == 'administrative') {
    //     map.setZoom(13);
    //     } else {
    //     map.setZoom(18);
    //     }

//         if (type == 'city' || type == 'administrative') {
//         map.setZoom(13);
//         } else {
//         map.setZoom(18);
//         }

//         $('#results').on('click', function() {
//             $('#results').hide();
//         })
//         $('#searchBtn').on('click', function() {
//             $('#results').show();
//         })
//     } 

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

    let heritageIcon = L.icon({
        iconUrl: './images/heritage.png',
        iconSize: [40, 45],
        iconAnchor: [20, 40]
    })

    let heritageItems = [];
    function handleHeritageSuccess (json) {
        // add heritage restaurant markers to map
        let heritageArray = json.data;
        $.each(heritageArray, function () {
            let popupContent = (`<p>${this.name}</br>${this.address}</br>Est. ${this.yearOpened}</br></p>`)
            L.marker([this.coordinates[0], this.coordinates[1]], {icon: heritageIcon}).bindPopup(`<p>${this.name}<br>${this.address}<br>Est. ${this.yearOpened}</p>`).openPopup().addTo(map);
            heritageItems.push(popupContent)
        })
        $('#list').on('click', function() {
            for(let i = 0; i < heritageItems.length; i++) {
                $('#heritageList').append("<li>"+ heritageItems[i]+ "</li>");}
                $('#heritageList').show();
                $('#map').hide();
            })
        $('#mapToggle').on('click', function () {
            $('#map').show();
            $('#heritageList').hide();
        })    

    };

    let legacyIcon = L.icon({
        iconUrl: './images/legacy.png',
        iconSize: [40, 45],
        iconAnchor: [20, 40]
    })

    let legacyItems = [];
    function handleLegacySuccess (json) {
        let legacyArray = json.data;
        $.each(legacyArray, function () {
            let legacyContent = (`<p>${this.name}</br>${this.address}</br>Est. ${this.yearOpened}</br></p>`)
            L.marker([this.coordinates[0], this.coordinates[1]], {icon: legacyIcon}).bindPopup(`<p>${this.name}<br>${this.address}<br>Est. ${this.yearOpened}</p>`).openPopup().addTo(map);
            legacyItems.push(legacyContent)
        })
        console.log(legacyItems)

        $('#list').on('click', function() {
            for(let i = 0; i < legacyItems.length; i++) {
                $('#heritageList').append("<li>"+ legacyItems[i]+ "</li>");}
                $('#heritageList').show();
                $('#map').hide();
            })
        $('#mapToggle').on('click', function () {
            $('#map').show();
            $('#heritageList').hide();
        })   
    };
    
    // function newLegacySuccess (json) {
    //     var legacy = json;
    //     var popupContent = legacy.name;
    //     L.marker([legacy.coordinates[0], legacy.coordinates[1]], {icon: legacyIcon}).bindPopup(`<p>${legacy.name}<br>${legacy.address}<br>Est. ${legacy.yearOpened}</p>`).openPopup().addTo(map);
    // }

    function newLegacyError (json) {
        console.log(json)
        // $('.modal-body input').each(function () {
        //     if ( $(this).val().length === 0) {
        //         $(this).siblings().fadeIn(1000);
        //     }
        //     if ( $(this).val().length !== 0) {
        //         $(this).siblings().fadeOut(200);
        //     }
        // });
    }



///Error
function handleError(e) {
    console.log('error', e);
}

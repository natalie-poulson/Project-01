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

localStorage.length > 0 ? console.log(localStorage) : console.log('no local storage');

let loggedIn ;
let user ;

checkForLogin();

$('#formSignUp').on('submit', submitSignup)
$('#formLogin').on('submit', submitLogin)

function checkForLogin(){
    if(localStorage.length > 0){
  
      let jwt = localStorage.token
      $.ajax({
        type: "POST",
        url: '/verify',  
        beforeSend: function (xhr) {   
            xhr.setRequestHeader("Authorization", 'Bearer '+ localStorage.token);
        }
      }).done(function (response) {
        console.log(response)
        user = { email: response.email, _id: response._id }
        console.log("you can access variable user: " , user)
          $('#message').text(`Welcome, ${ response.email || response.result.email } `)
      }).fail(function (err) {
          console.log('DOH!');
      });
      $('#yesToken').toggleClass('show');
    } else {
      $('#noToken').toggleClass('show');
    }
  }

function submitSignup(e){
    console.log('IM SIGNING UP FOR A THING')
    e.preventDefault();
    let userData = $(this).serialize()
    $.ajax({
      method: "POST",
      url: "/signup",
      data: userData,
      error: function signupError(e1,e2,e3) {
        console.log(e1);
        console.log(e2);
        console.log(e3);
      },
      success: function signupSuccess(json) {
        console.log(json);
        user = {email: json.email, _id: json._id}
        localStorage.token = json.signedJwt;
        $('#formSignUp').toggleClass('show');
        $('#noToken').toggleClass('show');
        checkForLogin();
  
      }
  
    })
  }

  function submitLogin(e){
    e.preventDefault();
    console.log("LOGIN FORM SUBMITTED")
    let userData = $(this).serialize()
    console.log("LOGIN: ", userData)
    $.ajax({
      method: "POST",
      url: "/login",
      data: userData,
    }).done(function loginSuccess(json) {
      console.log("LOG IN SUCCESSFUL")
      console.log(json);
      localStorage.token = json.token;
      $('#noToken').toggleClass('show')
      $('#formLogin').toggleClass('show')
      checkForLogin();
    }).fail(function loginError(e1,e2,e3) {
      console.log(e2);
    })
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



// on submit 

// localStorage.length > 0 ? console.log(localStorage) : console.log('no local storage');

// let loggedIn ;
// let user ;

// checkForLogin();

// $('#formSignUp').on('submit', submitSignup)
// $('#formLogin').on('submit', submitLogin)

// function checkForLogin(){
//     if(localStorage.length > 0){
//       let jwt = localStorage.token
//       $.ajax({
//         type: "POST",
//         url: '/verify',  
//         beforeSend: function (xhr) {   
//             xhr.setRequestHeader("Authorization", 'Bearer '+ localStorage.token);
//         }
//       }).done(function (response) {
//         console.log(response)
//         user = { email: response.email, _id: response._id }
//         console.log("you can access variable user: " , user)
//           $('#message').text(`Welcome, ${ response.email || response.result.email } `)
//       }).fail(function (err) {
//           console.log('DOH!');
//       });
//       $('#yesToken').toggleClass('show');
//     } else {
//       $('#noToken').toggleClass('show');
//     }
//   }

// function submitSignup(e){
//     console.log('IM SIGNING UP FOR A THING')
//     e.preventDefault();
//     let userData = $(this).serialize()
//     $.ajax({
//       method: "POST",
//       url: "/signup",
//       data: userData,
//       error: function signupError(e1,e2,e3) {
//         console.log(e1);
//         console.log(e2);
//         console.log(e3);
//       },
//       success: function signupSuccess(json) {
//         console.log(json);
//         user = {email: json.email, _id: json._id}
//         localStorage.token = json.signedJwt;
//         $('#formSignUp').toggleClass('show');
//         $('#noToken').toggleClass('show');
//         checkForLogin();
  
//       }
  
//     })
//   }

//   function submitLogin(e){
//     e.preventDefault();
//     console.log("LOGIN FORM SUBMITTED")
//     let userData = $(this).serialize()
//     console.log("LOGIN: ", userData)
//     $.ajax({
//       method: "POST",
//       url: "/login",
//       data: userData,
//     }).done(function loginSuccess(json) {
//       console.log("LOG IN SUCCESSFUL")
//       console.log(json);
//       localStorage.token = json.token;
//       $('#noToken').toggleClass('show')
//       $('#formLogin').toggleClass('show')
//       checkForLogin();
//     }).fail(function loginError(e1,e2,e3) {
//       console.log(e2);
//     })
//   }


// Ajax




//login 
$('#formLogin'). on ('submit', function (e) {
    e.preventDefault();
    console.log('hi');
})

// signup page
$('#formSignUp'). on ('submit', function (e) {
    e.preventDefault();
    var newUser = {
        name: $('#signUpName').val(),
        email: $('#signUpEmail').val(),
        password: $('#signUpPassword').val(),
    }
    console.log(newUser);
    
    $.ajax({
        method: 'POST',
        url:'/api/signup',
        data:newUser,
        success:signUpSuccess,
        error: handleError
    });
});

function signUpSuccess (json) {
    console.log(json);
    window.location.pathname = '/map'
}


///Error
function handleError(e) {
    console.log('error', e);
};


// Ajax
//login 
$('#formLogin'). on ('submit', function (e) {
    e.preventDefault();
    console.log($(this))   
    var user = {
        email:$('#loginEmail').val(),
        password: $('#loginPassword').val()
    }
    $.ajax({
        method: 'POST',
        url:'/api/login',
        data:user,
        success:loginSuccess,
        error: loginError
    });
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
        error: signUpError
    });
});

function signUpError (json) {
    console.log (json)
    $('#formSignUp input').each(function () {
    if ( $(this).val().length === 0) {
        $(this).siblings().fadeIn(1000);
        return;
    }
    if ( $(this).val().length !== 0) {
        $(this).siblings().fadeOut(200);
        return;
    }
    if ($(this).attr('type') === 'email') {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValidEmailAddress = re.test($(this).val());
        if (!isValidEmailAddress) {
            $(this).siblings('.error-message').text('Please enter a valid email address.').fadeIn(1000);
            return;
        }
    }
});
};

function loginSuccess (json) {
    console.log(json)
    $('main p').first('.error-message').fadeOut();
    setTimeout(function () {
        window.location.pathname = '/map';}, 500);
}   

function loginError (json) {
    console.log(json)
    $('main p').first('.error-message').fadeOut(200);
    $('main p').first('.error-message').fadeIn(500);
}

function signUpSuccess (json) {
    console.log(json);
    $('.modal-body .error-message').fadeOut(500);
    setTimeout(function() { alert("Thank you for creating an account with us"); }, 1000);
    setTimeout(function () {window.location.pathname = '/map';}, 1500);
}

///Error
function handleError(e) {
    console.log('error', e);
};


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


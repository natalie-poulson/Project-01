// On login, Ajax post request
$('#formLogin'). on ('submit', function (e) {
    e.preventDefault();
    var user = {
        email:$('#loginEmail').val(),
        password: $('#loginPassword').val()
    };
    $.ajax({
        method: 'POST',
        url:'/api/login',
        data:user,
        success:loginSuccess,
        error: loginError
    });
});

// On signup, Ajax post request
$('#formSignUp'). on ('submit', function (e) {
    e.preventDefault();
    var newUser = {
        name: $('#signUpName').val(),
        email: $('#signUpEmail').val(),
        password: $('#signUpPassword').val(),
    };
    $.ajax({
        method: 'POST',
        url:'/api/signup',
        data:newUser,
        success:signUpSuccess,
        error: signUpError
    });
});

// On logout, redirect to homepage
$('#logout').on ('click', function () {
window.location.pathname = '/'
})

// Success and Error functions
function signUpError (json) {
    $('#formSignUp input').each(function () {
        $('#duplicateMessage').fadeOut();
        if ( $(this).val().length === 0) {
            $('#duplicateMessage').fadeOut();
            return;
        }
        if ( $(this).val().length !== 0) {
            $('#duplicateMessage').fadeOut();
            return;
        }
    });
        if (json.status === 500){
            $('#duplicateMessage').fadeOut();
            $('#emailValidation').fadeIn().text('Please enter a valid email address.');
        }
        if (json.status === 409){
            $('#duplicateMessage').fadeOut();
            $('#duplicateMessage').fadeIn();
        }
};

function loginSuccess (json) {
    $('#incorrect').fadeOut();
    setTimeout(function () {
        window.location.pathname = '/map';}, 500);
}   

function loginError (json) {
    $('#incorrect').fadeOut(200);
    $('#incorrect').fadeIn(500);
        $('#incorrect').css('display', 'flex');
}

function signUpSuccess (json) {
    $('#duplicateMessage').fadeOut();
    setTimeout(function() { alert("User created. Thanks for creating an account with us."); }, 1000);
    setTimeout(function () {window.location.pathname = '/map';}, 1500);
}

function handleError(e) {
    console.log('error:', e);
};


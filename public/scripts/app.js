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

$('#formSignUp'). on ('submit', function (e) {
    e.preventDefault();
    var newUser = {
        name: $('#signUpName').val(),
        email: $('#signUpEmail').val(),
        password: $('#signUpPassword').val(),
    }
    
    $.ajax({
        method: 'POST',
        url:'/api/signup',
        data:newUser,
        success:signUpSuccess,
        error: signUpError
    });
});

function signUpError (json) {
    $('#formSignUp input').each(function () {
    if ( $(this).val().length === 0) {
        $(this).siblings().fadeIn(1000);
        return;
    }
    if ( $(this).val().length !== 0) {
        $(this).siblings().fadeOut(200);
        return;
    }
});
    if (json.status === 500){
        $('#emailValidation').fadeIn().text('Please enter a valid email address.');
    }
    if (json.status === 409){
        $('#duplicateMessage').fadeOut();
        $('#duplicateMessage').fadeIn();
    }
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
    setTimeout(function() { alert("User created. Thanks for creating an account with us."); }, 1000);
    setTimeout(function () {window.location.pathname = '/map';}, 1500);
}

function handleError(e) {
    console.log('error', e);
};

$('#logout').on ('click', function () {
    window.location.pathname = '/'
})


$('#formLogin'). on ('submit', (e) => {
    e.preventDefault();

    console.log($('#formLogin').serialize())
    $.ajax({
        method: 'POST',
        url:'/api/login',
        data: $('#formLogin').serialize(),
        success:loginSuccess,
        error: loginError
    });
})

$('#formSignUp'). on ('submit', (e) => {
    e.preventDefault();

    $.ajax({
        method: 'POST',
        url:'/api/signup',
        data:$('#formSignUp').serialize(),
        success:signUpSuccess,
        error: signUpError
    });
});

function signUpError (json) {
    $('#formSignUp input').each(function () {
    if ( $(this).val().length === 0) {
        $('#duplicateMessage').fadeOut();
        $(this).siblings().fadeIn(1000);
        return;
    }
    if ( $(this).val().length !== 0) {
        $('#duplicateMessage').fadeOut();
        $(this).siblings().fadeOut(200);
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
    $('main p').first('.error-message').fadeOut();
    window.location.pathname = '/map'
}   

function loginError (json) {
    console.log(json)
    $('main p').first('.error-message').fadeOut();
    $('main p').first('.error-message').fadeIn();
    $('main p').css('display', 'flex');
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


$('#formLogin'). on ('submit', (e) => {
    e.preventDefault();
    $.ajax({
        method: 'POST',
        url:'/api/login',
        data: $('#formLogin').serialize(),
        success: (json) => {
            $('main p').first('.error-message').fadeOut();
            window.location.pathname = '/map'
            },
        error: (json) =>  {
            $('main p').first('.error-message').fadeOut();
            $('main p').first('.error-message').fadeIn();
            $('main p').css('display', 'flex');
        }
    });
})

$('#formSignUp'). on ('submit', (e) => {
    e.preventDefault();
    $.ajax({
        method: 'POST',
        url:'/api/signup',
        data:$('#formSignUp').serialize(),
        success: (json) => {
            $('.modal-body .error-message').fadeOut(500);
            setTimeout(function() { alert("User created. Thanks for creating an account with us."); }, 1000);
            setTimeout(function () {window.location.pathname = '/map';}, 1500);
        },
        error: (json) => {
            if (json.status === 409){
                $('#duplicateMessage').fadeOut();
                $('#duplicateMessage').fadeIn();
            }
        }
    });
});

$('#logout').on ('click', () => {
    window.location.pathname = '/'
})


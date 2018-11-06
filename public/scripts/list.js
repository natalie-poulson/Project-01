$.ajax({
    method: 'GET',
    url: '/api/heritage',
    success: (json) => {
        let heritageArray = json.data;

        heritageArray.forEach ((heritage) => { 
            $('#heritageList').append(`<li>
            <p><a href="${heritage.website}">${heritage.name}</a></p>
            <p>${heritage.address}</p>
            <p>Year est: ${heritage.yearOpened}</p>
            </li>`);
        })
    },
    error: (e) => {
        console.log('error', e);
    }
});

$.ajax({
    method: 'GET',
    url: '/api/legacy',
    success: (json) => {
        let legacyArray = json.data;

        legacyArray.forEach ((legacy) => {
            $('#legacyList').append(`<li>
            <p><a href="${legacy.website}">${legacy.name}</a></p>
            <p>${legacy.address}</p>
            <p>Year est: ${legacy.yearOpened}</p>
            </li>`);
        })
    },
    error: (e) => {
        console.log('error', e);
    }
});


$('#logout').on ('click', () => {
    window.location.pathname = '/'
})
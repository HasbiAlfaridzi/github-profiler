

//========================================================
//Menulis Function di Javascript
/*
    function namaFungsi (param) {
        console.log('fungsi ini dipanggil' + param)
    }

    Call ?
    namaFungsi(param)
*/

/*
    let namaFungsi = function () {
        console.log('fungsi ini dipanggil')
    }

    Call ?
    namaFungsi()
*/

/*
    let namaFungsi = () => {
        console.log('fungsi ini dipanggil')
    }

    Call ?
    namaFungsi()
*/

//=========================================================

let https = require('https')

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/yofri',
    method: 'GET',
    headers: {
        'user-agent': 'nodejs'
    }
}


let request = https.request(options, (result) => {
    console.log('Got response:', result.statusCode)
})

request.end()

request.on('error', (e) => {
    console.error(e)
})


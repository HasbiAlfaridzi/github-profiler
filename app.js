

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


//[*] Connect to Github API
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

/*
let request = https.request(options, (response) => {
    console.log('Got response:', response.statusCode)
})

request.end()

request.on('error', (e) => {
    console.error(e)
})
*/

//[*] Read the data
/*
let request = https.request(options, (response) => {
    let body = ''
    response.on('data', (data) => {
        body = body + data
    })
    response.on('end', () => {
        console.log(body)
    })
})

request.end()

request.on('error', (e) => {
    console.error(e)
})
*/

//[*] Parse the data
let request = https.request(options, (response) => {
    let body = ''
    response.on('data', (data) => {
        body = body + data
    })
    response.on('end', () => {
        //Convert String to JSON\
        let profile = JSON.parse(body)
        console.log(profile.avatar_url)
    })

})

request.end()

request.on('error', (e) => {
    console.error(e)
})

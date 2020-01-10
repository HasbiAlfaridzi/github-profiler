let profile = require('./profile')

// let profiles = ['rizafahmi', 'yofri', 'ronishak']
// profiles.map(user => {
//     return profile.get(user)
// })

let profiles = process.argv.slice(2)
profiles.map(profile.get)
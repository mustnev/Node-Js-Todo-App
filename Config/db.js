const mongoose = require('mongoose')
const mongoDB = 'mongodb://localhost:27017/todoApp'

module.exports = async function(){
    await mongoose.connect(mongoDB, function(err) {
        if (err) {
            console.log('mongoDB bağlantı hatası : ' + err)
        } else {
            console.log('mongoDB bağlandı ...')
        }
    })
}
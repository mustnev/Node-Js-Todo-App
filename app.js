const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const router = require('./Routes/todoRouter')
const config = require('./Config/db')
const port = 5000
const app = express()

config()

// View Engine ve layouts tanımlama
app.set('view engine','ejs')
app.set('views','./Views')
app.use(expressLayouts)

//Body-parser tanımlama
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Public klasörü erişime açma
app.use(express.static('Public'))


app.use('/', router)

app.listen(port, (err) => {
    if(err){
        console.log('hata')
    }else{
    console.log('Sunucu Çalışıyor Port http://localhost:%s', port)
    }
})

const express = require('express')
const requestController = require('./controllers/requestController')
const app = express()


app.set('view engine', 'ejs')
app.set('views', ('../views' ))
app.use(express.static('../public'))

requestController(app)

let PORT = process.env.PORT || 3000;
app.listen(3000)
console.log('listening to port 3000')



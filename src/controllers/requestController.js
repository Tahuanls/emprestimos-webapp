const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ChaveController = (require('./chavesController'))
const ejs = require('ejs')

const urlencodedParser = bodyParser.urlencoded({extended: false})


// Router
module.exports = function(app){

    app.get('/chaves', function(req, res){
        ChaveController.add({chave: 10, nome: "Thauan Lopes", turma: '601'});
        res.render('index.ejs');
    })

    app.post('/chaves', urlencodedParser, function(req, res){
        console.log(req.body)
        res.json({nome: 'não thauan'})
    })

}
// handle express app requests
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// connect to mongoose
/* const connectionString = 'mongodb+srv://thauanDio:Soeusei94@katakuricluster-iwocg.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We\'re connected')
}); */

const urlencodedParser = bodyParser.urlencoded({extended: false})

let data = [{nome: 'Thauan Lopes de Souza', chave: '10'}, {nome: 'Andrielle Coutinho', chave: '20'}, {nome: 'Diogo Oliveira', chave: '30'}]

module.exports = function(app){

    app.get('/todo', function(req, res){
        res.render('todo', {todos: data})
    })

    app.post('/todo', urlencodedParser, function(req, res){

        console.log(req.body)
        data.push({nome: req.body.nome, chave: req.body.chave});
        res.json(data)
    })

    app.delete('/todo/:chave', function(req, res){
        /* data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !==  req.params.item;
        }) */
        console.log('received delete request.')
        data = data.filter(function(todo){
            return todo.chave !== req.params.chave;
            
        })
        res.json(data)

    })

}
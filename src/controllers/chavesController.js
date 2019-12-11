let Chave = require('../Chave')
let chaves = [];

module.exports = class ChaveController {

    constructor(){
        // talvez conectar o banco de dados aqui
    }

    static add({chave, nome, turma}) {
        chaves.push(new Chave(chave, nome, turma));
        console.log('Chave: ' + chave + ' adicionada.') ;
    }

    altera(oldChave, newChave){
        
    }

    deleta(chave){

    }
}

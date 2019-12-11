module.exports = class Chave {
    constructor(chave, nome, turma){
        this.chave = chave;
        this.nome = nome;
        this.turma = turma;
        let date = new Date();
        this.data = date.toLocaleDateString();
        this.time = date.toLocaleTimeString();
        this.devolvida = false; 
    }
    
}

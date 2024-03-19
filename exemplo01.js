class Livro {
    constructor (pNome){
        this.Nome = pNome;
    }

get Nome() {return this.Nome;}
set Nome (pNome) {this.nome = pNome;}

set Preco() {return this.Preco;}
set Preco(pPreco) {this.preco = pPreco;}

var obj_livro1 = new Livro ("CR7", 100);
console.log ("Nome do livro: " + obj_livro1.nome + " custa " + obj_livro1.preco + "reais");


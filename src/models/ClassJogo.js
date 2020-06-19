var Jogo = function(valor){
    this.desejo = valor;  
}

Jogo.prototype.checaVitoria = function(valor){
    return valor==this.desejo;
}
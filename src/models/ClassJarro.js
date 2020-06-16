var Jarro = function(valor){
    this.qntAtualAgua = 0;
    this.qntMaxAgua = valor;
}


Jarro.prototype.transfereAgua = function(jarro){
    //verifica quanto de agua está sobrando no jarro que veio como parametro
    var espacoSobrando = jarro.getAguaMax - jarro.getAguaAtual;
    var auxiliar;
    if(espacoSobrando > 0){
        //verifica se o espaço sobrando é menor que a quantidade de agua atual;
        if(this.getAguaAtual >= espacoSobrando ){
            auxiliar = this.getAguaAtual - espacoSobrando;
            jarro.setAguaAtual = jarro.getAguaMax;
            this.setAguaAtual = auxiliar;
        }else{
            jarro.setAguaAtual =  jarro.getAguaAtual + this.getAguaAtual;
            this.setAguaAtual = 0;
        }
    }
};



// a agua do jarro nao pode ultrapassar a quantidade maxima de agua que cabe nele.






//todos os atributos, precisam ter metodos get e set

Jarro.prototype.__defineSetter__('setAguaAtual',function(numero){
    this.qntAtualAgua = numero;
});

Jarro.prototype.__defineGetter__('getAguaAtual',function(){
    return this.qntAtualAgua;
});

Jarro.prototype.__defineGetter__('getAguaMax',function(){
    return this.qntMaxAgua;
});

var jarro1 = new Jarro(5);
var jarro2 = new Jarro(3);


// toda classe tem metodos SET e GET
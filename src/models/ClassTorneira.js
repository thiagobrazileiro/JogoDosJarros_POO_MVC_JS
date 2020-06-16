var Torneira = function(){

}

Torneira.prototype.encher = function(jarro){
    jarro.setAguaAtual = jarro.getAguaMax;
};

var torneira = new Torneira();
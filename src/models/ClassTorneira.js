var Torneira = function(){

}

Torneira.prototype.encher = function(jarro){
    jarro.qntAtualAgua = jarro.qntMaxAgua;
};

var torneira = new Torneira();
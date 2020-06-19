
window.onload = function(){

}


function iniciarGame(){
    let level = document.getElementById('Level');
    let desejo =0;

    if(level.value == 1){
        jarro1 = new Jarro(5);
        jarro2 = new Jarro(3);
        jogo = new Jogo(4);
        desejo = 4;
    }else if(level.value == 2){
        jarro1 = new Jarro(8);
        jarro2 = new Jarro(5);
        jogo = new Jogo(4);
        desejo = 4;
    }else if(level.value == 3){
        jarro1 = new Jarro(11);
        jarro2 = new Jarro(6);
        jogo = new Jogo(8);
        desejo = 8;
    }else if(level.value == 4){
        jarro1 = new Jarro(11);
        jarro2 = new Jarro(7);
        jogo = new Jogo(5);
        desejo = 5;
    }else if(level.value == 5){
        jarro1 = new Jarro(11);
        jarro2 = new Jarro(9);
        jogo = new Jogo(8);
        desejo = 8;
    }else{
        jarro1 = new Jarro(12);
        jarro2 = new Jarro(11);
        jogo = new Jogo(6);
        desejo = 6;
    }

    document.getElementById("ENVELOPE").style.display = 'flex';
    document.getElementById("Inicio").style.display = 'none';
    document.getElementById("Titulo").innerHTML = `PARA VENCER O LEVEL ${level.value} VOCÊ PRECISA TER ${desejo} LITROS DE ÁGUA EM UM DOS JARRO`;
    
    
}
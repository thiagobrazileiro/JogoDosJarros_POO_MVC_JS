
function carregaImg(){
    
    setInterval(function(){
        document.getElementById('MaxJarro1').innerHTML = `Qnt Max = ${jarro1.getAguaMax} Litros`
        document.getElementById('AtualJarro1').innerHTML = `Qnt Atual = ${jarro1.getAguaAtual} Litros`
        document.getElementById('MaxJarro2').innerHTML = `Qnt Max = ${jarro2.getAguaMax} Litros`
        document.getElementById('AtualJarro2').innerHTML = `Qnt Atual = ${jarro2.getAguaAtual} Litros`


        //Aqui é a função que verifica se o player ganhou o jogo ou nao
        if(jogo.checaVitoria(jarro2.getAguaAtual)|| jogo.checaVitoria(jarro1.getAguaAtual)){
            document.getElementById("ENVELOPE").style.display = 'none';
            document.getElementById("Vitoria").style.display = 'flex';
            document.getElementById("AAA").innerHTML = `Você ganhou o jogo`
        }

        
        if(jarro1.qntAtualAgua == jarro1.qntMaxAgua){
            document.getElementById('Jarro1').src = 'img/copoCheio.png'
        }

        if(jarro1.qntAtualAgua < jarro1.qntMaxAgua && jarro1.qntAtualAgua > 0 ){
            document.getElementById('Jarro1').src = 'img/copoMedio.png'
        }

        if(jarro1.qntAtualAgua == 0){
            document.getElementById('Jarro1').src = 'img/copoVazio.png'
        }

        if(jarro2.qntAtualAgua == jarro2.qntMaxAgua){
            document.getElementById('Jarro2').src = 'img/copoCheio.png'
        }

        if(jarro2.qntAtualAgua < jarro2.qntMaxAgua && jarro2.qntAtualAgua > 0 ){
            document.getElementById('Jarro2').src = 'img/copoMedio.png'
        }

        if(jarro2.qntAtualAgua == 0){
            document.getElementById('Jarro2').src = 'img/copoVazio.png'
        }
    },10);  

};

window.onload = setInterval(function(){

    document.getElementById('MaxJarro1').innerHTML = `Qnt Max = ${jarro1.getAguaMax}`
    document.getElementById('AtualJarro1').innerHTML = `Qnt Atual = ${jarro1.getAguaAtual}`
    document.getElementById('MaxJarro2').innerHTML = `Qnt Max = ${jarro2.getAguaMax}`
    document.getElementById('AtualJarro2').innerHTML = `Qnt Atual = ${jarro2.getAguaAtual}`

    var quantidadeDesejada = 4;
    if(jarro2.getAguaAtual == quantidadeDesejada || jarro1.getAguaAtual == quantidadeDesejada){
        document.getElementById("AAA").innerHTML = `Você ganhou o jogo`
        document.getElementById("ENVELOPE").style.display = 'none';
    }


    if(jarro1.qntAtualAgua == jarro1.qntMaxAgua){
        document.getElementById('Jarro1').src = '/views/img/copoCheio.png'
    }

    if(jarro1.qntAtualAgua < jarro1.qntMaxAgua && jarro1.qntAtualAgua > 0 ){
        document.getElementById('Jarro1').src = '/views/img/copoMedio.png'
    }

    if(jarro1.qntAtualAgua == 0){
        document.getElementById('Jarro1').src = '/views/img/copoVazio.png'
    }

    if(jarro2.qntAtualAgua == jarro2.qntMaxAgua){
        document.getElementById('Jarro2').src = '/views/img/copoCheio.png'
    }

    if(jarro2.qntAtualAgua < jarro2.qntMaxAgua && jarro2.qntAtualAgua > 0 ){
        document.getElementById('Jarro2').src = '/views/img/copoMedio.png'
    }

    if(jarro2.qntAtualAgua == 0){
        document.getElementById('Jarro2').src = '/views/img/copoVazio.png'
    }

    //document.getElementById("AAA").innerHTML = ferramentaUsada ;

},10)

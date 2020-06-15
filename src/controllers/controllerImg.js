window.onload = setInterval(function(){

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

ferramentaUsada = "";
jarroUsado = "";

function allowDrop(ev){
    ev.preventDefault();
};

document.addEventListener("dragstart",function(event){
    
    jarroUsado = event.target.id;
    console.log('Jarro usado = ' + jarroUsado);  

},false);

document.addEventListener("drop",function(event){
    ferramentaUsada = event.target.id;
    console.log('Ferramenta usada = ' +ferramentaUsada);

    if(ferramentaUsada == 'Ralo'){
        if(jarroUsado == 'Jarro1'){
            ralo.esvaziar(jarro1);
            ferramentaUsada = "";
            jarroUsado = "";
        }else if(jarroUsado == 'Jarro2'){
            ralo.esvaziar(jarro2);
            ferramentaUsada = "";
            jarroUsado = "";
        }
    }else if(ferramentaUsada == 'Torneira'){
        if(jarroUsado == 'Jarro1'){
            torneira.encher(jarro1);
            ferramentaUsada = "";
            jarroUsado = "";
        }else if(jarroUsado == 'Jarro2'){
            torneira.encher(jarro2);
            ferramentaUsada = "";
            jarroUsado = "";
        }
    }else if(ferramentaUsada == 'Jarro1'){
        if(jarroUsado == 'Jarro2'){
            console.log('JARRO2 JOGANDO AGUA NO JARRO1')
            jarro2.transfereAgua(jarro1);
            ferramentaUsada = "";
            jarroUsado = "";
        }

    }else if(ferramentaUsada == 'Jarro2'){
        if(jarroUsado == 'Jarro1'){
            console.log('JARRO1 JOGANDO AGUA NO JARRO2')
            jarro1.transfereAgua(jarro2);
            ferramentaUsada = "";
            jarroUsado = "";
        }
      
    }
    
    
    ferramentaUsada = "";
    jarroUsado = "";
    
},false);
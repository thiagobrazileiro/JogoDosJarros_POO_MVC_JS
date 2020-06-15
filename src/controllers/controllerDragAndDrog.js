ferramentaUsada = "";
jarroUsado = "";

function allowDrop(ev){
    ev.preventDefault();
};

document.addEventListener("dragstart",function(event){
    
    jarroUsado = event.target.id;
    //console.log(jarroUsado);

    document.addEventListener("drop",function(event){
        ferramentaUsada = event.target.id;
        //console.log(ferramentaUsada);

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
        }
    });

});
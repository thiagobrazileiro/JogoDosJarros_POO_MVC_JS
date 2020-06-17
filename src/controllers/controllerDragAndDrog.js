// Inicia as variaveis globais;
ferramentaUsada = "";
jarroUsado = "";


/*
Esta função habilita uma "zona de drop", ou seja, ela permite que o objeto
receba outro objeto a partir do drag and drop.
*/
function allowDrop(ev){
    ev.preventDefault();
};


/* 
Listener que escuta todos os dragstart (Arrastar) da pagina e salva
em uma variavel global quem está sendo arrastado.
*/
document.addEventListener("dragstart",function(event){
    
    jarroUsado = event.target.id;
    console.log('Jarro usado = ' + jarroUsado);  

},false);


/* 
Aqui existe um listener que  escuta todos os drops(de drap and drop) do sistema,
e a partir do drop executa uma serie de condicionais para verificar qual ação será
tomada.
*/
document.addEventListener("drop",function(event){
    ferramentaUsada = event.target.id;
    console.log('Ferramenta usada = ' +ferramentaUsada);

    // Verifica se a ferramenta usada foi o Ralo, depois verifica quem usou o ralo (jarro1 ou jarro2).
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
    // Verifica se a ferramenta usada foi o Torneira, depois verifica quem usou a torneira (jarro1 ou jarro2).
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
    // Verifica se a ferramenta usada foi outro Jarro, depois verifica se quem tentou transferir a agua foi outro jarro.    
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
    
    // Apaga os valores usados para nao haver duplicação de açoes.
    ferramentaUsada = "";
    jarroUsado = "";
    
},false);
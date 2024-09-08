function pesquisar(){
  
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;   

    campoPesquisa = campoPesquisa.toLowerCase(); if(campoPesquisa.trim() === ""){
        section.innerHTML = "Digite um texto para sua pesquisa!!"
    return
    }
/*
   
    if(!campoPesquisa){
        section.innerHTML = "Informação não encontrada!!"
        return
    }

*/
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for( let dado  of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            console.log(dado.titulo.includes(campoPesquisa))

        resultados += `<div class="item-resultado">
            <h2>
                <a href="${dado.link}" target="_blank">
                    ${dado.titulo}
                </a>
            </h2>
            <p class="descricao-meta">${dado.descricao} 
                <a href="${dado.link}" target="_blank"> 
                    saiba mais...
                </a>
            </p>
        </div>`;        
        }  
        /*      
        else{
            resultados = "Informação não consta na base de dados"
        }
        */
    }

    if(!resultados){
    resultados = "Nada foi encontrado"
    }
    
    section.innerHTML = resultados; 

    }

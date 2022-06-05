window.onload = function(){
    document.querySelector('#button').addEventListener('click', ()=>{
            let nome = document.getElementById('nome').value;
            let valor = Number(document.getElementById('valor').value);
            let url = 'https://profrodolfo.com.br/projeto/';
            fetch(url)
            .then(resposta => {
                return resposta.json();
            })
            .then(function(json){
                let d = document.querySelector('#dados');
                let texto = '';
                if(nome == json[i].nome && valor == json[i].valor || nome == json[i].nome || valor == json[i].valor){
                    for(let i = 0; i < json.length; i++){
                    texto += '<div class="row">';
                        texto += '<div class="col-4">';
                            texto+= '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/"'+json[i].foto+'">';
                        texto += '</div>';
                        texto += '<div class="col-7">';
                            texto += '<h1>'+json[i].nome+'</h1>';
                            texto += '<h3>'+json[i].valor+'</h3>';
                        texto += '</div>';
                    texto += '</div>';
                    }
                    d.innerHTML += texto;
                }
                // else if(nome == json[i].nome){
                //     for(let i = 0; i < json.length; i++){
                //     texto += '<div class="row">';
                //         texto += '<div class="col-4">';
                //             texto+= '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/"'+json[i].foto+'">';
                //         texto += '</div>';
                //         texto += '<div class="col-7">';
                //             texto += '<h1>'+json[i].nome+'</h1>';
                //             texto += '<h3>'+json[i].valor+'</h3>';
                //         texto += '</div>';
                //     texto += '</div>';
                //     }
                //     d.innerHTML += texto;
                // }
                // else if(valor == json[i].valor){
                //     for(let i = 0; i < json.length; i++){
                //     texto += '<div class="row">';
                //         texto += '<div class="col-4">';
                //             texto+= '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/"'+json[i].foto+'">';
                //         texto += '</div>';
                //         texto += '<div class="col-7">';
                //             texto += '<h1>'+json[i].nome+'</h1>';
                //             texto += '<h3>'+json[i].valor+'</h3>';
                //         texto += '</div>';
                //     texto += '</div>';
                //     }
                //     d.innerHTML += texto;
                // }
                else{
                    for(let i = 0; i < json.length; i++){
                    texto += '<div class="row">';
                        texto += '<div class="col-4">';
                            texto+= '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/"'+json[i].foto+'">';
                        texto += '</div>';
                        texto += '<div class="col-7">';
                            texto += '<h1>'+json[i].nome+'</h1>';
                            texto += '<h3>'+json[i].valor+'</h3>';
                        texto += '</div>';
                    texto += '</div>';
                    }
                    d.innerHTML += texto;
                }
            })
        .catch();
    })
}

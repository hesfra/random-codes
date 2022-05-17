fetch('urlRequest.json' /*pode ser adicionado o método, porém o padrão é get*/)
.then(responseStream =>{
    /*aqui é legal ter um if com a verificação do status, se for 200 tá ok, é o esperado*/
    if(responseStream.status ===200){
       /* aqui vai ser o retorno modificado para JSON*/
        return responseStream.json();
    }else{
        /*retorna o erro se não for possível concluir a ação*/
        throw new Error('Request error');
    } 
    })
    .then(data =>{
        console.log(data);
    })
    .catch(err =>{
        console.log('Error: ',err);
    })
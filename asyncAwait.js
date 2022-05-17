/* pra que serve o async/await? lidar com coisa assincrona de forma sequencial*/

const asyncTimer = () =>
new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(12345);
    },1000);
});
/* essa primeira função é a promessa de resolver algo depois de 1 segundo*/

const simpleFunc = async() =>{
    const data = await asyncTimer(); /*esperou o async ser resolvido*/
    console.log(data); /*logou o resultado inicial*/
    const dataJSON = await fetch('urlRequest.json').then(resStream =>
        resStream.json() /*recebeu o "arquivo", transformou em json
         logo depois retorna o resultado final*/
        );
    return data;
};


simpleFunc()
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
});
/*quando esse segundo passar e a promessa estiver concluida, ele vai devolver o resultado
O melhor funcionamento disso é vendo quando você recebe algo de uma API,
 que você precisa que seja sequencial para que teu programa funcione por etapas e corretamente
 porém rota ou algum problema cause um delay no meio do caminho, sua função vai continuar sendo
 executada de forma que isso não prejudique o funcionamento ou cause algum bug*/




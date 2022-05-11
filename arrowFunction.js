var sum = (a,b) =>{
    if(b>a){
        return "broken code"
    }
    return a+b;
}
console.log(sum(5,4))

//o if era apenas pra teste
//se o retorno for simples, pode ser feito um 
var sum2 = (a,b)=> a+b //... sendo um retorno direto
console.log(sum2(5,10))
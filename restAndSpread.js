// rest operator ...
function sum(...args){
    return args.reduce((acc, value) => acc + value, 0)
}
console.log(sum(5,5,5,2,3));
//vantagens do rest é que ele monta um array, você pode manipular os argumentos como um array normal. sem limites ou quantidade pré estabelecida

const srt ='Digital Innovation One';
const arr = [1,2,3,4];
const arr2 = [...arr, 5,6,7];
// spread pega o valor do primeiro array todo e coloca dentro do novo array (nesse caso especifico)
console.log(arr2)
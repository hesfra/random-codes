/* Ler uma quantidade de chuva dada em polegadas, calcular e escrever o 
valor equivalente em milímetros. Sabe-se que 1 corresponde a 25,4mm.*/

function converter(polegadas){
let converter = polegadas * 25.4
return converter + " mm"
}
console.log(converter(15))
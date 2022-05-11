function newValue(valorFabrica){
let valorDistribuidor = valorFabrica*28/100;
let valorImposto = valorFabrica*45/100;
let valorfinal = valorFabrica + valorDistribuidor + valorImposto
return valorfinal
}
console.log(newValue(30000))
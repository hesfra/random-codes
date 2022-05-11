/*- Um motorista de taxi deseja calcular o rendimento de seu carro na praça. 
Sabendo-se que o preço do combustível é de R$2,98 o litro, ler a marcação do 
odômetro no início e no fim do dia, o número de litros de combustível gasto e o 
valor recebido dos passageiros. Em seguida, calcular e escrever a média do 
consumo em Km/l e o lucro líquido do dia.*/

function dailyprofit(odometro1, odometro2, quantidadegasolina, totaldinheiro) {

    let rodou = odometro2 - odometro1
    let valor = totaldinheiro
    let litrogasolina = 2.98
    let totalgasolina = quantidadegasolina * litrogasolina
    let media = (rodou / totalgasolina)
    let valorfinal = totaldinheiro - totalgasolina

    return "a média do consumo de gasolina é de " + media + " por litro e o lucro líquido é de " + valorfinal
}
console.log(dailyprofit(50, 130, 15, 400))
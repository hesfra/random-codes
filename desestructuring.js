var obj = {
    name: 'Christian',
    props:{
        age:24,
        favoriteColors: ['black', 'white']
    }
}

let {name} = obj;

/*destructuring em obj com obj dentro de obj tem que ser passado o novo
obj seguido de outra chave pra representar ele*/
//pode ser feito também com arrays dentro de objs

var {props: {age,
favoriteColors:[color1, color2 ]}} = obj;


function maiorIdade(){
if(age>18){
    console.log('maior de idade')
}
}



console.log(name);
console.log(age);
maiorIdade();
console.log(color2)


/* forma antiga de fazer
var age = obg.props.age;
var color1 = obj.props.favoriteColors[index];
e o que isso altera? fica mais legível e mais completo
*/
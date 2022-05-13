var prop1 = 'teste'
 var obj = {
     prop1
 };
 console.log(obj);
 //pode ser omitido o ":" e o nome igual, deixando só a própria variável

 // o mesmo pode ser feito com função que vai entrar no obj

 var obj ={
     sum(a,b){
         return a+b;
     }
 };
 console.log(obj.sum(1,5));
 // a função de dentro pode ter a palavra "function" subtraida também, encurtando sintaxe

 
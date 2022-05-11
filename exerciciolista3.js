function potenciaRecursiva(x,y){
    if(y===0){
        return 1
    }
    else{
        return x* potenciaRecursiva(x, y-1);
    }
}console.log(potenciaRecursiva(5,5))

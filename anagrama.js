function eAnagrama(palavraA,palavraB){
    if(palavraA.toLowerCase().split("").sort().join("") === palavraB.toLowerCase().split("").sort().join("")){
        return "anagrama"
    }else{
        return "não é anagrama"
    }
}
console.log(eAnagrama("oi", "dale"))
console.log(eAnagrama("pedra", "perda"))
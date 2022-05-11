function getpokemon(pokemon){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((data) =>data.json())
    .catch((err) => console.log(err))
    console.log(data)
}
async function showPokemon(pokemon){
    try{
        const poke = await getpokemon(pokemon)
    }catch (err){
        console.log(`Erro:${err} `)
    }
}
showPokemon(ditto)
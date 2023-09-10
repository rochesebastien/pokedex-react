export type Pokemon = {
    id : number,
    name : string,
    image : string,
    stats :{
        HP : number,
        attack : number,
        defense : number,
        special_attack : number,
        special_defense : number,
        speed : number
    },
    apiTypes : PokemonType[],
    apiEvolutions : PokemonEvolution[]
}

export type PokemonType = {
    name : string,
    image : string
}

export type PokemonEvolution = {
    name : string,
    id : number
}
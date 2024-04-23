
import { PokemonResponse, SimplePokemon, PokemonGrid } from "@/pokemon";

export const metadata = {
    title: '151 Pokemon',
    description: "Los pokémon de la infancia,"
}


const getPokemonList = async(limit=20, offset=0):Promise<SimplePokemon[]> => {
    const dataPokemon: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());
    
    const pokemonList = dataPokemon.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    // throw new Error('Esto es un error');
    // throw notFound();

    return pokemonList;
}

export default async function PokemonPage() {
    const pokemonItems = await getPokemonList(151);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de todos los Pokemon <small className="text-blue-500">estático</small> </span>
            <PokemonGrid pokemonItems={pokemonItems}/>
        </div>
    );
}

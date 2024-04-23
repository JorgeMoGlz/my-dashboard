
import { PokemonResponse, SimplePokemon, PokemonGrid } from "@/pokemon";

export const metadata = {
    title: 'Favoritos',
    description: "Los favoritos de la infancia,"
}

export default async function PokemonPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokémon favoritos <small className="text-blue-500">global state</small> </span>
            <PokemonGrid pokemonItems={[]}/>
        </div>
    );
}

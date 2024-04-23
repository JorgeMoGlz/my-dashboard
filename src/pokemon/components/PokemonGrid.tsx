import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemonItems: SimplePokemon[];

}

export const PokemonGrid = ({pokemonItems}: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemonItems.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}

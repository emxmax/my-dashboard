import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";

export const metadata = {
  title: "Favoritos",
  description: "descripcion de pokdemones"
}

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemones favoritos <small className="text-blue-500">Global state</small></span>

      <PokemonGrid pokemons={[]}/>
    </div>
  );
}
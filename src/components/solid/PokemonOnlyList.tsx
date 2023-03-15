import { For } from "solid-js";
import type POKEMON from "../../data/pokemon";

const PokemonOnlyList = ({
  pokemons,
}: {
  pokemons: (typeof POKEMON)[number][];
}) => {
  return (
    <div
      class="h-[700px] overflow-hidden overflow-y-auto"
      id="server-list-container"
    >
      <ul>
        <For each={pokemons} fallback={<div>Loading...</div>}>
          {(pokemon) => (
            <li
              class="server-list-item my-5 border-2 py-2 px-4 text-2xl"
              data-name={pokemon.name}
              data-url={pokemon.url}
            >
              {pokemon.name}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default PokemonOnlyList;

import { createSignal, For } from "solid-js";

const PokemonList = ({ pokemons }: { pokemons: [string, string][] }) => {
  const [sortOrder, setSortOrder] = createSignal<"asc" | "desc" | null>(null);

  const sort = () =>
    sortOrder() === "asc"
      ? pokemons.sort((a, b) => a[0].localeCompare(b[0]))
      : pokemons.sort((a, b) => b[0].localeCompare(a[0]));

  const sortedPokemons = () => (sortOrder() ? sort() : pokemons);

  return (
    <>
      <button
        onClick={() =>
          sortOrder() === "asc" ? setSortOrder("desc") : setSortOrder("asc")
        }
        class="border-2 border-blue-300 py-2 px-4"
      >
        {sortOrder() === "asc" ? "Sort Descending" : "Sort Ascending"}
      </button>

      <div class="h-[700px] overflow-hidden overflow-y-auto">
        <ul>
          <For each={sortedPokemons()} fallback={<div>Loading...</div>}>
            {(pokemon) => (
              <li class="my-5 border-2 py-2 px-4 text-2xl">{pokemon[0]}</li>
            )}
          </For>
        </ul>
      </div>
    </>
  );
};

export default PokemonList;

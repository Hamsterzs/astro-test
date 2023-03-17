import { createEffect, createSignal, For, Show } from "solid-js";
import type POKEMON from "../../data/pokemon";

const PokemonList = () => {
  const [sortOrder, setSortOrder] = createSignal<"asc" | "desc" | null>(null);
  const [pokemons, setPokemons] = createSignal<
    (typeof POKEMON)[number][] | null
  >(null);

  const sort = () =>
    sortOrder() === "asc"
      ? pokemons().sort((a, b) => a.name.localeCompare(b.name))
      : pokemons().sort((a, b) => b.name.localeCompare(a.name));

  const sortedPokemons = () => (sortOrder() ? sort() : pokemons());

  createEffect(() => {
    console.log("Running on mount");

    const serverListContainer = document.getElementById(
      "server-list-container"
    );

    if (!serverListContainer) return;

    const serverList = serverListContainer.querySelectorAll("li");

    if (!serverList) return;

    const clientlist = [];

    serverList.forEach((item) =>
      clientlist.push({ name: item.textContent, url: item.dataset.u })
    );

    console.log("clientlist", clientlist);

    setPokemons(clientlist);

    serverListContainer.remove();
  });

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
      <Show when={pokemons()}>
        <div class="h-[700px] overflow-hidden overflow-y-auto">
          <ul>
            <For each={sortedPokemons()}>
              {(pokemon) => <li>{pokemon.name}</li>}
            </For>
          </ul>
        </div>
      </Show>
    </>
  );
};

export default PokemonList;

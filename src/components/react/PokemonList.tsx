import type POKEMON from "../../data/pokemon";
import { useState } from "react";

const PokemonList = ({
  pokemons,
}: {
  pokemons: (typeof POKEMON)[number][];
}) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const sort = () =>
    sortOrder === "asc"
      ? pokemons.sort((a, b) => a.name.localeCompare(b.name))
      : pokemons.sort((a, b) => b.name.localeCompare(a.name));

  const sortedPokemons = sortOrder ? sort() : pokemons;

  return (
    <>
      <button
        onClick={() =>
          sortOrder === "asc" ? setSortOrder("desc") : setSortOrder("asc")
        }
        className="border-2 border-blue-300 py-2 px-4"
      >
        {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
      </button>
      <div className="h-[700px] overflow-hidden overflow-y-auto">
        <ul>
          {sortedPokemons.map((pokemon) => (
            <li className="my-5 border-2 py-2 px-4 text-2xl" key={pokemon.url}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PokemonList;

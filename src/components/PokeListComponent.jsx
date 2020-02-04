import React from "react";

export default function PokeListComponent({ pokemonList }) {
  return (
    <ul>
      {pokemonList.map(pokemon => (
        <li>{pokemon.name}</li>
      ))}
    </ul>
  );
}

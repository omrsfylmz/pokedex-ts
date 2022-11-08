import { Pokemon } from "../types";

export const fetchPokemon = async (name: string) => {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  let response;
  let data: Pokemon | null;
  let error;

  try {
    response = await fetch(`${baseUrl}/${name}`);
    data = await response.json();
  } catch (err) {
    data = null;
    error = true;
  }
  return { response, data, error };
};

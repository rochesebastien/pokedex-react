import axios from "axios";

const API_URL = "https://pokebuildapi.fr/api/v1"

export async function getPokemons() {
  try {
    const response = await fetch(`${API_URL}/pokemon`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getOnePokemon(id : string) {
  try {
    const response = await fetch(`${API_URL}/pokemon/`+id);
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
    return null
    }
}

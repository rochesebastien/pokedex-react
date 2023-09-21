
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

export async function getOnePokemon(id : number) {
  try {
    const response = await fetch(`${API_URL}/pokemon/`+id);
    const data = await response.json();
    return data
  } catch (error) {
    console.error("Erreur"+error);
    return null
    }
}

export async function getPokemonTypes() {
  try {
    const response = await fetch(`${API_URL}/types/`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error("Erreur"+error);
    return null
    }
}

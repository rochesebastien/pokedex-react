import axios from "axios";

const API_URL = "https://pokebuildapi.fr/api/v1"

export async function getPokemons() {
  try {
    const response = await fetch(`${API_URL}/pokemon`);
    const data = await response.json();
    // console.log(data);
    return data

    // const response = await axios.get(`${API_URL}/pokemon`);
    // console.log(response);
    // return response.data;
  } catch (error) {
    console.error(error);
    // return null;
  }
}

export async function getOnePokemon(id : string) {
  try {
    const response = await fetch(`${API_URL}/pokemon/`+id);
    // const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/2");
    
    const data = await response.json();
    // console.log(data);
    return data

    // const response = await axios.get(`${API_URL}/pokemon`);
    // console.log(response);
    // return response.data;
  } catch (error) {
    console.error(error);
    // return null;
  }
}

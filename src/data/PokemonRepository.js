import axiosInstance from "./axiosInstance";

export const getPokemons = async () => {
  try {
    const response = await axiosInstance.get('/pokemon');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

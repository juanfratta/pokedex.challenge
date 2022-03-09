import axios from 'axios';

export const fetchPokemons = async (url: string) => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((e) => e);
};

export const getPokemon = async (url: string) => {
  return await axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => error);
};

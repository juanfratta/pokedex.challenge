import { ServiceResponse, ServiceResponseDT } from '@typings/service.types';
import parseEvolution from '@utils/parseEvolution';
import axios from 'axios';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { backUrl },
} = getConfig();

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

export const getSpecies = async (name: string) => {
  return await axios
    .get(`${backUrl}-species/${name}`)
    .then((res) => res.data)
    .catch((error) => error);
};

export const getEvolutionChain = async (url: string) => {
  return axios
    .get(url)
    .then((res) => parseEvolution(res.data.chain))
    .catch((error) => error);
};

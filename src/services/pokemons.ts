import getConfig from 'next/config';
import axios from 'axios';

const {
  publicRuntimeConfig: { backUrl },
} = getConfig();

const fetchPokemons = {
  async getListPokemons(endpoint: string): Promise<any> {
    axios.get(`${backUrl}/`);
  },
};

export default fetchPokemons;

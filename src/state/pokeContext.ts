import { PokeCardProps } from '@typings/pokemons.types';
import { View } from '@typings/views.types';
import { createContext } from 'react';

interface ContextProps {
  currentView: View;
  currentPokemon?: PokeCardProps;
  getView: (view: View) => void;
  setPokemon: (pokemon: PokeCardProps) => void;
}

const PokeContext = createContext<ContextProps>({
  currentView: View.LIST,
  currentPokemon: undefined,
  getView: () => null,
  setPokemon: () => null,
});

export default PokeContext;

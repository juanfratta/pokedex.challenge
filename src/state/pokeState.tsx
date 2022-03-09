import { PokeCardProps } from '@typings/pokemons.types';
import { View } from '@typings/views.types';
import React, { FC, ReactNode, useReducer } from 'react';
import { SET_POKEMON, SET_VIEW } from './pokeActions';
import PokeContext from './pokeContext';
import PokeReducer from './pokeReducer';

interface StateProps {
  children: ReactNode;
}

const PokeState: FC<StateProps> = ({ children }) => {
  const initialState = {
    currentView: View.LIST,
    currentPokemon: undefined,
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  const setPokemon = (pokemon: PokeCardProps) => {
    dispatch({
      type: SET_POKEMON,
      payload: {
        pokemon,
      },
    });
  };

  const getView = (view: View) => {
    const isValidView = Object.values(View).includes(view);

    if (!isValidView) return;

    if (isValidView) {
      dispatch({
        type: SET_VIEW,
        payload: {
          view,
        },
      });
    }
  };

  return (
    <PokeContext.Provider
      value={{
        currentView: state.currentView,
        currentPokemon: state.currentPokemon,
        getView,
        setPokemon,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeState;

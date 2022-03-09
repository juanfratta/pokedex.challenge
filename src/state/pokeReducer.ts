import { SET_POKEMON, SET_VIEW } from './pokeActions';

//TODO:check types reducer
const PokeReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_VIEW:
      return {
        ...state,
        currentView: action.payload.view,
      };
    case SET_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload.pokemon,
      };
    default:
      state;
  }
};

export default PokeReducer;

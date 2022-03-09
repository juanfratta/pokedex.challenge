import { View } from '@typings/views.types';
import { createContext, ProviderProps } from 'react';

interface ContextProps {
  currentView: View;
  getView: (view: View) => void;
}

const PokeContext = createContext<ContextProps>({
  currentView: View.LIST,
  getView: () => null,
});

export default PokeContext;

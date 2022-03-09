import { View } from '@typings/views.types';
import React, { FC, ReactNode, useState } from 'react';
import PokeContext from './pokeContext';

interface StateProps {
  children: ReactNode;
}

const PokeState: FC<StateProps> = ({ children }) => {
  const [view, setView] = useState(View.LIST);

  const getView = (view: View) => {
    const isValidView = Object.values(View).includes(view);

    if (!isValidView) return;

    if (isValidView) {
      setView(view);
    }
  };
  return (
    <PokeContext.Provider value={{ currentView: view, getView }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeState;

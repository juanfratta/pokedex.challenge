import { FC, useContext } from 'react';
import { View } from '@typings/views.types';

import Details from '../Details';
import List from '../List';
import PokeContext from '@state/pokeContext';

const ViewsFactory: FC<{}> = () => {
  const { currentView } = useContext(PokeContext);

  switch (currentView) {
    case View.LIST:
      return <List />;
    case View.DETAILS:
      return <Details />;
    default:
      return <></>;
  }
};

export default ViewsFactory;

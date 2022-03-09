import { FC } from 'react';
import { View } from '@typings/views.types';

import Details from '../Details';
import List from '../List';

const ViewsFactory: FC<any> = ({ view }) => {
  switch (view) {
    case View.LIST:
      return <List />;
    case View.DETAILS:
      return <Details />;
    default:
      return <></>;
  }
};

export default ViewsFactory;

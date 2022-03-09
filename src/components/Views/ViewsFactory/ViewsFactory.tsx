import { FC } from 'react';
import Details from '../Details';
import Home from '../Home';
import List from '../List';

/* const ViewsFactory: FC<any> = (key: string) =>
  ({ 'list': <List />, 'details': <Details /> })[key] || <Home />; */

const ViewsFactory: FC<any> = ({ view }) => {
  switch (view) {
    case 'list':
      return <List />;
    case 'details':
      return <Details />;
    case 'home':
      return <Home />;
    default:
      return <></>;
  }
};

export default ViewsFactory;

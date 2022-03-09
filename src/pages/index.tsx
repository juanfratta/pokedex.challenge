import type { NextPage } from 'next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import ViewsFactory from '../components/Views/ViewsFactory';

const Index: NextPage = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ViewsFactory view={'list'} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Index;

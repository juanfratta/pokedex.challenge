import type { NextPage } from 'next';
import { useContext } from 'react';

import PokeState from '@state/pokedexState';
import PokeContext from '@state/pokeContext';
import { SkeletonTheme } from 'react-loading-skeleton';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import ViewsFactory from '@components/Views/ViewsFactory';

import 'react-loading-skeleton/dist/skeleton.css';

const Index: NextPage = () => {
  const queryClient = new QueryClient();
  const { currentView } = useContext(PokeContext);

  return (
    <QueryClientProvider client={queryClient}>
      <PokeState>
        <SkeletonTheme baseColor='#f0f0f0' highlightColor='#d8d8d8'>
          <ViewsFactory view={currentView} />
          <ReactQueryDevtools />
        </SkeletonTheme>
      </PokeState>
    </QueryClientProvider>
  );
};

export default Index;

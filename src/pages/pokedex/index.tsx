import type { NextPage } from 'next';

import PokeState from '@state/pokeState';
import { SkeletonTheme } from 'react-loading-skeleton';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { skeletonColors } from '@utils/misc';

import ViewsFactory from '@components/Views/ViewsFactory';

import 'react-loading-skeleton/dist/skeleton.css';

const Index: NextPage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PokeState>
        <SkeletonTheme
          baseColor={skeletonColors.base}
          highlightColor={skeletonColors.highlight}
        >
          <ViewsFactory />
          <ReactQueryDevtools />
        </SkeletonTheme>
      </PokeState>
    </QueryClientProvider>
  );
};

export default Index;

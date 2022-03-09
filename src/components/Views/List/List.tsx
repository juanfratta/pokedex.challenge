import { FC, Fragment, useCallback, useRef } from 'react';

import { useInfiniteQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { fetchPokemons } from '../../../utils/api';
import getConfig from 'next/config';

import PokeCard from '../../PokeCard/PokeCard';
import useIntersectionObserver, {
  IntersectionObserverParams,
} from '../../../hooks/useIntersection';
import { ServiceResponse } from '../../../typings/service.types';
import { ListContainer } from './List.styled';

const {
  publicRuntimeConfig: { backUrl },
} = getConfig();

const List: FC<{}> = () => {
  //start fetching data section
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'getList',
    async ({ pageParam = backUrl }) => {
      return await fetchPokemons(pageParam);
    },
    {
      getNextPageParam: (page) => page.next || false,
    }
  );
  //end fetching data

  //start scroll control section
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  } as IntersectionObserverParams);
  //end scroll control

  //start render section
  if (status === ServiceResponse.LOADING) return <h1>is loading ...</h1>;
  if (status === ServiceResponse.FAILURE) return <h1> error ...</h1>;

  return (
    <div>
      {data?.pages?.map((page: any) => (
        <ListContainer key={uuidv4()}>
          {page.results.map((pokemon: any) => (
            <PokeCard key={uuidv4()} name={pokemon.name} url={pokemon.url} />
          ))}
        </ListContainer>
      ))}

      {hasNextPage && (
        <div ref={loadMoreRef}>
          <h3>Load More...</h3>
        </div>
      )}
    </div>
  );
};

export default List;

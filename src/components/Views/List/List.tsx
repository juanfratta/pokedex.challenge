import getConfig from 'next/config';
import { FC, useRef } from 'react';

import Skeleton from 'react-loading-skeleton';
import { useInfiniteQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { fetchPokemons } from '@lib/api';
import useIntersectionObserver, { IntersectionInt } from '@hooks/useIntersection';
import { ServiceResponse } from '@typings/service.types';

import { ListContainer } from './List.styled';
import PokeCard from '@components/PokeCard';

const {
  publicRuntimeConfig: { backUrl },
} = getConfig();

const List: FC<{}> = () => {
  //start fetching data section
  const url = `${backUrl}/?limit=6&offset=0`;
  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      'getList',
      async ({ pageParam = url }) => {
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
  } as IntersectionInt);
  //end scroll control

  const gridItems = [1, 2, 3, 4, 5, 6];

  //start render section
  if (status === ServiceResponse.LOADING)
    return (
      <ListContainer>
        {gridItems.map((item) => (
          <Skeleton key={uuidv4()} height='100%' />
        ))}
      </ListContainer>
    );

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

      {hasNextPage && !isFetchingNextPage && <div ref={loadMoreRef} />}
    </div>
  );
};

export default List;

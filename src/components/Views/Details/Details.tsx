import { FC, useContext } from 'react';
import Image from 'next/image';

import { getSpecies } from '@lib/api';
import PokeContext from '@state/pokeContext';
import { View } from '@typings/views.types';
import { useQuery } from 'react-query';
import Evolution from '@components/Evolution';

import {
  Name,
  BottomSection,
  ButtonContainer,
  ButtonGoBack,
  DetailsContainer,
  UpperSection,
  FullScreen,
} from './Details.styled';
import { Subtitle } from '@components/common/Texts';
import { FadeLoader } from 'react-spinners';

const Details: FC<{}> = () => {
  const { currentPokemon: pokemon, getView } = useContext(PokeContext);

  const { data, error, isLoading } = useQuery(['getSpecies', pokemon?.name], async () => {
    return await getSpecies(pokemon!.name);
  });

  if (error) return <FullScreen>Error get details ...</FullScreen>;
  if (isLoading)
    return (
      <FullScreen>
        <FadeLoader />
      </FullScreen>
    );

  return (
    <DetailsContainer>
      <UpperSection>
        <Image
          src={pokemon!.image || 'TODO: add image error'}
          alt={pokemon?.name}
          width={320}
          height={320}
        />
        <div>
          <Name>{pokemon?.name}</Name>
          <Subtitle>Habitat</Subtitle>
          <p>{data?.habitat?.name}</p>
          <ButtonContainer>
            <ButtonGoBack onClick={() => getView(View.LIST)}>GoBack</ButtonGoBack>
          </ButtonContainer>
        </div>
      </UpperSection>
      <BottomSection>
        <Subtitle>Description:</Subtitle>
        <p>{data?.flavor_text_entries[26]?.flavor_text}</p>
        <Evolution url={data.evolution_chain.url} />
      </BottomSection>
    </DetailsContainer>
  );
};

export default Details;

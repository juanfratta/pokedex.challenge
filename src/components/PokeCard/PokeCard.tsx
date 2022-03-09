import { FC, useContext } from 'react';
import Image from 'next/image';

import { getPokemon } from '@lib/api';
import { getTypeColor } from '@utils/getTypeColor';
import { PokeCardProps } from '@typings/pokemons.types';
import { useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import PokeContext from '@state/pokeContext';
import { View } from '@typings/views.types';
import Skeleton from 'react-loading-skeleton';

import {
  Button,
  ButtonContainer,
  CardBottom,
  CardContainer,
  CardUpper,
  ImageContainer,
  TagPoweContainer,
  TagPower,
  Title,
} from './PokeCard.styled';
import { FadeLoader } from 'react-spinners';

const PokeCard: FC<PokeCardProps> = ({ name, url }) => {
  const { data, error, isLoading } = useQuery(['getPokemon', url], () => getPokemon(url));
  const { getView } = useContext(PokeContext);

  if (error) return <h1>Error ...</h1>;
  if (isLoading) return <Skeleton height='100%' />;

  const typeColor = getTypeColor(data?.types[0]?.type.name);

  return (
    <CardContainer>
      <CardUpper style={{ background: typeColor }}>
        <Title>{name}</Title>
      </CardUpper>
      <CardBottom>
        <TagPoweContainer>
          {data?.types.map((t: any) => (
            <TagPower key={uuidv4()}>✔ {t.type.name}</TagPower>
          ))}
        </TagPoweContainer>
        <ButtonContainer>
          <Button onClick={() => getView(View.DETAILS)}>Details</Button>
        </ButtonContainer>
      </CardBottom>
      <ImageContainer>
        <Image
          quality={100}
          src={data.sprites?.other?.dream_world.front_default}
          alt={name}
          width={100}
          height={100}
        />
      </ImageContainer>
    </CardContainer>
  );
};

export default PokeCard;

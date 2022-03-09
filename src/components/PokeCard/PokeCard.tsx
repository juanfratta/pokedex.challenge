import { FC } from 'react';

import Image from 'next/image';
import { useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import { getPokemon } from '../../utils/api';
import { PokeCardProps } from '../../typings/pokemons.types';

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

import { getTypeColor } from '../../utils/getTypeColor';

const PokeCard: FC<PokeCardProps> = ({ name, url }) => {
  const { data, error, isLoading } = useQuery(['getPokemon', url], () => getPokemon(url));

  if (error) return <h1>Error ...</h1>;
  if (isLoading) return <h1>loading ...</h1>;

  const typeColor = getTypeColor(data?.types[0]?.type.name);

  return (
    <CardContainer>
      <CardUpper style={{ background: typeColor }}>
        <Title>{name}</Title>
      </CardUpper>
      <CardBottom>
        <TagPoweContainer>
          {data?.types.map((t: any) => (
            <TagPower key={uuidv4()}>{t.type.name}</TagPower>
          ))}
        </TagPoweContainer>
        <ButtonContainer>
          <Button>Details</Button>
        </ButtonContainer>
      </CardBottom>
      <ImageContainer>
        <Image
          quality={100}
          src={data?.sprites?.other.dream_world?.front_default}
          alt={name}
          width={150}
          height={150}
        />
      </ImageContainer>
    </CardContainer>
  );
};

export default PokeCard;

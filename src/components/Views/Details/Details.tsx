import { Button } from '@components/PokeCard/PokeCard.styled';
import PokeContext from '@state/pokeContext';
import { View } from '@typings/views.types';
import Image from 'next/image';
import { FC, useContext } from 'react';

interface DetialsViewProps {
  id: number;
  name: string;
  url: string;
}

const Details: FC<DetialsViewProps> = () => {
  const { currentPokemon, getView } = useContext(PokeContext);

  return (
    <div>
      <h1>{currentPokemon?.name}</h1>
      <Image
        src={currentPokemon?.image || 'TODO: add url error'}
        alt={currentPokemon?.name}
        width={320}
        height={320}
      />
      <button onClick={() => getView(View.LIST)}>Go Back</button>
    </div>
  );
};

export default Details;

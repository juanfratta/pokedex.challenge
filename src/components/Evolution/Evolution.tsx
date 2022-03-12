import { FC } from 'react';

import { getEvolutionChain } from '@lib/api';
import { useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import { Subtitle } from '@components/common/Texts';
import { Centered, EvoContainer, ImagesContainer, MaxWidth } from './Evolution.styled';
import EvoStaticImages from '@components/common/EvoStaticImages/EvoStaticImages';
import EvoCarousel from '@components/common/EvoCarousel';

interface EvolutionProps {
  url: string;
}

const Evolution: FC<EvolutionProps> = ({ url }) => {
  const { data, error, isLoading } = useQuery(['getEvolution', url], async () => {
    return await getEvolutionChain(url);
  });

  if (error) return <p>Error get evolution ...</p>;
  if (isLoading) return <p>Loading Evolution ...</p>;

  const showCarrousel = data.length > 2;

  return (
    <EvoContainer>
      <Subtitle>Evolution:</Subtitle>
      <Centered>
        <MaxWidth>
          <ImagesContainer>
            {!showCarrousel ? (
              data.map((evo: any) => {
                return (
                  <div key={uuidv4()}>
                    <EvoStaticImages name={evo.species_name} url={evo.url} />
                  </div>
                );
              })
            ) : (
              <EvoCarousel pokes={data} />
            )}
          </ImagesContainer>
        </MaxWidth>
      </Centered>
    </EvoContainer>
  );
};

export default Evolution;

import { FC, Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { getImageByIndex } from '@utils/getImageByIndex';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Name } from './EvoCarousel.styled';

interface EvoCarouselProps {
  pokes: Item[];
}

interface Item {
  species_name: string;
  url: string;
}

const EvoCarousel: FC<EvoCarouselProps> = ({ pokes }) => {
  return (
    <Carousel autoPlay={true} interval={3000} infiniteLoop={true} emulateTouch={true}>
      {pokes.map((poke: Item) => {
        return (
          <Fragment key={uuidv4()}>
            <Name>{poke.species_name}</Name>
            <Image
              src={getImageByIndex(poke.url)}
              alt={poke.species_name}
              width='200px'
              height='200px'
            />
          </Fragment>
        );
      })}
    </Carousel>
  );
};

export default EvoCarousel;

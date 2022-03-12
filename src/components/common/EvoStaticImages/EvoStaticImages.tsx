import { FC } from 'react';
import Image from 'next/image';
import { getImageByIndex } from '@utils/getImageByIndex';

import { Name, StaticContainer } from './EvoStaticImages.styled';

interface ImgProps {
  name: string;
  url: string;
}

const EvoStaticImages: FC<ImgProps> = ({ name, url }) => {
  return (
    <StaticContainer>
      <Image
        quality={100}
        src={getImageByIndex(url)}
        alt={name}
        layout='fixed'
        width='200px'
        height='200px'
      />
      <Name>{name}</Name>
    </StaticContainer>
  );
};

export default EvoStaticImages;

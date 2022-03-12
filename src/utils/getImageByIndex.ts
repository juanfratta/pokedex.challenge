import getConfig from 'next/config';

const {
  publicRuntimeConfig: { imagesUrl },
} = getConfig();

export const getImageByIndex = (url: string) => {
  const subStr = url.split('species')[1];
  const index = subStr.slice(0, -1);
  const urlImage = `${imagesUrl}${index}.svg`;

  return urlImage;
};

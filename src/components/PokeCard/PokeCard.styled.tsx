import tw from 'twin.macro';

export const CardContainer = tw.div`flex flex-col justify-center rounded-xl bg-gray-50 relative`;

export const CardUpper = tw.div`rounded-t-xl flex flex-col justify-center h-1/2`;

export const CardBottom = tw.div`h-1/2`;

export const Title = tw.h3`text-xl font-bold text-gray-600 text-center m-2`;

export const ImageContainer = tw.div`rounded-full bg-white w-max absolute`;

export const TagPoweContainer = tw.div`flex justify-center m-4`;

export const TagPower = tw.span`text-red-400 text-center px-2`;

export const ButtonContainer = tw.div`w-full flex justify-center`;

export const Button = tw.button`bg-blue-500 hover:bg-blue-200 rounded-full text-white text-center py-1.5 px-6 max-w-min`;

import tw from 'twin.macro';

export const CardContainer = tw.div` flex flex-col justify-center rounded-xl bg-gray-50 relative shadow-md h-[19rem]`;

export const CardUpper = tw.div`rounded-t-xl flex flex-col justify-start items-center h-1/2 border-b-2 border-black`;

export const CardBottom = tw.div`h-1/2 border-t-2 border-black flex flex-col justify-end`;

export const Title = tw.h3`text-xl font-bold text-gray-400 text-center m-2`;

export const ImageContainer = tw.div`rounded-full bg-white w-max absolute inset-x-0 m-auto p-4 border-4 border-black`;

export const TagPoweContainer = tw.ul`flex flex-col items-start pl-4 w-1/2`;

export const TagPower = tw.li`text-gray-300 text-center rounded-md`;

export const ButtonContainer = tw.div`w-full flex justify-center pb-2 mt-2`;

export const Button = tw.button`bg-blue-400 hover:bg-blue-200 rounded-xl text-white text-center px-6 max-w-min`;

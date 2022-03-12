import tw from 'twin.macro';

export const DetailsContainer = tw.div`container mx-auto py-8 px-6`;

export const UpperSection = tw.div`grid md:grid-cols-2 gap-8`;

export const BottomSection = tw.div`border-t-2 mt-6`;

export const Name = tw.h1`text-4xl font-semibold`;

export const ButtonContainer = tw.div`flex justify-start pb-2 mt-8`;

export const ButtonGoBack = tw.button`bg-blue-400 hover:bg-blue-200 rounded-xl text-white px-6 max-w-min`;

export const FullScreen = tw.div`container mx-auto h-screen flex justify-center items-center`;

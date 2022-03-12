export default function parseEvolution(evoData: any) {
  let evoChain = [];

  do {
    evoChain.push({
      species_name: evoData.species.name,
      url: evoData.species.url,
    });
    evoData = evoData['evolves_to'][0];
  } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

  return evoChain;
}

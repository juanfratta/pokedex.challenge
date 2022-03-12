export const getTypeColor = (type: string) =>
  ({
    fighting: '#FDA4AF',
    flying: 'lightblue',
    poison: '#F87171',
    ground: '#FFEDD5',
    rock: 'gray',
    bug: 'lightgreen',
    ghost: '#7DD3FC',
    steel: 'ligthgray',
    fire: '#FEF08A',
    water: '#91ffff',
    grass: '#86EFAC',
    electric: '#93C5FDFC',
    ice: 'ligthblue',
    dragon: '#A78BFA',
    dark: '#A8A29E',
    fairy: '#F9A8D4',
  }[type] || 'lightcyan');

export const getTypeColor = (type: string) =>
  ({
    fighting: 'red',
    flying: 'lightblue',
    poison: 'violet',
    ground: 'brown',
    rock: 'gray',
    bug: 'lightgreen',
    ghost: 'violet',
    steel: 'ligthgray',
    fire: 'yellow',
    water: '#91ffff',
    grass: 'green',
    electric: 'blue',
    ice: 'ligthblue',
    dragon: 'purple',
    dark: 'black',
    fairy: 'pink',
  }[type] || 'lightcyan');

export const getIcons = (type: string) =>
  ({
    fighting: '👊',
    flying: '🪁',
    poison: '☠',
    ground: '✔',
    rock: '🤘',
    bug: '🐛',
    ghost: '👻',
    steel: '🗡',
    fire: '🔥',
    water: '🌊',
    grass: '✔',
    electric: '🌩',
    ice: '❄',
    dragon: '🐉',
    dark: '⚰',
    fairy: '🧚‍♀️',
  }[type] || '👉');

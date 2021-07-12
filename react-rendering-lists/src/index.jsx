import React from 'react';
import ReactDom from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const pokeList = pokedex.map(pokedex =>
  <li key={pokedex.number}>{pokedex.name}</li>
);

ReactDom.render(
  <ul>{pokeList}</ul>,
  document.getElementById('root')
);

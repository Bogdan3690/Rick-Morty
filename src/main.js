import { fetchCharacters } from './js/server';
import { createCards } from './js/create-markup';
const list = document.querySelector('.character-list');

fetchCharacters()
  .then(data => {
    console.log(data.results);
    createCards(data.results, list);
  })
  .catch(error => {
    console.log(error);
  });

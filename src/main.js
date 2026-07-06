import { fetchCharacters } from './js/server';
import { createCards } from './js/create-markup';
import "./js/filter.js";
import "./js/load-more.js"
// const list = document.querySelector('.character-list');

fetchCharacters()
  .then(data => {
    console.log(data.results);
    createCards(data.results);
  })
  .catch(error => {
    console.log(error);
  });

import { createCards } from './create-markup';
import { fetchCharacters } from './server';

const btn = document.querySelector('.js-load-more');
const list = document.querySelector('.character-list');
const input = document.querySelector('.name');
const status = document.querySelector('#status');
const species = document.querySelector('#species');
const gender = document.querySelector('#gender');
let countOfPages = 1;
let page = 1;

btn.addEventListener('click', onLoadMoreBtnClick);

async function onLoadMoreBtnClick(params) {
  try {
    page += 1;

    btn.disabled = true;
    const statusV = status.value;
    const speciesV = species.value;
    const genderV = gender.value;
    const data = await fetchCharacters(
      page,
      input.value,
      statusV,
      speciesV,
      genderV
    );

    console.log(data.info.pages);
    countOfPages = data.info.pages;
    console.log(page, countOfPages);

    createCards(data.results);
    if (page >= countOfPages) {
      console.log(page >= countOfPages);
      btn.style.display = 'none';
      return;
    }
    btn.disabled = false;
  } catch (error) {
    console.log(error);
  }
}

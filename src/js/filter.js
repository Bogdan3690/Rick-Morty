import { createCards } from './create-markup';
import { fetchCharacters } from './server';

const input = document.querySelector('.name');
const btn = document.querySelector('.filter-name-btn');
const btnLoadMore = document.querySelector('.js-load-more');
const status = document.querySelector('#status');
const species = document.querySelector('#species');
const gender = document.querySelector('#gender');
const list = document.querySelector('.character-list');
const errorImg = document.querySelector('.error-img');
console.log(errorImg);

// input.addEventListener("input", onInput)
btn.addEventListener('click', onInput);
status.addEventListener('change', onInput);
species.addEventListener('change', onInput);
gender.addEventListener('change', onInput);

async function onInput(e) {
  const value = input.value;
  console.log(status.value);

  const statusV = status.value;
  const speciesV = species.value;
  const genderV = gender.value;
  console.log(value, statusV, speciesV, genderV);
  try {
    const data = await fetchCharacters(1, value, statusV, speciesV, genderV);
    list.innerHTML = '';
    console.log(data);
    console.log(1, data.info.pages);

    errorImg.style.display = 'none';
    btnLoadMore.style.display = 'block';
    if (data.info.pages < 2) {
      btnLoadMore.style.display = 'none';
    }

    createCards(data.results);
  } catch (error) {
    console.log(error);
    errorImg.style.display = 'block';
    btnLoadMore.style.display = 'none';
  }
}

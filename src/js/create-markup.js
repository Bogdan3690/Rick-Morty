function createCards(characters, list) {
  const markup = characters
    .map(character => {
      return `<li class="character-item">
    <img class="character-img" src="${character.image}" alt="${character.name}">
    <h2 class="name-character">${character.name}</h2>
    <p class="character-text"><span class="character-description">Origin: </span>${character.origin.name} </p>
    <p class="character-text"><span class="character-description">Location: </span>${character.location.name} </p>
    </li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

export{createCards}

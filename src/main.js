const container = document.querySelector('.characters-container');

const promises = [];


const fetchFuturamaCharacters = async (id) => {
  const response = await fetch(`https://futuramaapi.com/api/characters/${id}`);
  const data = await response.json();
  return data;
}

for (let i = 1; i <= 9; i++) {
  promises.push(fetchFuturamaCharacters(i));
}

Promise.all(promises).then((characters) => {
  characters.forEach(character => {
    const characterElement = document.createElement("div");
    characterElement.classList.add("character");

    characterElement.innerHTML = `
      <img src="${character.image}" alt="${character.name}" class="characters-image" />
      <p class="characters-name">${character.name}</p>
    `;

    container.appendChild(characterElement);
  });
});

for (let i = 0; i < promises.length; i++) {
  response(promises[i]);
  console.log(promises[i]);
}



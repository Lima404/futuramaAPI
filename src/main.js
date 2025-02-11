const container = document.querySelector('.characters-container');


const fetchFuturamaCharacters = async () => {
  const response = await fetch("https://futuramaapi.com/api/characters/?size=9");
  const data = await response.json();
  return data;
};

const response = await fetchFuturamaCharacters();
console.log(response);
const characters = response.items;


for (let i = 0; i < characters.length; i++) {
  const characterElement = document.createElement("div");
  characterElement.classList.add("character");
  console.log(characters[i]);

  characterElement.innerHTML = `
    <img src="${characters[i].image}" alt="${characters[i].name}" class="characters-image" />
    <p class="characters-name">${characters[i].name}</p>
  `;


  container.appendChild(characterElement);
}



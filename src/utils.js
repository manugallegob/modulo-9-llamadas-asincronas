import * as indexD from "./index.js";

const createCharacterRow = (character) => {
  const element = document.createElement("div");
  element.addEventListener("click", () => showCharacter(character));

  const avatar = createAvatar(character);
  element.appendChild(avatar);

  const link = createRowText(character);
  element.appendChild(link);

  element.className = "character-row";

  return element;
};

const createAvatar = (character) => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.img;

  return element;
};

const createRowText = (character) => {
  const element = document.createElement("span");
  element.append(character.name);

  return element;
};

const createAvatarDetail = (character) => {
  const element = document.createElement("img");
  element.width = 250;
  element.src = character.img;

  return element;
};

const showCharacter = (character) => {
  const characterDetail = document.getElementById("character-detail");

  characterDetail.innerHTML = "";
  characterDetail.appendChild(createAvatarDetail(character));
  characterDetail.appendChild(createParagraph("Name: " + character.name));
  characterDetail.appendChild(
    createParagraph("Birthday: " + character.birthday)
  );
  characterDetail.appendChild(
    createParagraph("Nickname: " + character.nickname)
  );
  characterDetail.appendChild(createParagraph("Quotes: "));
  characterDetail.appendChild(createQuote(indexD.arrayQuotes, character));
};

const createQuote = (quotes, character) => {
  let ol = document.createElement("ol");
  for (quote of quotes) {
    if (character.name == quote.author) {
      const li = document.createElement("li");
      li.append('"' + quote.quote + '"');
      ol.appendChild(li);
    }
  }
  return ol;
};

const createParagraph = (text) => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};

export { createCharacterRow, showCharacter };

import * as dataB from "./data-business";
import * as utils from "./utils";

var arrayQuotes = [];

dataB.getUsers().then((data) => {
    
  dataB.getQuotes().then((dataQuotes) => {
    for (quotes of dataQuotes) {
      arrayQuotes.push(quotes);
    }
  });

  document.getElementById("root").innerHTML = "";

  for (character of data) {
    const node = utils.createCharacterRow(character);
    document.getElementById("root").append(node);
  }
  return arrayQuotes;
});

export { arrayQuotes };

import axios from "axios";

function getUsers () {
return axios
  .get("https://www.breakingbadapi.com/api/characters")
  .then((response) => {
    return response.data;
  })
  .catch(error => console.log("Se ha producido un error"));
};

function getQuotes () {
    return axios
      .get("https://www.breakingbadapi.com/api/quotes")
      .then((response) => {
        return response.data;
      });
    };

export { getUsers, getQuotes };






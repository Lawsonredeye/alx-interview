#!/usr/bin/node

const request = require("request");
const argv = process.argv[2];

request(`https://swapi-api.alx-tools.com/api/films/${argv}/`, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const jsonBody = JSON.parse(body).characters;
  for(const i in jsonBody) {
    request(`${jsonBody[i]}`, function (err, res, resBody) {
      if (err) {
        console.error(err);
}
      console.log(JSON.parse(resBody).name);
    });
  }
});

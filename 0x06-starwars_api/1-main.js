const request = require('request');
const argv = process.argv[2];

request(`https://swapi-api.alx-tools.com/api/films/${argv}/`, function (error, response, body) {
  if (error) {
     console.error(error);
  }
  const jsonBody = JSON.parse(body).characters;
  const myPromise = new Promise(resolve, reject){
    for (const i in jsonBody) {
        request(`${jsonBody[i]}`, function(err, res, resBody) {
            if (err) {
                reject(err);
            } else {
                console.log(JSON.parse(resBody).name);
            }
        })
    }
  }
 });

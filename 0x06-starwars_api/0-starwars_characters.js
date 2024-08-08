#!/usr/bin/node

const request = require('request');
const argv = process.argv[2];

// request(`https://swapi-api.alx-tools.com/api/films/${argv}/`, function (error, response, body) {
//   if (error) {
//     console.error(error);
//   }
//   const jsonBody = JSON.parse(body).characters;
//   for (const i in jsonBody) {
//     request(`${jsonBody[i]}`, function (err, res, resBody) {
//       if (err) {
//         console.error(err);
//       }
//       console.log(JSON.parse(resBody).name);
//     });
//   }
// });

request(`https://swapi-api.alx-tools.com/api/films/${argv}`, function (error, responnse, body) {
  if (error) {
    console.error(error);
  } else {
    const characters = JSON.parse(body).characters;
    // use promises to be able to print values one at a time

    const promises = characters.map(url => {
      return new Promise((resolve, reject) => {
        request(url, function (err, res, resBody) {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(resBody.name));
          }
        });
      });
    });
    // Resolve all promises sent using resolve
    Promise.all(promises).then(names => {
      names.forEach(name => {
        console.log(name);
      });
    }).catch(err => {
      console.error(err);
    });
  }
});

#!/usr/bin/node

const request = require("request")

request.get(`https://swapi-api.alx-tools.com/api/films/3/`)
.on("response", function(response){
	console.log(response.statusCode)
});
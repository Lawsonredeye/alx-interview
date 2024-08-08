#!/usr/bin/node

const request = require("request")
const fs = require("fs")
const { json } = require("stream/consumers")
argv = process.argv[2]

request(`https://swapi-api.alx-tools.com/api/films/${argv}/`, function (error, response, body){
	json_body = JSON.parse(body)
	for( i in json_body.characters){
		console.log(json_body.characters[i]);
	}
})

// console.log(req)
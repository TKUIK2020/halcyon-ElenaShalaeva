const http = require("http");
const fs = require("fs");
const joker = require('random-joke-getter')
 request("http").createServer((req, res) => {

    console.log(`url: ${req.url}`)

    jokes.getRandomJoke((joke) => {

        res.end(joke)

    })
}).listen(3000, () => console.log("Server is on"));

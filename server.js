const express = require('express')
const app = express();

const port = 4000;
const path = require('path');
//body-parser for post request
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//listen for http request
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying!');
})

//request and response
app.get('/whatever', (req, res) => {
    res.send('Hello from whatever');
})
//geting the parameter name through request parameter name
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})
//listen for http get request localhost 4000/api/movies request is past up and response is being send back in this case some JSON data 
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "movies": [
                {
                    "Title": "Avengers: Infinity War",
                    "Year": "2018",
                    "imdbID": "tt4154756",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M /MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
                },
                {
                    "Title": "Captain America: Civil War",
                    "Year": "2016",
                    "imdbID": "tt3498820",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M /MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
                }
            ]
        }

    ];
    //object mymovies that contains data from movies in this case JSON list
    res.json({
        mymovies: movies
    })
})
//test -return index.html file
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
//get request sends data as part of the URL and -return first Name and Last Name using request from /name
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.firstname + ' ' + req.query.lastname);
})
//sending the data using post request its using the body and it needs body-parser instalation
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.firstname + ' ' + req.body.lastname);
})
//listening for the http localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
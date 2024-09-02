var express = require('express');
var app = express();
var {date, mensaje } = require('./middlewares');

app.get("/", (req, res) => {
    res.send("Estás en la raiz");
});

app.get("/fecha", date, (req, res) => {
    res.send("Aqui se muestra la fecha");
});

app.get("/saludo", mensaje, (req, res) => {
    res.send("Aqui se muestra el saludo");
});

module.exports = app;

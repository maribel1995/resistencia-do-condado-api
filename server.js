require('dotenv').config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const server = require("http").createServer(app);
const cors = require('cors');
const io = require("socket.io")(server);
const logger = require("morgan")

//mongo
const url = process.env.MONGO_URL;
mongoose
.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
})

// Express View engine setup
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//cors
app.use(cors({
  credentials: true,
  origin: ['https://resistencia-do-condado.herokuapp.com/', 'http://resistencia-do-condado.herokuapp.com/', 'http://localhost:3000', 'http://localhost:3001']
}));

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Injected Routes
app.use('/api/game/' , require('./src/routes/game'));
app.use('/api/player/' , require('./src/routes/player'));
app.use('/api/room/' , require('./src/routes/room'));
app.use('/', (req, res) => {
    res.render('index.html');
});

//sockect IO
io.on("connection", socket => {
  console.log(`Socket conectado: ${socket.id}`);
});

server.listen(process.env.PORT);

require('dotenv').config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const cors = require('cors');
const logger = require("morgan")
const Player = require('./src/models/Player');

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

const players = [];
const joinRoom = 'PLAYER_JOIN_ROOM';
const setNick = 'PLAYER_SET_NICK';
const updatePlayer = 'UPDATE_PLAYER';
let owner = '';
const send = {};
//sockect IO
io.on("connection", socket => {
  
  const playerId = socket.id;
  console.log('conectou', playerId)
  io.emit('send your id', playerId);
  socket.on('user set nick', (nickname) => {
    console.log(nickname);
    players.push({playerId, nickname})
  });

  socket.on('subscribe', (data) => {
    console.log(data);
    socket.join('room', () => {
      io.to('room').emit('update user', players)
    });
  })
 

  socket.on('unsubscribe', (data) => {
    socket.leave('room', () => {
      console.log(data)
      players.forEach((player, i) => {
        if(player.playerId === playerId){
          console.log('removeu player')
          players.splice(i, 1);
        }
      });
      io.to('room').emit('update user', players)
    });
  })
  
  
  

  socket.on('disconnect', function(){
    console.log('user disconnect', playerId);

    players.forEach((player, i) => {
      if(player.playerId === playerId){
        console.log('aqui')
        players.splice(i, 1);
      }
    });
    io.emit('update user',  players);
  });
  
});

server.listen(process.env.PORT);

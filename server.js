const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server)
require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use('/api/game/' , require('./routes/game'))
app.use('/', (req, res) => {
    res.render('index.html');
});

io.on("connection", socket => {
  console.log(`Socket conectado: ${socket.id}`);
});

server.listen(process.env.PORT);

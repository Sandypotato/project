const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({
  extended: true
}))

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  //console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    //socket.to(data.room).emit('receive_words', b)
  });

  socket.on("send_message", (data) => {
    socket.in(data.room).emit("receive_message", data);
    console.log(data.time, data.message)
    var noUsers = io.in(roomID).fetchSockets()
    
  });
  socket.on('send_winner', (data) => {
    socket.emit('receive_winner', data)
    console.log(data)
  })
  socket.on('disconnect', ()=> {
    console.log('User Disconnected')
  });
});
/*app.get('words', (req, res) => {
  const wordList=[ 
    'afforest',
    'aftermath',
    'blithesome',
    'blithesome',
    'blithesome',
    'blithesome',
    'broadsheet',
    'buffoonish',
    'caprice',
    'capricious',
    'causerie',
    'chivalrous',
    'congratulatory',
    'dapper',
    'debonaire',
    'devil-may-care',
    'emblazon',
    'eudaemonia',
    'extremum',
    'exultant',
    'featherbrained',
    'felicity',
    'fiddle-faddle',
    'trivial nonsense',
    'gabbley',
    'gallant',
    'gilt',
    'gleeful',
    'halcyon',
    'happy-go-lucky',
    'heyday',
    'hotheaded',
    'indefinite',
    ' quantity',
    'estimated' ,
    'quantity',
    'madcap',
    'majestic',
    'merry andrew',
    'natty',
    'noble-minded',
    'nuance',
    'phantasy',
    'pollyannaish',
    'pleasantly optimistic',
    'prate',
    'salad days',
    'sappy',
    'snappy',
    'soda pop',
    'spiffy',
    'stunner',
    'timberland',
    'timbre',
    'tittle-tattle',
    'twaddle',
    'vividness',
    'wearisome',
    'whimsicalt',
    'whimsy',
    'zippy']
    var b=''
    for(var i=0;i<10;i++){
       let a = Math.floor(Math.random() *60)
       b += wordList[a];
       b+=' '
    }
    console.log(b)
    const name = req.body.name;
    res.send(b, name)
}) */
server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});

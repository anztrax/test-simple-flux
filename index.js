var express = require("express");
var path = require("path");
var app = express();
var http = require("http").Server(app);
var io = require('socket.io')(http);

//view location
app.set('views', __dirname + '/views');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

app.get("/",function(req,res){
  // res.render("index",{
  //   name : "Test",
  //   title : "Express"
  // });
  res.sendFile(__dirname + "/views/index.html");
});

io.on("connection",function(socket){
  console.log("a user connected");

  socket.on('chat message', function(msg){
    io.emit("chat message",msg);
  });
});

http.listen(3000,function(){
  console.log("listening on *:3000");
});

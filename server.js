//Intitialised server

//importing express
const express = require('express');

//Sets uo our express --> express allows us to create server
const app = express();

//making server using http and express
const server = require('http').Server(app);

//giving public folder to express app
app.use(express.static('public'));

//importing socket.io and linking it with server
const io = require('socket.io')(server);

io.on('connection',(socket)=>{//user sendinf message and giveing this message to io
      
   console.log(`connection established`, socket.id);
   socket.on('message',(data)=>{
      io.emit('message',data);//emitting this message to all other socket
   })

   socket.on('disconnect',()=>{
      console.log(`user left the chat`);
   })
})


//this is port on which server will running
const PORT = 9000;
server.listen(PORT,()=>{
   console.log(`server is running on port ${9000}`);
})
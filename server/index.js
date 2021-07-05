const express = require("express");
const socket = require("socket.io");
const http = require("http");
const app = express();
const cors = require("cors");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const PORT = process.env.PORT || 5000;

const router = require("./router");
app.use(router);
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

// CORS ISSUE 해결용
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);
    socket.emit("message", {
      user: "king",
      text: `${user.name}, welcome to the Wolf Game!`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "king", text: `${user.name} has joined!` });
    socket.join(user.room);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    console.log(user);
    io.to(user.room).emit("message", { user: user.name, text: message });
    // message가 FE에 전송된 후 수행하는 콜백
    callback();
  });

  socket.on("disconnection", () => {
    console.log("user had left!");
  });
});

server.listen(PORT, () => {
  console.log("5000에서 실행중");
});

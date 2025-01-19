import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", function (socket) {
  console.log("connected");
  setInterval(() => {
    socket.send("current market price is ->");
  }, 500);
});

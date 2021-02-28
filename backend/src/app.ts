import express from "express";
import socketio from "socket.io";
import http from "http";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

import routes from "./routes";

export interface ISendCurrentPosition {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  time: string;
}

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new socketio.Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
 // socket.join();

  socket.on("sendCurrentPosition", (data: ISendCurrentPosition) => {
    io.emit("receiveCurrentPosition", data);
  });
  socket.on("disconnect", () => {
    console.log("desconectado");
  });
  socket.on("requestCurrentPositionWeb", () => {
    io.emit("requestCurrentPosition");
  });
});

app.use(routes);

server.listen(3333, () => console.log("server is running"));

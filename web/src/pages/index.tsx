import React, { useEffect, useCallback } from "react";
import { io, Socket } from "socket.io-client";
export interface ISendCurrentPosition {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  time: string;
}


let socket: Socket;
const JoinRoom: React.FC = () => {
  useEffect(() => {
    socket = io("http://192.168.1.106:3333");

    socket.on(
      "receiveCurrentPosition",
      (CurrentPosition: ISendCurrentPosition) => {
        console.log(CurrentPosition);
      }
    );
  }, []);

  const handleKeyPress = useCallback(() => {
    console.log("@requestCurrentPosition");
    socket.emit("requestCurrentPositionWeb");
  }, []);
  return (
    <div>
      <h1>Estudo</h1>
      <button onClick={handleKeyPress}>Clique aqui</button>
    </div>
  );
};

export default JoinRoom;

import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Content } from "./styles";

const JoinRoom: React.FC = () => {
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [roomTitle, setRoomTitle] = useState("");

  const handleUserNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      setUserName(e.target.value);
    },
    []
  );

  const handleRoomTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      setRoomTitle(e.target.value);
    },
    []
  );

  const handleSignIn = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!userName || !roomTitle) {
        alert("error"); // change this to a tosat later;

        return;
      }

      history.push({
        pathname: "/chat",
        state: { userName, roomTitle },
      });
    },
    [history, roomTitle, userName]
  );

  return (
    <Container>
      <Content>
        <h1>Join</h1>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            name="userName"
            onChange={handleUserNameChange}
            placeholder="User name"
            value={userName}
          />
          <input
            type="Room"
            name="roomTitle"
            onChange={handleRoomTitleChange}
            placeholder="Room title"
            value={roomTitle}
          />
          <button type="submit">Sign in</button>
        </form>
      </Content>
    </Container>
  );
};

export default JoinRoom;

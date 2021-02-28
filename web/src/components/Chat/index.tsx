import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  KeyboardEvent,
  useRef,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import { FiMessageSquare, FiUsers } from "react-icons/fi";
import { format } from "date-fns";

import Message from "../Chat/Message";

import { Container, Content, Wrapper } from "./styles";
interface LocationParams {
  roomTitle: string;
  userName: string;
}

interface User {
  id: string;
  userName: string;
  roomTitle: string;
}

interface RoomUsers {
  room: string;
  users: User[];
}

export interface MessageFormat {
  id: string;
  user: string;
  text: string;
  time: string;
}

let socket: Socket;

const Chat: React.FC = () => {
  const history = useHistory();
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [room, setRoom] = useState<string>("");
  const [message, setMessage] = useState<MessageFormat>({} as MessageFormat);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<MessageFormat[]>([]);

  const location = useLocation<LocationParams>();

  const { userName, roomTitle } = location.state;

  useEffect(() => {
    socket = io("http://localhost:3333");

    socket.emit("joinRoom", { userName, roomTitle });

    socket.on("message", (generalMessage: MessageFormat) => {
      setMessages((state) => [...state, generalMessage]);
    });

    socket.on("sendMessage", (sentMessage: MessageFormat) => {
      setMessages((state) => [
        ...state,
        { ...sentMessage, user: sentMessage.user },
      ]);
    });

    socket.on("roomUsers", ({ room, users }: RoomUsers) => {
      setUsers(users);
      setRoom(room);
    });
  }, [roomTitle, userName]);

  useEffect(() => {
    return () => {
      socket.close();
    };
  }, []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue((state) => event.target.value);
    },
    []
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter" && inputValue) {
        socket.emit("inputMessage", {
          id: socket.id,
          user: String(userName),
          text: inputValue,
          time: format(new Date(), "h:mm a"),
        });

        setMessage((state) => ({ ...state, text: message.text }));

        setInputValue("");
      }
    },
    [inputValue, message.text, userName]
  );

  const handleLeaveRoom = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Wrapper>
      <Container>
        <Content>
          <div className="header">
            <p>
              <h2>ChatApp</h2>
            </p>
            <button onClick={handleLeaveRoom}>Leave</button>
          </div>

          <div className="chat">
            <ul className="sidebar">
              <li>
                <FiMessageSquare size={20} />
                <strong>Room:</strong>
              </li>
              <li className="room">{room}</li>
              <li>
                <FiUsers size={20} />
                <strong>Users</strong>
              </li>
              {users.map((user) => (
                <li className="user-name">{user.userName}</li>
              ))}
            </ul>

            <div className="chat-window" ref={chatWindowRef}>
              {messages.map((msg: MessageFormat) => (
                <Message key={msg.id} message={msg} />
              ))}
            </div>
          </div>

          <div className="user-input">
            <input
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type message here"
            ></input>
          </div>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Chat;

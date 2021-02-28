import React from "react";

import { MessageFormat } from "../index";

import { Container } from "./styles";

interface MessageProps {
  message: MessageFormat;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <Container>
      <p className="message-info">
        <span>{message.user}</span>
        {message.time}
      </p>
      <p className="message-text">{message.text}</p>
    </Container>
  );
};

export default Message;

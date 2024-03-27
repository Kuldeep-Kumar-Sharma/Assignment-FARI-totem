import { useState } from "react";
import styled from "styled-components";

const MessageInput = styled.input`
  background-color: transparent;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 1px solid #4393de;
  color: white;
  border-radius: 1rem;
  padding: 10px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #4393de;
  }
  &::placeholder {
    color: white;
  }
`;


const SendMessageInput = ({ placeholder }) => {
  const [message, setMessage] = useState('');
  
  return (
      <MessageInput
        type="text"
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
  );
};

export default SendMessageInput;

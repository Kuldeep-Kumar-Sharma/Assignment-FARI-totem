import styled from "styled-components";

const Bubble = styled.div`
  border: 2px solid #4393de;
  border-radius: 0rem 5rem 5rem 5rem;
  height: 50px;
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 14px;
`;

const Message = styled.span`
  color:  white;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;


const MessageBubble = ({ message }) => (
        <Bubble>
          <Message>{message}</Message>
        </Bubble>
      );

export default MessageBubble;

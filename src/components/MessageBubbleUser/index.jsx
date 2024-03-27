import styled from "styled-components";

const Bubble = styled.div`
  background-color: #4393de;
  border-radius: 5rem 5rem 0rem 5rem;
  height: 25px;
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 14px;
`;

const Message = styled.span`
  color: #183e91;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;


export const MessageBubbleUser = ({ message }) => (
        <Bubble>
          <Message>{message}</Message>
        </Bubble>
      );

import sendIcon from "../../assets/img/send.svg";
import styled from "styled-components";

const SndBtn = styled.button`
  background-color: white;
  border: 1px solid #4393de;
  color: white;
  border-radius: 10rem;
  padding: 0.4rem;
`;


const SendButton = ({ send }) => {
  return (
    <SndBtn onClick={() => send()}>
      <img src={sendIcon} width="50" height="50" alt="send" />
    </SndBtn>
  );
};

export default SendButton;

import { useState } from "react";
import styled from "styled-components";

const StyledStartButton = styled.button`
  background-color: white;
  width: 33%;
  border: 1px solid rgb(67, 147, 222);
  color: #4393de;
  border-radius: 10rem;
  padding: 0.4rem;
`;

export const StartButton = ({ start }) => {
  const [started, setStarted] = useState(false);
  return (
    <StyledStartButton
      onClick={() => {
        if (started) {
          start("End");
          setStarted(true);
        } else {
          start("Welcome");
          setStarted(true);
        }
      }}
    >
      {!started ? "Start" : "End"}
    </StyledStartButton>
  );
};

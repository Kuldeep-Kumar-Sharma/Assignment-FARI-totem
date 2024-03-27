import styled from "styled-components";

import { useSpeechRecognition } from "react-speech-kit";

const StyledStartButton = styled.button`
  background-color: white;
  width: 33%;
  border: 1px solid rgb(67, 147, 222);
  color: #4393de;
  border-radius: 10rem;
  padding: 0.4rem;
`;

export const VoiceStartButton = ({ start }) => {
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      console.log(result);
      if (result.includes("hello fari") || result.includes("hello")) {
        start("Welcome");
      }
      if (result.includes("one") || result.includes("option one")) {
        start("one");
      }
      if (
        result.includes("two") ||
        result.includes("do") ||
        result.includes("option two")
      ) {
        start("two");
      }
      if (result.includes("three") || result.includes("option three")) {
        start("three");
      }
    },
  });

  return (
    <StyledStartButton onMouseDown={listen} onMouseUp={stop}>
      {listening ? "🎧" : "🎤"}
    </StyledStartButton>
  );
};

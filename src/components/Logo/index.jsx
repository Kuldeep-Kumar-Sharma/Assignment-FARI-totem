import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-direction: column;
`;

const WelcomeText = styled.span`
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 500;
  word-wrap: normal;
  line-height: normal;
  margin-top: 5rem;
  color: white;
  font-style: italic;
`;

export const Logo = (animate) => {
  const animations = animate === "true" ? "infinite" : "unset";
  const OpenDivRadar = styled.div`
    position: relative;
    width: 1rem;
    height: 1rem;
    align-self: center;
    --col1: rgba(255, 255, 255, 0.8);
    --col2: rgba(255, 255, 255, 0.6);
    --col3: rgba(255, 255, 255, 0.4);
    --col4: rgba(255, 255, 255, 0.3);

    &::after {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: radial-gradient(
        var(--col1) 0 1rem,
        var(--col2) 1rem 2rem,
        var(--col3) 2rem 3rem,
        var(--col4) 3rem 4rem,
        transparent 4rem 1rem
      );
      animation: ripple 4s linear 1;
      animation-fill-mode: forwards;
      animation-iteration-count: ${animations};
      border-radius: 50%;
    }

    @keyframes ripple {
      0% {
        width: 0;
        height: 0;
      }
      100% {
        width: 10rem;
        height: 10rem;
      }
    }
  `;

  return (
    <Container>
      <OpenDivRadar />
      <WelcomeText>
        Hello Welcome - to FARI - please hold mike button and say “Hello FARI“
        to know more” or Click the message button to start the chat interaction.
      </WelcomeText>
    </Container>
  );
};

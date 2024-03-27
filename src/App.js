import { useState, useEffect } from "react";
import { Logo } from "./components/Logo";
import { StartButton } from "./components/StartButton";
import { VoiceStartButton } from "./components/VoiceStartButton";
import { MessageBubbleUser } from "./components/MessageBubbleUser";
import MessageBubble from "./components/MessageBubble";
import { Options } from "./components/Options";
import { useSpeechSynthesis } from "react-speech-kit";
// import SendMessageInput from "./components/SendMessageInput";
// import SendButton from "./components/SendButton";

import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #183e91;
  height: 100vmin;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  padding-top: 20vmin;
  justify-content: center;
  overflow-y: scroll;
`;

const Row = styled.div`
  width: auto;
  border: 1px solid #183e91;
`;

const Container = styled.div`
  padding: 5px;
  width: max-content;
  display: flex;
  height: max-content;
  margin: 10px;
  line-height: 20px;
  color: white;
  font-weight: bold;
  font-size: 2em;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  text-align: center;
  gap: 1rem;
`;

const Rows = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  height: max-content;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`;

const Buttons = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  height: max-content;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

const UserRows = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  height: max-content;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
`;

function App() {
  const welcomeMessage =
    "FARI is an independent, not-for-profit Artificial Intelligence initiative led by the Vrije Universiteit Brussel (VUB) and the Université libre de Bruxelles (ULB).";
  const welcomeMessage2 =
    "Would you like to know about our services: Use voice instructions below or click any one of them to know more.";
  const { speak, speaking } = useSpeechSynthesis();
  const [messageStatus, setMessageStatus] = useState(null);
  const [spokenMessageCount, setSpokenMessageCount] = useState(0);
  useEffect(() => {
    if (!speaking && messageStatus === "Welcome" && spokenMessageCount === 0) {
      speak({ text: welcomeMessage + welcomeMessage2 });
      setSpokenMessageCount(1);
    }
  }, [messageStatus, speak, speaking, spokenMessageCount]);
  const [selected, setSelected] = useState(null);
  const options = [
    "Support for Entrepreneurs",
    "Services for Brussels Public Administration",
    "Services for the civil society",
  ];

  return (
    <MainContainer>
      <Row>
        <Container>
          <Logo animate={speaking} />
          {messageStatus === "Welcome" ||
          messageStatus === "one" ||
          messageStatus === "two" ||
          messageStatus === "three" ? (
            <>
              <UserRows>
                <MessageBubbleUser message="Hello FARI!" />
              </UserRows>
              <Rows>
                <MessageBubble message={welcomeMessage} />
              </Rows>
              <Rows>
                <MessageBubble message={welcomeMessage2} />
              </Rows>
              <Rows>
                <Options
                  options={options}
                  selected={(selected) => setSelected(selected)}
                />
              </Rows>
            </>
          ) : null}
          {messageStatus === "one" ||
          selected === "Support for Entrepreneurs" ? (
            <>
              <UserRows>
                <MessageBubbleUser message="Support for Entrepreneurs" />
              </UserRows>
              <Rows>
                <MessageBubble message="FARI aims to help companies active in the AI and digital domains by guiding their ideas through the various phases of product or service development. Please visit: https://www.fari.brussels/services/sme to know more about us." />
              </Rows>
            </>
          ) : null}
          {messageStatus === "two" ||
          selected === "Services for Brussels Public Administration" ? (
            <>
              <UserRows>
                <MessageBubbleUser message="Services for Brussels Public Administration" />
              </UserRows>
              <Rows>
                <MessageBubble message="Together with the public administration, we help Brussels to be an innovative and sustainable city Please visit:  https://www.fari.brussels/services/public-administration to know more about us." />
              </Rows>
            </>
          ) : null}
          {messageStatus === "three" ||
          selected === "Services for the civil society" ? (
            <>
              <UserRows>
                <MessageBubbleUser message="Services for the civil society" />
              </UserRows>
              <Rows>
                <MessageBubble message="FARI aims to ensure that the voice of the citizens is heard and valued in the development of our projects in Brussels.Please visit: https://www.fari.brussels/services/citizens to know more about us." />
              </Rows>
            </>
          ) : null}

          {messageStatus === "End" ? (
            <>
              <Rows>
                <MessageBubble message="Thank you for visitng FARI. Please visit https://www.fari.brussels/ to stay tuned for AI for the common GOOD Brussels" />
              </Rows>
            </>
          ) : null}

          <Buttons>
            <StartButton
              start={(message) => setMessageStatus(message)}
            />
            <VoiceStartButton start={(message) => setMessageStatus(message)} />
          </Buttons>
          {/* <SendMessageInput placeholder="Your feedback in here...." /> */}
          {/* <SendButton /> */}
        </Container>
      </Row>
    </MainContainer>
  );
}

export default App;

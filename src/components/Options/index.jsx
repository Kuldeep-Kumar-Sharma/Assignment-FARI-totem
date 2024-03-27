import styled from "styled-components";

const OptionContainer = styled.div`
  background-color: transparent;
  width: fit-content;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 1rem 1rem 1rem 1rem;
  padding: 0px;
  align-content: flex-start;
  justify-content: flex-start;
`;

const StyledOption = styled.button`
  background-color: transparent;
  border: 0px;
  padding: 10px;
  border-bottom: 1px solid #fff;
  color: #fff;
  &:last-child {
    border-bottom: none !important;
  }
`;

export const Options = ({ options, selected }) => {
  return options !== undefined && options.length > 0
    ? <OptionContainer>
      {options.map((option) => <StyledOption onClick={() => selected(option)}>{option}</StyledOption>)}
      </OptionContainer>
    : null;
};

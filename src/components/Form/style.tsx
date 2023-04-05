import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: #ADD8E6;
  padding: 50px;
  gap: 15px;
  justify-content: space-evenly;
  button {
    width: 50%;
    max-width: 300px;
    min-width: 150px;
    margin: 0 auto;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  input {
    width: 100%;
  }
`;
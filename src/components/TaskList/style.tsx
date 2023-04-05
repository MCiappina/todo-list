import styled, { css } from "styled-components";

export const TaskItemWrapper = styled('div')<{checked: boolean}>`
  display: flex;
  justify-content: space-evenly;
  :nth-of-type(even) {
    background-color: #1d4e89;
  }
  :nth-of-type(odd) {
    background-color: #00b2ca;
  }
  background-color: ${props => props.checked && '#ea5252 !important' };
  h1 {
    ${props => !props.checked ? css`text-decoration: none` : css`text-decoration: line-through` };
  }
`;

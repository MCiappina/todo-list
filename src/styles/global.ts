import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

function getGridWidth (value: number) {
    if (!value) return;
    let width = value / 12 * 100;
    return `width: ${width}%;`
}

export const Container = styled.div`
  max-width: 1360px;
  width: 85vw;
  margin: 0 auto;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;
  &before,
  &after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    height: auto;
    float: left;
    box-sizing: border-box;
    &before,
    &after {
        content: ' ';
        display: table;
    }
    &:after {
        clear: both;
    }

    @media only screen and (max-width: 798px) {
        flex-direction: column
    }    
`;

export const Column = styled('div')<{mobile: number, tablet: number, desktop: number}>`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 100%;

    @media only screen and (max-width: 798px) {
        width: ${({mobile}) => mobile && getGridWidth(mobile)}
    }
    @media only screen and (min-width: 798px) {
        width: ${({tablet}) => tablet && getGridWidth(tablet)}
    }
    @media only screen and (min-width: 1000px) {
        width: ${({desktop}) => desktop && getGridWidth(desktop)}
    }
`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box
        font-family: 'Open Sans', sans-serif;
    }
    #root {
        margin: 0 auto;
    }
`;

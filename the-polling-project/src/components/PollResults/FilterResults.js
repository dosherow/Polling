import styled from "styled-components";

export default styled.button`
    margin-right: 1.5em;
    grid-column-start: col2;
    grid-column-end: span 1;
    grid-row-start: row6;
    grid-row-end: span 1;
    font-family: "Avenir Next";
    font-weight: 500;
    font-size: 1rem;
    background-image: radial-gradient(#D63131 -1vh, white 1000vw);
    color: white;
    border-radius: .6em;
    border-width: .2em;
    padding: 0.8em;
    border-color: transparent;
    @media (max-width: 1224px) {
        margin: 0;
        padding: 1.5em;
        grid-column-start: col5;
        grid-row-start: row9;
    }

    @media (max-width: 768px) {
        padding: 1em;
        margin-right: 0.6em;
        font-size: 0.8rem;
    }
    
`
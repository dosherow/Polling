import styled from "styled-components";

export default styled.div`
    padding-left: 2em;
    padding-right: 2em;
    grid-column-start: col1;
    grid-column-end: span 2;
    grid-row-start: row3;
    grid-row-end: span 2;
    font-family: "Avenir Next";
    text-align: center;
    justify-self: center;
    font-weight: 900;
    font-size: 3rem;
    line-height: 1em;
    padding-top: 1em;
    @media (max-width: 1224px) {
        font-size: 2.2rem;
        padding-top: 1.8em;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
        padding-top: 2.2em;
    }
`
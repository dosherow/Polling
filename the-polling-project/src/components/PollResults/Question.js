import styled from "styled-components";

export default styled.div`
    grid-column-start: col1;
    grid-column-end: span 2;
    grid-row-start: row1;
    grid-row-end: span 2;
    font-family: "Avenir Next";
    font-weight: 700;
    font-size: 1.2rem;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 1em;
    line-height: 1em;
    @media (max-width: 1224px) {
        font-size: 1rem;
        padding-top: 0.6em;
        padding-right: 1em;
        line-height: 1.2em;
    }

    @media (max-width: 768px) {
        font-size: 0.8rem;
        padding-top: 0.8em;
        padding-right: 1em;
        padding-right: 1em;
    }
`
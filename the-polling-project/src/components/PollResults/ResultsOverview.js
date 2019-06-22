import styled from "styled-components";

export default styled.div`
    color: black;
    font-family: "Avenir Next";
    font-weight: 700;
    padding-top: 1.2em;
    line-height: 1.75em;
    font-size: 0.8rem;
    margin: 0 auto;
    padding-left: 3.2vw;
    @media (max-width: 1224px) {
        font-size: 0.7rem;
        line-height: 1.9em;
    }

    @media (max-width: 768px) {
        font-size: 0.6rem;
        line-height: 2em;
    }
`
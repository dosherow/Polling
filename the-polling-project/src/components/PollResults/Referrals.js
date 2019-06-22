import styled from "styled-components";

export default styled.div`
    font-family: "Avenir Next";
    font-weight: 700;
    font-size: 1.6rem;
    color: black;
    position: relative;
    top: 2vh;
    left: 2vw;
    @media (max-width: 1224px) {
        font-size: 1.4rem;
        left: 1.5vw;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`
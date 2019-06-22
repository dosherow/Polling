import styled from "styled-components";

export default styled.div`
    width: 90%;
    position: relative;
    font-family: "Avenir Next";
    top: 2vh;
    color: white;
    padding-top: 3vh;
    flex-basis: 35%;
    @media (max-width: 768px) {
        flex-basis: 80%;
        padding-top: 1vh;
        top: 3vh;
    }
`
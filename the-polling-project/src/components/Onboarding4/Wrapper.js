import styled from "styled-components";

export default styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        grid-gap: 15vh;
        padding-top: 8vh;
    }
`
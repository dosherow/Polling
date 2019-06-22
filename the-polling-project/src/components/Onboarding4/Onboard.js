import styled from "styled-components";

export default styled.div`
    background-image: ${props => (props.primary ? "linear-gradient(#3151D6 30vh, white 500vw);" : "linear-gradient(#E7ECED 30vh, white 500vw);")};
    width: ${props => (props.primary ? "55vw" : "30vw")};
    height: 70vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 2vw;
    box-shadow: 0 0 20px 0 rgba(82, 95, 110, 0.3);
    @media (max-width: 786px) {
        margin: auto;
        justify-self: center;
        align-items: center;
        width: 90vw;
        height: ${props => (props.primary ? "80vh" : "65vh")};
        background-image: ${props => (props.primary ? "linear-gradient(#3151D6 100vh, white 500vw);" : "linear-gradient(#E7ECED 30vh, white 500vw);")};
    }
`